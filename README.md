# Library

A mobile-first reading library for book reviews. Every review in `output/` is
published as a small static site that runs on GitHub Pages — no build step, no
runtime dependencies, no backend.

## User guide

**Library** (first screen) lists every book you have not finished yet.

- Tap a card to open the review.
- Search by title or author with the box above the list.
- The check button on a card marks the book as **Done** without opening it.

On a phone the list is a single column of full-width cards. From tablet width
up it becomes a uniform grid — up to five equal columns filling the screen on a
laptop.

**Reading a book**

- The `TL;DR` paragraph is highlighted as a lede; numbered sections in the
  markdown become an accent-coloured list.
- `A−` / `A+` in the top bar changes the text size (80 %–160 %). The setting is
  remembered and applied to every book.
- The sun/moon button switches between light and dark theme. On first visit the
  site follows your device setting.
- A thin bar under the top bar shows how far you have read. Your position is
  saved per book and restored the next time you open it — handy for long
  reviews read in several sittings.
- `Mark as Done` at the end of the review files it under **Reading History**.

**Reading History** (second tab) shows finished books, newest first, with the
date they were finished and a badge on the tab. Re-read any of them, or use the
undo button on the card to move a book back to the Library.

Everything (theme, text size, finished books, reading positions) is stored in
one hidden file in the reader's own Google Drive — see **Google sign-in** below.
Until the first sign-in, a temporary copy is kept in the browser's
`localStorage` under `library.temp.v1` so nothing is lost on reload; that copy
is uploaded and deleted at the first successful sync.

## Google sign-in

The person button in the top bar opens **Account**, where the reader signs in
with their own Google account. Signing in is what stores the library: without
it, everything stays in the browser only.

The state above (theme, text size, finished books, reading positions) lives in a
single file — `library.json` by default — inside the **appDataFolder** of the
reader's own Google Drive. That folder is private to this application: it does
not show up in Drive's file list, cannot be shared, and is readable only by this
site. So the same library follows the reader between browsers and devices
without any server in the middle.

- Changes are pushed a few seconds after you make them, and pulled again on the
  next visit or from **Sync now**.
- Two devices never overwrite each other: per book the newest entry wins, and
  the single settings (theme, text size) follow whichever side wrote last.
- Signing out only drops the local session — the file in Drive is left alone.
- The access token is kept in `localStorage` under `library.auth.v1` and lasts
  one hour. It is never refreshed silently: after an hour the account screen
  asks to sign in again. The token never touches the Drive document.

### Setting it up

Sign-in is inert until an OAuth client exists, so the account screen shows the
setup checklist instead of the button.

