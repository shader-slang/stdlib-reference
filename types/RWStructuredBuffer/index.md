---
layout: stdlib-reference
---

# struct RWStructuredBuffer\<T, L\>

## Description

Represents an opaque handle to a mutable structured buffer allocated in global memory.
A structured buffer can be viewed as an array of the specified element type.

## Generic Parameters

#### T {#typeparam-T}
The element type of the buffer.

#### L: [IBufferDataLayout](/stdlib-reference/interfaces/IBufferDataLayout/index) = [DefaultDataLayout](/stdlib-reference/types/DefaultDataLayout/index) {#typeparam-L}
The memory layout of the buffer.


## Methods

* [DecrementCounter](/stdlib-reference/types/RWStructuredBuffer/DecrementCounter)
* [GetDimensions](/stdlib-reference/types/RWStructuredBuffer/GetDimensions)
* [IncrementCounter](/stdlib-reference/types/RWStructuredBuffer/IncrementCounter)
* [Load](/stdlib-reference/types/RWStructuredBuffer/Load)
* operator\[\]

## Remarks


The <span class='code'><a href="/stdlib-reference/types/RWStructuredBuffer/index#typeparam-L" class="code_type">L</a></span> generic parameter is used to specify the memory layout of the buffer when
generating SPIRV.
<span class='code'><a href="/stdlib-reference/types/RWStructuredBuffer/index#typeparam-L" class="code_type">L</a></span> must be one of <span class='code'><a href="/stdlib-reference/types/DefaultDataLayout/index" class="code_type">DefaultDataLayout</a></span>, <span class='code'><a href="/stdlib-reference/types/Std140DataLayout/index" class="code_type">Std140DataLayout</a></span>, <span class='code'><a href="/stdlib-reference/types/Std430DataLayout/index" class="code_type">Std430DataLayout</a></span> or <span class='code'><a href="/stdlib-reference/types/ScalarDataLayout/index" class="code_type">ScalarDataLayout</a></span>.
The default value is <span class='code'><a href="/stdlib-reference/types/DefaultDataLayout/index" class="code_type">DefaultDataLayout</a></span>.
When generating code for other targets, this parameter is ignored and has no effect on the generated code.

## See also

<span class='code'><a href="/stdlib-reference/types/StructuredBuffer/index" class="code_type">StructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/AppendStructuredBuffer/index" class="code_type">AppendStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/ConsumeStructuredBuffer/index" class="code_type">ConsumeStructuredBuffer</a></span>
*


