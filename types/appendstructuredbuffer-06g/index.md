---
layout: stdlib-reference
---

# struct AppendStructuredBuffer\<T, L\>

*Conditionally conforms to:* \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>

## Description

Represents an opaque handle to an append structured buffer allocated in global memory.
A structured buffer can be viewed as an array of the specified element type.
An append structure buffer internally maintains an atomic counter to keep track of the number of elements in the buffer,
and provide an atomic operation to append a new element to the buffer.

## Generic Parameters

#### T {#typeparam-T}
The element type of the buffer.

#### L: [IBufferDataLayout](/stdlib-reference/interfaces/ibufferdatalayout-017b/index) = [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index) {#typeparam-L}
The memory layout of the buffer.


## Fields

#### [kind](/stdlib-reference/types/appendstructuredbuffer-06g/kind) : [DescriptorKind](/stdlib-reference/types/descriptorkind-0a/index) = [DescriptorKind](/stdlib-reference/types/descriptorkind-0a/index)\.[Buffer](/stdlib-reference/types/descriptorkind-0a/index#decl-Buffer) {#decl-kind}

## Methods

* [Append](/stdlib-reference/types/appendstructuredbuffer-06g/append-0)
* [GetDimensions](/stdlib-reference/types/appendstructuredbuffer-06g/getdimensions-03)
* [init](/stdlib-reference/types/appendstructuredbuffer-06g/init)

## Conditional Conformances

### Conformance to \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>
`AppendStructuredBuffer<T, L>` additionally conforms to `\_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>` when the following conditions are met:

  * [L](/stdlib-reference/types/appendstructuredbuffer-06g/index#typeparam-L) : [IBufferDataLayout](/stdlib-reference/interfaces/ibufferdatalayout-017b/index)
## Remarks


This type is supported natively when targeting HLSL.
When generating code for other targets, this type is translated into a pair or an ordinary <span class='code'><a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a></span> and
a separate <span class='code'><a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a></span> that holds the atomic counter.
The <span class='code'><a href="/stdlib-reference/types/appendstructuredbuffer-06g/index#typeparam-L" class="code_type">L</a></span> generic parameter is used to specify the memory layout of the buffer when
generating SPIRV.
<span class='code'><a href="/stdlib-reference/types/appendstructuredbuffer-06g/index#typeparam-L" class="code_type">L</a></span> must be one of <span class='code'><a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a></span>, <span class='code'><a href="/stdlib-reference/types/std140datalayout-06a/index" class="code_type">Std140DataLayout</a></span>, <span class='code'><a href="/stdlib-reference/types/std430datalayout-06a/index" class="code_type">Std430DataLayout</a></span> or <span class='code'><a href="/stdlib-reference/types/scalardatalayout-06a/index" class="code_type">ScalarDataLayout</a></span>.
The default value is <span class='code'><a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a></span>.
When generating code for other targets, this parameter is ignored and has no effect on the generated code.

## See also

<span class='code'><a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/consumestructuredbuffer-07h/index" class="code_type">ConsumeStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/index" class="code_type">RasterizerOrderedStructuredBuffer</a></span>.


