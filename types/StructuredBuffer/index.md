---
layout: stdlib-reference
---

# struct StructuredBuffer\<T, L\>

## Description

Represents an opaque handle to a read-only structured buffer allocated in global memory.
A structured buffer can be viewed as an array of the specified element type.

## Generic Parameters

#### T {#typeparam-T}
The element type of the buffer.

#### L: [IBufferDataLayout](/stdlib-reference/interfaces/IBufferDataLayout/index) = [DefaultDataLayout](/stdlib-reference/types/DefaultDataLayout/index) {#typeparam-L}
The memory layout of the buffer.


## Methods

* [GetDimensions](/stdlib-reference/types/StructuredBuffer/GetDimensions)
* [Load](/stdlib-reference/types/StructuredBuffer/Load)
* operator\[\]

## See also

<span class='code'><a href="/stdlib-reference/types/RWStructuredBuffer/index" class="code_type">RWStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/AppendStructuredBuffer/index" class="code_type">AppendStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/ConsumeStructuredBuffer/index" class="code_type">ConsumeStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index" class="code_type">RasterizerOrderedStructuredBuffer</a></span>.
*


