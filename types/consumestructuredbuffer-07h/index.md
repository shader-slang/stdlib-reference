---
layout: stdlib-reference
---

# struct ConsumeStructuredBuffer\<T, L\>

*Conditionally conforms to:* \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>

## Description

Represents an opaque handle to a consume structured buffer allocated in global memory.
A structured buffer can be viewed as an array of the specified element type.
An append structure buffer internally maintains an atomic counter to keep track of the number of elements in the buffer,
and provide an atomic operation to append a new element to the buffer.

## Generic Parameters

####  <a id="typeparam-T"></a>T
The element type of the buffer.

####  <a id="typeparam-L"></a>L: [IBufferDataLayout](../../interfaces/ibufferdatalayout-017b/index.html) = [DefaultDataLayout](../defaultdatalayout-07b/index.html)
The memory layout of the buffer.


## Fields

####  <a id="decl-descriptorAccess"></a>[descriptorAccess](descriptoraccess-a.html) : [DescriptorAccess](../descriptoraccess-0a/index.html) = [DescriptorAccess](../descriptoraccess-0a/index.html)\.[ReadWrite](../descriptoraccess-0a/index.html#decl-ReadWrite)
####  <a id="decl-kind"></a>[kind](kind.html) : [DescriptorKind](../descriptorkind-0a/index.html) = [DescriptorKind](../descriptorkind-0a/index.html)\.[StorageBuffer](../descriptorkind-0a/index.html#decl-StorageBuffer)

## Methods

* [Consume](consume-0)
* [GetDimensions](getdimensions-03)
* [init](init)

## Conditional Conformances

### Conformance to \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>
`ConsumeStructuredBuffer<T, L>` additionally conforms to `__IDynamicResourceCastable<__DynamicResourceKind.General>` when the following conditions are met:

  * [L](index.html#typeparam-L) : [IBufferDataLayout](../../interfaces/ibufferdatalayout-017b/index.html)
## Remarks


This type is supported natively when targeting HLSL.
When generating code for other targets, this type is translated into a pair or an ordinary <span class='code'><a href="../structuredbuffer-0a/index.html" class="code_type">StructuredBuffer</a></span> and
a separate <span class='code'><a href="../rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a></span> that holds the atomic counter.
The <span class='code'><a href="index.html#typeparam-L" class="code_type">L</a></span> generic parameter is used to specify the memory layout of the buffer when
generating SPIRV.
<span class='code'><a href="index.html#typeparam-L" class="code_type">L</a></span> must be one of <span class='code'><a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a></span>, <span class='code'><a href="../std140datalayout-06a/index.html" class="code_type">Std140DataLayout</a></span>, <span class='code'><a href="../std430datalayout-06a/index.html" class="code_type">Std430DataLayout</a></span> or <span class='code'><a href="../scalardatalayout-06a/index.html" class="code_type">ScalarDataLayout</a></span>.
The default value is <span class='code'><a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a></span>.
When generating code for other targets, this parameter is ignored and has no effect on the generated code.

## See also

<span class='code'><a href="../structuredbuffer-0a/index.html" class="code_type">StructuredBuffer</a></span>, <span class='code'><a href="../appendstructuredbuffer-06g/index.html" class="code_type">AppendStructuredBuffer</a></span>, <span class='code'><a href="../rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a></span>, <span class='code'><a href="../rasterizerorderedstructuredbuffer-0ahr/index.html" class="code_type">RasterizerOrderedStructuredBuffer</a></span>.



<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

Consume <consume-0>
GetDimensions <getdimensions-03>
Handle <handle-0>
descriptorAccess <descriptoraccess-a>
init <init>
kind <kind>
```
RTD-TOC-END -->
