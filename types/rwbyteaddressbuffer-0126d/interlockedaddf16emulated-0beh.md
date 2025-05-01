---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddF16Emulated

## Description

Perform a 16-bit floating point atomic add operation at <span class='code'><a href="interlockedaddf16emulated-0beh.html#decl-byteAddress" class="code_param">byteAddress</a></span> through emulation using <span class='code'>half2</span> atomics.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="interlockedaddf16emulated-0beh.html">InterlockedAddF16Emulated</a>(
    <span class="code_keyword">uint</span> <a href="interlockedaddf16emulated-0beh.html#decl-byteAddress" class="code_param">byteAddress</a>,
    <span class="code_keyword">half</span> <a href="interlockedaddf16emulated-0beh.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">half</span> <a href="interlockedaddf16emulated-0beh.html#decl-originalValue" class="code_param">originalValue</a>);

</pre>

## Parameters

####  <a id="decl-byteAddress"></a>byteAddress  : uint
The address at which to perform the atomic add operation.

####  <a id="decl-value"></a>value  : half
The value to add to the value at <span class='code'><a href="interlockedaddf16emulated-0beh.html#decl-byteAddress" class="code_param">byteAddress</a></span>.

####  <a id="decl-originalValue"></a>originalValue  : half
The original value at <span class='code'><a href="interlockedaddf16emulated-0beh.html#decl-byteAddress" class="code_param">byteAddress</a></span> before the add operation.


## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicFAdd</span> on a <span class='code'>half2</span> vector with the correct part set to <span class='code'><a href="interlockedaddf16emulated-0beh.html#decl-value" class="code_param">value</a></span>
and the remaining part set to 0. This requires the <span class='code'>AtomicFloat16VectorNV</span> capability introduced by the <span class='code'>SPV_NV_shader_atomic_fp16_vector</span>
extension.

For HLSL, this function translates to an equivalent NVAPI call
due to lack of native HLSL intrinsic for floating point atomic add. For CUDA, this function
maps to <span class='code'>atomicAdd</span>.


