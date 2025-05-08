---
layout: stdlib-reference
---

# struct RasterizerOrderedByteAddressBuffer

*Conditionally conforms to:* \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>

## Description

Represents an opaque handle to a read-write buffer allocated in global memory that is indexed in bytes.
This type can be used when working with raw buffers. Raw buffer can be viewed as a bag of bits to
which you want raw access, that is, a buffer that you can conveniently access through chunks of one to
four 32-bit typeless address values.

## Fields

####  <a id="decl-descriptorAccess"></a>[descriptorAccess](descriptoraccess-a.html) : [DescriptorAccess](../descriptoraccess-0a/index.html) = [DescriptorAccess](../descriptoraccess-0a/index.html)\.[ReadWrite](../descriptoraccess-0a/index.html#decl-ReadWrite)
####  <a id="decl-kind"></a>[kind](kind.html) : [DescriptorKind](../descriptorkind-0a/index.html) = [DescriptorKind](../descriptorkind-0a/index.html)\.[Buffer](../descriptorkind-0a/index.html#decl-Buffer)

## Methods

* [GetDimensions](getdimensions-03)
* [Load2Aligned](load2aligned-05)
* [Load2](load2-0)
* [Load3Aligned](load3aligned-05)
* [Load3](load3-0)
* [Load4Aligned](load4aligned-05)
* [Load4](load4-0)
* [Load](load-0)
* [LoadAligned](loadaligned-04)
* [InterlockedMax](interlockedmax-0b)
* [InterlockedMin](interlockedmin-0b)
* [InterlockedAdd](interlockedadd-0b)
* [InterlockedAnd](interlockedand-0b)
* [InterlockedOr](interlockedor-0b)
* [InterlockedXor](interlockedxor-0b)
* [InterlockedExchange](interlockedexchange-0b)
* [InterlockedCompareExchange](interlockedcompareexchange-0bi)
* [InterlockedCompareStore](interlockedcomparestore-0bi)
* [Store2](store2-0)
* [Store2Aligned](store2aligned-06)
* [Store3](store3-0)
* [Store3Aligned](store3aligned-06)
* [Store4](store4-0)
* [Store4Aligned](store4aligned-06)
* [Store](store-0)
* [StoreAligned](storealigned-05)
* [init](init)

## Conditional Conformances

### Conformance to \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>
`RasterizerOrderedByteAddressBuffer` additionally conforms to `\_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>`.
## Remarks


This type is supported natively when targeting HLSL.



<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

GetDimensions <getdimensions-03>
Handle <handle-0>
InterlockedAdd <interlockedadd-0b>
InterlockedAnd <interlockedand-0b>
InterlockedCompareExchange <interlockedcompareexchange-0bi>
InterlockedCompareStore <interlockedcomparestore-0bi>
InterlockedExchange <interlockedexchange-0b>
InterlockedMax <interlockedmax-0b>
InterlockedMin <interlockedmin-0b>
InterlockedOr <interlockedor-0b>
InterlockedXor <interlockedxor-0b>
Load <load-0>
Load2 <load2-0>
Load2Aligned <load2aligned-05>
Load3 <load3-0>
Load3Aligned <load3aligned-05>
Load4 <load4-0>
Load4Aligned <load4aligned-05>
LoadAligned <loadaligned-04>
Store <store-0>
Store2 <store2-0>
Store2Aligned <store2aligned-06>
Store3 <store3-0>
Store3Aligned <store3aligned-06>
Store4 <store4-0>
Store4Aligned <store4aligned-06>
StoreAligned <storealigned-05>
descriptorAccess <descriptoraccess-a>
init <init>
kind <kind>
```
RTD-TOC-END -->
