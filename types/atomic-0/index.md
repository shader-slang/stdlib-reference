---
layout: stdlib-reference
---

# struct Atomic\<T\>

## Description

A wrapper for <span class='code'><a href="/stdlib-reference/interfaces/iatomicable-01/index" class="code_type">IAtomicable</a></span> types to introduce atomic load and store
operations. Values of this type are to be stored in buffers or groupshared
memory.

All operations take a <span class='code'><a href="/stdlib-reference/types/memoryorder-06/index" class="code_type">MemoryOrder</a></span> parameter which influenced the
semantics of the performed operation

All operations take place at the device scope.

Operators <span class='code'>+=</span>, <span class='code'>-=</span>, <span class='code'>&amp;=</span>, <span class='code'>|=</span>, <span class='code'>^=</span>, <span class='code'>++</span>, <span class='code'>--</span> are overloaded to
operate on <span class='code'><a href="/stdlib-reference/types/atomic-0/index" class="code_type">Atomic</a>&lt;<a href="/stdlib-reference/types/atomic-0/index#typeparam-T" class="code_type">T</a>&gt;</span>.


## Generic Parameters

#### T: [IAtomicable](/stdlib-reference/interfaces/iatomicable-01/index) {#typeparam-T}

## Methods

* [load](/stdlib-reference/types/atomic-0/load)
* [store](/stdlib-reference/types/atomic-0/store)
* [exchange](/stdlib-reference/types/atomic-0/exchange)
* [compareExchange](/stdlib-reference/types/atomic-0/compareexchange-7)
* [add](/stdlib-reference/types/atomic-0/add)
* [sub](/stdlib-reference/types/atomic-0/sub)
* [max](/stdlib-reference/types/atomic-0/max)
* [min](/stdlib-reference/types/atomic-0/min)
* [and](/stdlib-reference/types/atomic-0/and)
* [or](/stdlib-reference/types/atomic-0/or)
* [xor](/stdlib-reference/types/atomic-0/xor)
* [increment](/stdlib-reference/types/atomic-0/increment)
* [decrement](/stdlib-reference/types/atomic-0/decrement)

