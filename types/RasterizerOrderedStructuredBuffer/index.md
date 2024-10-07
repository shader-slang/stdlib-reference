---
layout: stdlib-reference
---

# struct RasterizerOrderedStructuredBuffer\<T, L\>

## Description

Represents an opaque handle to a mutable structured buffer allocated in global memory.
A structured buffer can be viewed as an array of the specified element type.

## Generic Parameters

#### T {#typeparam-T}
The element type of the buffer.

#### L: [IBufferDataLayout](/stdlib-reference/interfaces/IBufferDataLayout/index) = [DefaultDataLayout](/stdlib-reference/types/DefaultDataLayout/index) {#typeparam-L}
The memory layout of the buffer.


## Methods

* [DecrementCounter](/stdlib-reference/types/RasterizerOrderedStructuredBuffer/DecrementCounter)
* [GetDimensions](/stdlib-reference/types/RasterizerOrderedStructuredBuffer/GetDimensions)
* [IncrementCounter](/stdlib-reference/types/RasterizerOrderedStructuredBuffer/IncrementCounter)
* [Load](/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load)
* operator\[\]

## See also

<span class='code'><a href="/stdlib-reference/types/StructuredBuffer/index" class="code_type">StructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/AppendStructuredBuffer/index" class="code_type">AppendStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/ConsumeStructuredBuffer/index" class="code_type">ConsumeStructuredBuffer</a></span>
*


