#!/usr/bin/env python3
"""Build the static library site.

Reads every markdown review from ``output/`` (``[book name]-[author].md``),
writes the book manifest to ``data/books.json`` and assembles a deployable
copy of the site in ``_site/`` (index.html, assets/, data/, output/).

``data/config.json`` is hand written, not generated: it carries the OAuth
client id used by the Google sign-in button. It is copied verbatim.

Usage:
    python3 tools/build.py            # refresh data/books.json + _site/
    python3 tools/build.py --no-site  # only refresh data/books.json
"""

import argparse
import hashlib
import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUTPUT_DIR = ROOT / "output"
DATA_DIR = ROOT / "data"
SITE_DIR = ROOT / "_site"
MANIFEST = DATA_DIR / "books.json"
CONFIG = DATA_DIR / "config.json"

SITE_FILES = ["index.html", ".nojekyll"]
SITE_DIRS = ["assets"]

# Words that stay lowercase inside a slug turned back into a title.
MINOR_WORDS = {
    "a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "into",
    "nor", "of", "on", "onto", "or", "over", "per", "the", "to", "up", "via",
    "with", "vs",
}

MARKDOWN_LINK = re.compile(r"\[([^\]]*)\]\([^)]*\)")
MARKDOWN_NOISE = re.compile(r"[*_`>#]+")


def titleize(slug):
    """``the_forever_war`` -> ``The Forever War``."""
    words = []
    for index, word in enumerate(slug.split("_")):
        word = word.strip()
        if not word:
            continue
        if word.isupper() or (len(word) == 1 and word.isalpha()):
            words.append(word)
        elif index and word.lower() in MINOR_WORDS:
            words.append(word.lower())
        else:
            words.append(word[0].upper() + word[1:])
    return " ".join(words) or slug


def split_filename(stem):
    """``bridge_to_terabithia-katherine_paterson`` -> (title, author)."""
    if "-" not in stem:
        return titleize(stem), ""
    title_slug, author_slug = stem.rsplit("-", 1)
    return titleize(title_slug), titleize(author_slug)


def clean_excerpt(text):
    """Plain-text single-line preview taken from the head of a review."""
    text = MARKDOWN_LINK.sub(r"\1", text)
    text = MARKDOWN_NOISE.sub("", text)
    text = re.sub(r"^\s*\d+[.)]\s*", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    if len(text) > 180:
        text = text[:177].rsplit(" ", 1)[0] + "..."
    return text


def reading_minutes(text):
    """Rough reading time. Vietnamese and English average ~200 wpm."""
    words = len(re.findall(r"\S+", text))
    return max(1, round(words / 200))


def collect_books():
    if not OUTPUT_DIR.is_dir():
        raise SystemExit(f"missing output directory: {OUTPUT_DIR}")

    books = []
    for path in sorted(OUTPUT_DIR.glob("*.md")):
        text = path.read_text(encoding="utf-8")
        title, author = split_filename(path.stem)
        head = next((line for line in text.splitlines() if line.strip()), "")
        books.append(
            {
                "id": path.stem,
                "title": title,
                "author": author,
                "file": f"output/{path.name}",
                "excerpt": clean_excerpt(head),
                "words": len(re.findall(r"\S+", text)),
                "minutes": reading_minutes(text),
            }
        )
    return books


def build_id(books):
    """Short digest of the review contents.

    Every network request for a review is suffixed with this id, so a deploy
    that changes the text gets fresh copies while an unchanged rebuild keeps
    the browser cache warm.
    """
    digest = hashlib.sha256()
    for book in books:
        digest.update(book["id"].encode("utf-8"))
        digest.update(b"\0")
        digest.update((ROOT / book["file"]).read_bytes())
        digest.update(b"\0")
    return digest.hexdigest()[:12]


def write_manifest(books):
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    payload = {"build": build_id(books), "count": len(books), "books": books}
    MANIFEST.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    return payload


def build_site(books):
    if SITE_DIR.exists():
        shutil.rmtree(SITE_DIR)
    SITE_DIR.mkdir(parents=True)

    for name in SITE_FILES:
        src = ROOT / name
        if src.exists():
            shutil.copy2(src, SITE_DIR / name)

    for name in SITE_DIRS:
        src = ROOT / name
        if src.is_dir():
            shutil.copytree(src, SITE_DIR / name)

    data = SITE_DIR / DATA_DIR.name
    data.mkdir(parents=True, exist_ok=True)
    shutil.copy2(MANIFEST, data / MANIFEST.name)
    if CONFIG.exists():
        shutil.copy2(CONFIG, data / CONFIG.name)

    out = SITE_DIR / OUTPUT_DIR.name
    out.mkdir(parents=True, exist_ok=True)
    for path in sorted(OUTPUT_DIR.glob("*.md")):
        shutil.copy2(path, out / path.name)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--no-site", action="store_true", help="only refresh data/books.json"
    )
    args = parser.parse_args()

    books = collect_books()
    payload = write_manifest(books)

    print(f"wrote {MANIFEST.relative_to(ROOT)} ({payload['count']} books, build {payload['build']})")
    for book in books:
        print(f"  - {book['title']} — {book['author']}")

    if not args.no_site:
        build_site(books)
        print(f"wrote {SITE_DIR.relative_to(ROOT)}/")


if __name__ == "__main__":
    main()
