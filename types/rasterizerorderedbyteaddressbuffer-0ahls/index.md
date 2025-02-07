---
layout: stdlib-reference
---

# struct RasterizerOrderedByteAddressBuffer

*Conditionally conforms to:* \_\_IDynamicResourceCastable\<0\>

## Description

Represents an opaque handle to a read-write buffer allocated in global memory that is indexed in bytes.
This type can be used when working with raw buffers. Raw buffer can be viewed as a bag of bits to
which you want raw access, that is, a buffer that you can conveniently access through chunks of one to
four 32-bit typeless address values.

## Fields

#### [kind](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/kind) : [DescriptorKind](/stdlib-reference/types/descriptorkind-0a/index) = [DescriptorKind](/stdlib-reference/types/descriptorkind-0a/index)\.[Buffer](/stdlib-reference/types/descriptorkind-0a/index#decl-Buffer) {#decl-kind}

## Methods

* [GetDimensions](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/getdimensions-03)
* [Load2Aligned](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load2aligned-05)
* [Load2](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load2-0)
* [Load3Aligned](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load3aligned-05)
* [Load3](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load3-0)
* [Load4Aligned](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load4aligned-05)
* [Load4](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load4-0)
* [Load](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load-0)
* [LoadAligned](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/loadaligned-04)
* [InterlockedMax](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedmax-0b)
* [InterlockedMin](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedmin-0b)
* [InterlockedAdd](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedadd-0b)
* [InterlockedAnd](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedand-0b)
* [InterlockedOr](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedor-0b)
* [InterlockedXor](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedxor-0b)
* [InterlockedExchange](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedexchange-0b)
* [InterlockedCompareExchange](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedcompareexchange-0bi)
* [InterlockedCompareStore](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedcomparestore-0bi)
* [Store2](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/store2-0)
* [Store2Aligned](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/store2aligned-06)
* [Store3](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/store3-0)
* [Store3Aligned](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/store3aligned-06)
* [Store4](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/store4-0)
* [Store4Aligned](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/store4aligned-06)
* [Store](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/store-0)
* [StoreAligned](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/storealigned-05)
* [init](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/init)

## Conditional Conformances

### Conformance to \_\_IDynamicResourceCastable\<0\>
`RasterizerOrderedByteAddressBuffer` additionally conforms to `\_\_IDynamicResourceCastable\<0\>`.
## Remarks


This type is supported natively when targeting HLSL.


