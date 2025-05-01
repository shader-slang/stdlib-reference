---
layout: stdlib-reference
---

# struct RWStructuredBuffer\<T, L\>

*Conditionally conforms to:* \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>, [IRWArray](/stdlib-reference/interfaces/irwarray-0123/index)\<[T](/stdlib-reference/interfaces/irwarray-0123/index#typeparam-T)\>

## Description

Represents an opaque handle to a mutable structured buffer allocated in global memory.
A structured buffer can be viewed as an array of the specified element type.

## Generic Parameters

#### T {#typeparam-T}
The element type of the buffer.

#### L: [IBufferDataLayout](/stdlib-reference/interfaces/ibufferdatalayout-017b/index) = [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index) {#typeparam-L}
The memory layout of the buffer.


## Fields

#### [descriptorAccess](/stdlib-reference/types/rwstructuredbuffer-012c/descriptoraccess-a) : [DescriptorAccess](/stdlib-reference/types/descriptoraccess-0a/index) = [DescriptorAccess](/stdlib-reference/types/descriptoraccess-0a/index)\.[ReadWrite](/stdlib-reference/types/descriptoraccess-0a/index#decl-ReadWrite) {#decl-descriptorAccess}
#### [kind](/stdlib-reference/types/rwstructuredbuffer-012c/kind) : [DescriptorKind](/stdlib-reference/types/descriptorkind-0a/index) = [DescriptorKind](/stdlib-reference/types/descriptorkind-0a/index)\.[Buffer](/stdlib-reference/types/descriptorkind-0a/index#decl-Buffer) {#decl-kind}

## Methods

* [DecrementCounter](/stdlib-reference/types/rwstructuredbuffer-012c/decrementcounter-09)
* [GetDimensions](/stdlib-reference/types/rwstructuredbuffer-012c/getdimensions-03)
* [IncrementCounter](/stdlib-reference/types/rwstructuredbuffer-012c/incrementcounter-09)
* [Load](/stdlib-reference/types/rwstructuredbuffer-012c/load-0)
* operator\[\]
* [init](/stdlib-reference/types/rwstructuredbuffer-012c/init)
* [getCount](/stdlib-reference/types/rwstructuredbuffer-012c/getcount-3)

## Conditional Conformances

### Conformance to \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>
`RWStructuredBuffer<T, L>` additionally conforms to `\_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>` when the following conditions are met:

  * [L](/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L) : [IBufferDataLayout](/stdlib-reference/interfaces/ibufferdatalayout-017b/index)
### Conformance to IRWArray\<T\>
`RWStructuredBuffer<T, L>` additionally conforms to `IRWArray\<T\>` when the following conditions are met:

  * [L](/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L) : [IBufferDataLayout](/stdlib-reference/interfaces/ibufferdatalayout-017b/index)
## Remarks


The <span class='code'><a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L" class="code_type">L</a></span> generic parameter is used to specify the memory layout of the buffer when
generating SPIRV.
<span class='code'><a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L" class="code_type">L</a></span> must be one of <span class='code'><a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a></span>, <span class='code'><a href="/stdlib-reference/types/std140datalayout-06a/index" class="code_type">Std140DataLayout</a></span>, <span class='code'><a href="/stdlib-reference/types/std430datalayout-06a/index" class="code_type">Std430DataLayout</a></span> or <span class='code'><a href="/stdlib-reference/types/scalardatalayout-06a/index" class="code_type">ScalarDataLayout</a></span>.
The default value is <span class='code'><a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a></span>.
When generating code for other targets, this parameter is ignored and has no effect on the generated code.

## See also

<span class='code'><a href="/stdlib-reference/types/structuredbuffer-0a/index" class="code_type">StructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/appendstructuredbuffer-06g/index" class="code_type">AppendStructuredBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/consumestructuredbuffer-07h/index" class="code_type">ConsumeStructuredBuffer</a></span>
*


