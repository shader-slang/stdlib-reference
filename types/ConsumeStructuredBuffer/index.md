---
layout: stdlib-reference
---

# struct ConsumeStructuredBuffer\<T, L\>

## Description

Represents an opaque handle to a consume structured buffer allocated in global memory.
A structured buffer can be viewed as an array of the specified element type.
An append structure buffer internally maintains an atomic counter to keep track of the number of elements in the buffer,
and provide an atomic operation to append a new element to the buffer.

## Generic Parameters

#### T {#typeparam-T}
The element type of the buffer.

#### L: [IBufferDataLayout](/stdlib-reference/interfaces/IBufferDataLayout/index) = [DefaultDataLayout](/stdlib-reference/types/DefaultDataLayout/index) {#typeparam-L}
The memory layout of the buffer.


## Methods

* [Consume](/stdlib-reference/types/ConsumeStructuredBuffer/Consume)
* [GetDimensions](/stdlib-reference/types/ConsumeStructuredBuffer/GetDimensions)

## See also

<span class='code'><a href="/stdlib-reference/types/StructuredBuffer/index" class="code_type">StructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/AppendStructuredBuffer/index" class="code_type">AppendStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/RWStructuredBuffer/index" class="code_type">RWStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index" class="code_type">RasterizerOrderedStructuredBuffer</a></span>.
*


