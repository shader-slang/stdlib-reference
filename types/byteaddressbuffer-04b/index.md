---
layout: stdlib-reference
---

# struct ByteAddressBuffer

*Conditionally conforms to:* \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>, [IPhysicalBuffer](../../interfaces/iphysicalbuffer-019/index.html)

## Description

Represents an opaque handle to a read-only buffer allocated in global memory that is indexed in bytes.
ByteAddressBuffer can be used when working with raw buffers. Raw buffer can be viewed as a bag of bits to
which you want raw access, that is, a buffer that you can conveniently access through chunks of one to
four 32-bit typeless address values.

## Fields

####  <a id="decl-descriptorAccess"></a>[descriptorAccess](descriptoraccess-a.html) : [DescriptorAccess](../descriptoraccess-0a/index.html) = [DescriptorAccess](../descriptoraccess-0a/index.html)\.[Read](../descriptoraccess-0a/index.html#decl-Read)
####  <a id="decl-kind"></a>[kind](kind.html) : [DescriptorKind](../descriptorkind-0a/index.html) = [DescriptorKind](../descriptorkind-0a/index.html)\.[StorageBuffer](../descriptorkind-0a/index.html#decl-StorageBuffer)

## Methods

* [GetDimensions](getdimensions-03)
* [Load2](load2-0)
* [Load2Aligned](load2aligned-05)
* [Load3](load3-0)
* [Load3Aligned](load3aligned-05)
* [Load4](load4-0)
* [Load4Aligned](load4aligned-05)
* [Load](load-0)
* [LoadAligned](loadaligned-04)
* [init](init)
* [GetBufferPointer](getbufferpointer-039)
* [LoadByteOffset](loadbyteoffset-048)

## Conditional Conformances

### Conformance to \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>
`ByteAddressBuffer` additionally conforms to `__IDynamicResourceCastable<__DynamicResourceKind.General>`.
### Conformance to IPhysicalBuffer
`ByteAddressBuffer` additionally conforms to `IPhysicalBuffer`.
## Remarks


This type is supported natively when targeting HLSL.
For all other targets, this type maps to a buffer of 32bit unsigned integers.



<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

GetBufferPointer <getbufferpointer-039>
GetDimensions <getdimensions-03>
Handle <handle-0>
Load <load-0>
Load2 <load2-0>
Load2Aligned <load2aligned-05>
Load3 <load3-0>
Load3Aligned <load3aligned-05>
Load4 <load4-0>
Load4Aligned <load4aligned-05>
LoadAligned <loadaligned-04>
LoadByteOffset <loadbyteoffset-048>
descriptorAccess <descriptoraccess-a>
init <init>
kind <kind>
```
RTD-TOC-END -->
