Fundamental
Fast lookup is achieved by trading space and computation for organization.

Targets
Understand:

hash functions;
buckets;
collisions;
load factor;
resizing;
open addressing;
chaining.
Implement
A HashMap from scratch in:

C;
Java;
Rust.
Operations:

put
get
remove
contains
resize
Experiments
Test:

good hash function;
deliberately bad hash function;
low load factor;
high load factor;
different table sizes.
Production mapping
Compare:

Java HashMap;
JavaScript Map;
Python dict;
Go map;
Rust HashMap.
Practical project
Build an in-memory session store:

sessionId → session
Add TTL and cleanup.

Failure experiments
hash collision storm;
memory growth;
expired-session accumulation.
Acceptance
Explain:

Why does a hash table provide average O(1) lookup but not guaranteed O(1)?

Deliverable
hashmap-lab/ + collision benchmark.