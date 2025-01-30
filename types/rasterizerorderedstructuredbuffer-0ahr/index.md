---
layout: stdlib-reference
---

# struct RasterizerOrderedStructuredBuffer\<T, L\>

*Conditionally conforms to:* \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>

## Description

Represents an opaque handle to a mutable structured buffer allocated in global memory.
A structured buffer can be viewed as an array of the specified element type.

## Generic Parameters

#### T {#typeparam-T}
The element type of the buffer.

#### L: [IBufferDataLayout](/stdlib-reference/interfaces/ibufferdatalayout-017b/index) = [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index) {#typeparam-L}
The memory layout of the buffer.


## Fields

#### [kind](/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/kind) : [DescriptorKind](/stdlib-reference/types/descriptorkind-0a/index) = [DescriptorKind](/stdlib-reference/types/descriptorkind-0a/index)\.[Buffer](/stdlib-reference/types/descriptorkind-0a/index#decl-Buffer) {#decl-kind}

## Methods

* [DecrementCounter](/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/decrementcounter-09)
* [GetDimensions](/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/getdimensions-03)
* [IncrementCounter](/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/incrementcounter-09)
* [Load](/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/load-0)
* operator\[\]
* [init](/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/init)

## Conditional Conformances

### Conformance to \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>
`RasterizerOrderedStructuredBuffer<T, L>` additionally conforms to `\_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>` when the following conditions are met:

  * [L](/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/index#typeparam-L) : [IBufferDataLayout](/stdlib-reference/interfaces/ibufferdatalayout-017b/index)
## Remarks


The <span class='code'><a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/index#typeparam-L" class="code_type">L</a></span> generic parameter is used to specify the memory layout of the buffer when
generating SPIRV.
<span class='code'><a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/index#typeparam-L" class="code_type">L</a></span> must be one of <span class='code'><a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a></span>, <span class='code'><a href="/stdlib-reference/types/std140datalayout-06a/index" class="code_type">Std140DataLayout</a></span>, <span class='code'><a href="/stdlib-reference/types/std430datalayout-06a/index" class="code_type">Std430DataLayout</a></span> or <span class='code'><a href="/stdlib-reference/types/scalardatalayout-06a/index" class="code_type">ScalarDataLayout</a></span>.
The default value is <span class='code'><a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a></span>.
When generating code for other targets, this parameter is ignored and has no effect on the generated code.

## See also

<span class='code'><a href="/stdlib-reference/types/structuredbuffer-0a/index" class="code_type">StructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/appendstructuredbuffer-06g/index" class="code_type">AppendStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/consumestructuredbuffer-07h/index" class="code_type">ConsumeStructuredBuffer</a></span>
*


