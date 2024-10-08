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

## Remarks


This type is supported natively when targeting HLSL.
When generating code for other targets, this type is translated into a pair or an ordinary <span class='code'><a href="/stdlib-reference/types/StructuredBuffer/index" class="code_type">StructuredBuffer</a></span> and
a separate <span class='code'><a href="/stdlib-reference/types/RWStructuredBuffer/index" class="code_type">RWStructuredBuffer</a></span> that holds the atomic counter.
The <span class='code'><a href="/stdlib-reference/types/ConsumeStructuredBuffer/index#typeparam-L" class="code_type">L</a></span> generic parameter is used to specify the memory layout of the buffer when
generating SPIRV.
<span class='code'><a href="/stdlib-reference/types/ConsumeStructuredBuffer/index#typeparam-L" class="code_type">L</a></span> must be one of <span class='code'><a href="/stdlib-reference/types/DefaultDataLayout/index" class="code_type">DefaultDataLayout</a></span>, <span class='code'><a href="/stdlib-reference/types/Std140DataLayout/index" class="code_type">Std140DataLayout</a></span>, <span class='code'><a href="/stdlib-reference/types/Std430DataLayout/index" class="code_type">Std430DataLayout</a></span> or <span class='code'><a href="/stdlib-reference/types/ScalarDataLayout/index" class="code_type">ScalarDataLayout</a></span>.
The default value is <span class='code'><a href="/stdlib-reference/types/DefaultDataLayout/index" class="code_type">DefaultDataLayout</a></span>.
When generating code for other targets, this parameter is ignored and has no effect on the generated code.

## See also

<span class='code'><a href="/stdlib-reference/types/StructuredBuffer/index" class="code_type">StructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/AppendStructuredBuffer/index" class="code_type">AppendStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/RWStructuredBuffer/index" class="code_type">RWStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index" class="code_type">RasterizerOrderedStructuredBuffer</a></span>.


