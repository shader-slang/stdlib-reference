---
layout: stdlib-reference
---

# struct DescriptorHandle\<T\>

*Conforms to:* [IComparable](../../interfaces/icomparable-01/index)

## Description

Represents a bindless handle to a descriptor. A descriptor handle is always an ordinary data type and can be
declared in any memory location.

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IOpaqueDescriptor](../../interfaces/iopaquedescriptor-017/index)

## Methods

* [init](init)
* [equals](equals)
* [lessThan](lessthan-4)
* [lessThanOrEquals](lessthanorequals-48a)

## Remarks

Opaque descriptor types such as textures(<span class='code'><a href="../texture2d-08.html" class="code_type">Texture2D</a></span> etc.), <span class='code'><a href="../samplerstate-07/index.html" class="code_type">SamplerState</a></span> and buffers (e.g. <span class='code'><a href="../structuredbuffer-0a/index.html" class="code_type">StructuredBuffer</a></span>)
can have undefined size and data representation on many targets. On platforms such as Vulkan and D3D12, descriptors are
communicated to the shader code by calling the host side API to write the descriptor into a descriptor set or table, instead
of directly writing bytes into an ordinary GPU accessible buffer. As a result, oapque handle types cannot be used in places
that refer to a ordinary buffer location, such as as element types of a <span class='code'><a href="../structuredbuffer-0a/index.html" class="code_type">StructuredBuffer</a></span>.
However, a <span class='code'><a href="index.html" class="code_type">DescriptorHandle</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;</span> stores a handle (or address) to the actual descriptor, and is always an ordinary data type
that can be manipulated directly in the shader code. This gives the developer the flexibility to embed and pass around descriptor
parameters throughout the code, to enable cleaner modular designs.
See [User Guide](https://shader-slang.com/slang/user-guide/convenience-features.html#descriptorhandle-for-bindless-descriptor-access)
for more information on how to use <span class='code'><a href="index.html" class="code_type">DescriptorHandle</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;</span> in your code.



<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

equals <equals>
init <init>
lessThan <lessthan-4>
lessThanOrEquals <lessthanorequals-48a>
```
RTD-TOC-END -->