1. In the [Cloud console](https://console.cloud.google.com/), create a project
   and enable the **Google Drive API** for it.
2. Configure the **OAuth consent screen** and add yourself as a test user (an
   unpublished app in *Testing* mode only works for the accounts you list).
3. Create an **OAuth client** of type **Web application**.
4. Under *Authorised JavaScript origins* add every origin the site is served
   from — scheme, host and port, with no path or trailing slash, and they must
   match the address bar exactly (an unregistered origin gives
   `Error 400: origin_mismatch`). For local previews that is usually
   `http://localhost:8099` (the default port from step 2 below); `127.0.0.1`
   and `localhost` are *different* origins, so add the one you actually open.
   For production add `https://<user>.github.io`.
5. Put the client id into `data/config.json`:

   ```json
   {
     "googleClientId": "123456789-abcdef.apps.googleusercontent.com",
     "driveFileName": "library.json"
   }
   ```

6. Rebuild and push.

The scopes requested are `openid email profile` (used only for the greeting on
the account screen) and `https://www.googleapis.com/auth/drive.appdata` (the
hidden folder). Because `drive.appdata` is a *sensitive* scope, Google shows a
warning screen until the app is verified for production use.

## Development

### Repo layout

```
output/                 book reviews: [book name]-[author].md
tools/build.py          scans output/ -> data/books.json, assembles _site/
data/books.json         generated manifest consumed by the app
data/config.json        hand written: OAuth client id + Drive file name
index.html              app shell
assets/css/styles.css   design tokens, themes, all layout
assets/js/app.js        router, screens, state, drive sync
assets/js/gdrive.js     Google sign-in + Drive REST calls
assets/vendor/          vendored libraries (marked) — never load from a CDN
_site/                  generated deployable copy (git-ignored)
```

### Adding a book

1. Save the review as `output/<book name>-<author>.md` (spaces become `_`,
   lowercase; the app splits the file name on the **last** `-`).
2. Run the build and preview:

```
python3 tools/build.py
python3 -m http.server 8099 --directory _site
```

Open http://localhost:8099 — nothing else needs to be registered.

To refresh only the manifest (useful when iterating on the parser):

```
python3 tools/build.py --no-site
```

### Coding guidelines

- **No build step, no framework.** `index.html` loads three plain scripts; the
  app is two small IIFEs, `assets/js/app.js` and `assets/js/gdrive.js`, using
  ES5-style syntax so they run in older mobile browsers without transpiling.
- **Relative URLs only.** The site is served from `https://<user>.github.io/library/`,
  so every `href`/`src`/`fetch` must stay relative.
- **Markdown is fetched lazily.** `data/books.json` only carries metadata;
  the `.md` file is requested when a book is opened and cached in memory.
- **Styling:** mobile-first. The grid is one column on phones and goes
  2 → 3 → 4 → **5 columns** at 640 / 900 / 1120 / 1280 px. It is full-bleed up
  to `--grid-width` (1560 px) and centred above that, so cards never stretch
  across a wide monitor; the app bar gets matching padding so the title stays
  aligned with the grid. Tracks have a max width (272 px at 5 columns) plus
  `justify-content: center`, so the block stays centred on any screen. From
  640 px up, `grid-auto-rows` pins every card to one height (252 px, sized for a
  two-line title) so cards stay uniform, and the card is a flex column with
  `.card__meta { margin-top: auto }` so the meta line always sits at the bottom.
  The reader stays measure-bound and centred.
- **Colours** come from CSS custom properties in `:root` with a
  `[data-theme="dark"]` override — never hard-code a colour.
- **Touch targets** are at least 44 px effective size; small controls use a
  `::before` pseudo-element to expand the hit area.
- **Prefer in-place refreshes** over re-rendering a screen: the search input
  keeps focus and value because only the list container is replaced
  (`collection.refresh()` in `app.js`).
- **State changes** go through `setDone()` / `touch()` so the tab badge, both
  screens and the Drive copy stay in sync. `touch()` stamps `state.updatedAt`,
  refreshes the signed-out copy and schedules a debounced push.
- **Drive is the store; localStorage is plumbing.** Only the OAuth session
  (`library.auth.v1`) and the temporary pre-sign-in copy (`library.temp.v1`)
  are stored locally. The first successful sync uploads that copy and clears
  it, so the Drive document is the single source of truth afterwards.
- Bump `DOC_VERSION` if you ever change the stored shape.
- **One external script.** `accounts.google.com/gsi/client` is fetched on
  demand by `gdrive.warmup()` when the account screen opens — never at boot,
  and never for a reader who never taps it. Everything else is local.
- **Auth lives apart from the library.** The token sits in `library.auth.v1`,
  never in the Drive document. When a session exists the first paint waits for
  the Drive pull, so the list never flashes an empty history.

### Deploying to GitHub Pages

Pushes to `main` run `.github/workflows/pages.yml`, which builds `_site/` and
publishes it with `actions/deploy-pages`. Nothing else is required — set
**Settings → Pages → Source → GitHub Actions** once, and add a new `.md` file to
`output/` to publish a new review on the next push.

## Notes

- The `output/*.md` files are generated by the review pipeline in the parent
  project; this repo only consumes them.
- Because GitHub Pages caches aggressively, bump a file name (or hard-refresh)
  if a change to `assets/` does not appear.
