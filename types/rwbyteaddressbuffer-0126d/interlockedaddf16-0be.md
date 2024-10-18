---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddF16

## Description

Perform a 16-bit floating point atomic add operation at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddf16-0be#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddf16-0be">InterlockedAddF16</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddf16-0be#decl-byteAddress" class="code_param">byteAddress</a>,
    <span class="code_keyword">half</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddf16-0be#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">half</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddf16-0be#decl-originalValue" class="code_param">originalValue</a>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
The address at which to perform the atomic add operation.

#### value  : half {#decl-value}
#### originalValue  : half {#decl-originalValue}
The original value at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddf16-0be#decl-byteAddress" class="code_param">byteAddress</a></span> before the add operation.


## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicFAdd</span> and requires <span class='code'>SPV_EXT_shader_atomic_float16_add</span> extension.

For HLSL, this function translates to an NVAPI call
due to lack of native HLSL intrinsic for floating point atomic add. For CUDA, this function
maps to <span class='code'>atomicAdd</span>.


