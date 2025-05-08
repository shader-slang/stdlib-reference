---
layout: stdlib-reference
---

# struct StructuredBuffer\<T, L\>

*Conditionally conforms to:* \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>, [IArray](../../interfaces/iarray-01/index.html)\<[T](../../interfaces/iarray-01/index.html#typeparam-T)\>

## Description

Represents an opaque handle to a read-only structured buffer allocated in global memory.
A structured buffer can be viewed as an array of the specified element type.

## Generic Parameters

####  <a id="typeparam-T"></a>T
The element type of the buffer.

####  <a id="typeparam-L"></a>L: [IBufferDataLayout](../../interfaces/ibufferdatalayout-017b/index.html) = [DefaultDataLayout](../defaultdatalayout-07b/index.html)
The memory layout of the buffer.


## Fields

####  <a id="decl-descriptorAccess"></a>[descriptorAccess](descriptoraccess-a.html) : [DescriptorAccess](../descriptoraccess-0a/index.html) = [DescriptorAccess](../descriptoraccess-0a/index.html)\.[Read](../descriptoraccess-0a/index.html#decl-Read)
####  <a id="decl-kind"></a>[kind](kind.html) : [DescriptorKind](../descriptorkind-0a/index.html) = [DescriptorKind](../descriptorkind-0a/index.html)\.[Buffer](../descriptorkind-0a/index.html#decl-Buffer)

## Methods

* [GetDimensions](getdimensions-03)
* [Load](load-0)
* operator\[\]
* [init](init)
* [getCount](getcount-3)

## Conditional Conformances

### Conformance to \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>
`StructuredBuffer<T, L>` additionally conforms to `\_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>` when the following conditions are met:

  * [L](index.html#typeparam-L) : [IBufferDataLayout](../../interfaces/ibufferdatalayout-017b/index.html)
### Conformance to IArray\<T\>
`StructuredBuffer<T, L>` additionally conforms to `IArray\<T\>` when the following conditions are met:

  * [L](index.html#typeparam-L) : [IBufferDataLayout](../../interfaces/ibufferdatalayout-017b/index.html)
## Remarks


The <span class='code'><a href="index.html#typeparam-L" class="code_type">L</a></span> generic parameter is used to specify the memory layout of the buffer when
generating SPIRV.
<span class='code'><a href="index.html#typeparam-L" class="code_type">L</a></span> must be one of <span class='code'><a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a></span>, <span class='code'><a href="../std140datalayout-06a/index.html" class="code_type">Std140DataLayout</a></span>, <span class='code'><a href="../std430datalayout-06a/index.html" class="code_type">Std430DataLayout</a></span> or <span class='code'><a href="../scalardatalayout-06a/index.html" class="code_type">ScalarDataLayout</a></span>.
The default value is <span class='code'><a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a></span>.
When generating code for other targets, this parameter is ignored and has no effect on the generated code.

## See also

<span class='code'><a href="../rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a></span>, <span class='code'><a href="../appendstructuredbuffer-06g/index.html" class="code_type">AppendStructuredBuffer</a></span>, <span class='code'><a href="../consumestructuredbuffer-07h/index.html" class="code_type">ConsumeStructuredBuffer</a></span>, <span class='code'><a href="../rasterizerorderedstructuredbuffer-0ahr/index.html" class="code_type">RasterizerOrderedStructuredBuffer</a></span>.
*



<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

GetDimensions <getdimensions-03>
Handle <handle-0>
Load <load-0>
descriptorAccess <descriptoraccess-a>
getCount <getcount-3>
init <init>
kind <kind>
subscript <subscript>
```
RTD-TOC-END -->
