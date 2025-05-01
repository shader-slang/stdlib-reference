---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddF16

## Description

Perform a 16-bit floating point atomic add operation at <span class='code'><a href="interlockedaddf16-0be.html#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="interlockedaddf16-0be.html">InterlockedAddF16</a>(
    <span class="code_keyword">uint</span> <a href="interlockedaddf16-0be.html#decl-byteAddress" class="code_param">byteAddress</a>,
    <span class="code_keyword">half</span> <a href="interlockedaddf16-0be.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">half</span> <a href="interlockedaddf16-0be.html#decl-originalValue" class="code_param">originalValue</a>);

</pre>

## Parameters

####  <a id="decl-byteAddress"></a>byteAddress  : uint
The address at which to perform the atomic add operation.

####  <a id="decl-value"></a>value  : half
The value to add to the value at <span class='code'><a href="interlockedaddf16-0be.html#decl-byteAddress" class="code_param">byteAddress</a></span>.

####  <a id="decl-originalValue"></a>originalValue  : half
The original value at <span class='code'><a href="interlockedaddf16-0be.html#decl-byteAddress" class="code_param">byteAddress</a></span> before the add operation.


## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicFAdd</span> and requires <span class='code'>SPV_EXT_shader_atomic_float16_add</span> extension.

For HLSL, this function translates to an NVAPI call
due to lack of native HLSL intrinsic for floating point atomic add. For CUDA, this function
maps to <span class='code'>atomicAdd</span>.


