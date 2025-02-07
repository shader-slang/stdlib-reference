---
layout: stdlib-reference
---

# struct ByteAddressBuffer

## Description

Represents an opaque handle to a read-only buffer allocated in global memory that is indexed in bytes.
ByteAddressBuffer can be used when working with raw buffers. Raw buffer can be viewed as a bag of bits to
which you want raw access, that is, a buffer that you can conveniently access through chunks of one to
four 32-bit typeless address values.

## Methods

* [GetDimensions](/stdlib-reference/types/byteaddressbuffer-04b/getdimensions-03)
* [Load2](/stdlib-reference/types/byteaddressbuffer-04b/load2-0)
* [Load2Aligned](/stdlib-reference/types/byteaddressbuffer-04b/load2aligned-05)
* [Load3](/stdlib-reference/types/byteaddressbuffer-04b/load3-0)
* [Load3Aligned](/stdlib-reference/types/byteaddressbuffer-04b/load3aligned-05)
* [Load4](/stdlib-reference/types/byteaddressbuffer-04b/load4-0)
* [Load4Aligned](/stdlib-reference/types/byteaddressbuffer-04b/load4aligned-05)
* [Load](/stdlib-reference/types/byteaddressbuffer-04b/load-0)
* [LoadAligned](/stdlib-reference/types/byteaddressbuffer-04b/loadaligned-04)

## Remarks


This type is supported natively when targeting HLSL.
For all other targets, this type maps to a buffer of 32bit unsigned integers.


