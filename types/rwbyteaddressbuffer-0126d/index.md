---
layout: stdlib-reference
---

# struct RWByteAddressBuffer

*Conditionally conforms to:* \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>, [IPhysicalBuffer](../../interfaces/iphysicalbuffer-019/index.html), [IRWPhysicalBuffer](../../interfaces/irwphysicalbuffer-0123b/index.html)

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
* [InterlockedAddF64](interlockedaddf64-0be)
* [\_NvInterlockedAddFp16x2](0nvinterlockedaddfp16x2-013eh)
* [InterlockedAddF16](interlockedaddf16-0be)
* [InterlockedAddF16Emulated](interlockedaddf16emulated-0beh)
* [InterlockedAddF32](interlockedaddf32-0be)
* [InterlockedAddI64](interlockedaddi64-0be)
* [InterlockedCompareExchangeU64](interlockedcompareexchangeu64-0biq)
* [InterlockedMaxU64](interlockedmaxu64-0be)
* [InterlockedMax64](interlockedmax64-0b)
* [InterlockedMinU64](interlockedminu64-0be)
* [InterlockedMin64](interlockedmin64-0b)
* [InterlockedAddU64](interlockedaddu64-0be)
* [InterlockedAdd64](interlockedadd64-0b)
* [InterlockedAndU64](interlockedandu64-0be)
* [InterlockedAnd64](interlockedand64-0b)
* [InterlockedOrU64](interlockedoru64-0bd)
* [InterlockedOr64](interlockedor64-0b)
* [InterlockedXorU64](interlockedxoru64-0be)
* [InterlockedXor64](interlockedxor64-0b)
* [InterlockedExchangeU64](interlockedexchangeu64-0bj)
* [InterlockedExchange64](interlockedexchange64-0b)
* [InterlockedCompareExchange64](interlockedcompareexchange64-0bi)
* [InterlockedCompareExchangeFloatBitwise](interlockedcompareexchangefloatbitwise-0biqv)
* [InterlockedExchangeFloat](interlockedexchangefloat-0bj)
* [InterlockedCompareStore64](interlockedcomparestore64-0bi)
* [InterlockedCompareStoreFloatBitwise](interlockedcomparestorefloatbitwise-0bins)
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
* [GetBufferPointer](getbufferpointer-039)
* [LoadByteOffset](loadbyteoffset-048)
* [StoreByteOffset](storebyteoffset-059)

## Conditional Conformances

### Conformance to \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>
`RWByteAddressBuffer` additionally conforms to `__IDynamicResourceCastable<__DynamicResourceKind.General>`.
### Conformance to IPhysicalBuffer
`RWByteAddressBuffer` additionally conforms to `IPhysicalBuffer`.
### Conformance to IRWPhysicalBuffer
`RWByteAddressBuffer` additionally conforms to `IRWPhysicalBuffer`.
## Remarks


This type is supported natively when targeting HLSL.



<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

GetBufferPointer <getbufferpointer-039>
GetDimensions <getdimensions-03>
Handle <handle-0>
InterlockedAdd <interlockedadd-0b>
InterlockedAdd64 <interlockedadd64-0b>
InterlockedAddF16 <interlockedaddf16-0be>
InterlockedAddF16Emulated <interlockedaddf16emulated-0beh>
InterlockedAddF32 <interlockedaddf32-0be>
InterlockedAddF64 <interlockedaddf64-0be>
InterlockedAddI64 <interlockedaddi64-0be>
InterlockedAddU64 <interlockedaddu64-0be>
InterlockedAnd <interlockedand-0b>
InterlockedAnd64 <interlockedand64-0b>
InterlockedAndU64 <interlockedandu64-0be>
InterlockedCompareExchange <interlockedcompareexchange-0bi>
InterlockedCompareExchange64 <interlockedcompareexchange64-0bi>
InterlockedCompareExchangeFloatBitwise <interlockedcompareexchangefloatbitwise-0biqv>
InterlockedCompareExchangeU64 <interlockedcompareexchangeu64-0biq>
InterlockedCompareStore <interlockedcomparestore-0bi>
InterlockedCompareStore64 <interlockedcomparestore64-0bi>
InterlockedCompareStoreFloatBitwise <interlockedcomparestorefloatbitwise-0bins>
InterlockedExchange <interlockedexchange-0b>
InterlockedExchange64 <interlockedexchange64-0b>
InterlockedExchangeFloat <interlockedexchangefloat-0bj>
InterlockedExchangeU64 <interlockedexchangeu64-0bj>
InterlockedMax <interlockedmax-0b>
InterlockedMax64 <interlockedmax64-0b>
InterlockedMaxU64 <interlockedmaxu64-0be>
InterlockedMin <interlockedmin-0b>
InterlockedMin64 <interlockedmin64-0b>
InterlockedMinU64 <interlockedminu64-0be>
InterlockedOr <interlockedor-0b>
InterlockedOr64 <interlockedor64-0b>
InterlockedOrU64 <interlockedoru64-0bd>
InterlockedXor <interlockedxor-0b>
InterlockedXor64 <interlockedxor64-0b>
InterlockedXorU64 <interlockedxoru64-0be>
Load <load-0>
Load2 <load2-0>
Load2Aligned <load2aligned-05>
Load3 <load3-0>
Load3Aligned <load3aligned-05>
Load4 <load4-0>
Load4Aligned <load4aligned-05>
LoadAligned <loadaligned-04>
LoadByteOffset <loadbyteoffset-048>
Store <store-0>
Store2 <store2-0>
Store2Aligned <store2aligned-06>
Store3 <store3-0>
Store3Aligned <store3aligned-06>
Store4 <store4-0>
Store4Aligned <store4aligned-06>
StoreAligned <storealigned-05>
StoreByteOffset <storebyteoffset-059>
_NvInterlockedAddFp16x2 <0nvinterlockedaddfp16x2-013eh>
descriptorAccess <descriptoraccess-a>
init <init>
kind <kind>
```
RTD-TOC-END -->
