---
layout: stdlib-reference
---

# enum MemoryOrder

## Description



## Values 

#### _Relaxed = 0_ {#decl-Relaxed}
No memory operation ordering constraints

#### _Acquire = 1_ {#decl-Acquire}
Ensures that all subsequent memory operations in the same thread are not reordered before it

#### _Release = 2_ {#decl-Release}
Ensures that all prior memory operations in the same thread are not reordered after it

#### _AcquireRelease = 3_ {#decl-AcquireRelease}
Combines both acquire and release semantics

#### _SeqCst = 4_ {#decl-SeqCst}
Provides the strongest ordering: total order exists between all SeqCst operations

