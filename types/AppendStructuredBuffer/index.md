---
layout: stdlib-reference
---

# struct AppendStructuredBuffer\<T, L\>

## Description

Represents an opaque handle to an append structured buffer allocated in global memory.
A structured buffer can be viewed as an array of the specified element type.
An append structure buffer internally maintains an atomic counter to keep track of the number of elements in the buffer,
and provide an atomic operation to append a new element to the buffer.

## Generic Parameters

#### T {#typeparam-T}
The element type of the buffer.

#### L: [IBufferDataLayout](/stdlib-reference/interfaces/IBufferDataLayout/index) = [DefaultDataLayout](/stdlib-reference/types/DefaultDataLayout/index) {#typeparam-L}
The memory layout of the buffer.


## Methods

* [Append](/stdlib-reference/types/AppendStructuredBuffer/Append)
* [GetDimensions](/stdlib-reference/types/AppendStructuredBuffer/GetDimensions)

## See also

<span class='code'><a href="/stdlib-reference/types/RWStructuredBuffer/index" class="code_type">RWStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/ConsumeStructuredBuffer/index" class="code_type">ConsumeStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index" class="code_type">RasterizerOrderedStructuredBuffer</a></span>.
*


