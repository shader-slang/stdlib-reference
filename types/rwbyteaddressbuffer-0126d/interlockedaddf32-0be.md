---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddF32

## Description

Perform a 32-bit floating point atomic add operation at <span class='code'><a href="interlockedaddf32-0be.html#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="interlockedaddf32-0be.html">InterlockedAddF32</a>(
    <span class="code_keyword">uint</span> <a href="interlockedaddf32-0be.html#decl-byteAddress" class="code_param">byteAddress</a>,
    <span class="code_keyword">float</span> <a href="interlockedaddf32-0be.html#decl-valueToAdd" class="code_param">valueToAdd</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="interlockedaddf32-0be.html#decl-originalValue" class="code_param">originalValue</a>);

<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="interlockedaddf32-0be.html">InterlockedAddF32</a>(
    <span class="code_keyword">uint</span> <a href="interlockedaddf32-0be.html#decl-byteAddress" class="code_param">byteAddress</a>,
    <span class="code_keyword">float</span> <a href="interlockedaddf32-0be.html#decl-valueToAdd" class="code_param">valueToAdd</a>);

</pre>

## Parameters

####  <a id="decl-byteAddress"></a>byteAddress  : uint
The address at which to perform the atomic add operation.

####  <a id="decl-valueToAdd"></a>valueToAdd  : float
The value to add to the value at <span class='code'><a href="interlockedaddf32-0be.html#decl-byteAddress" class="code_param">byteAddress</a></span>.

####  <a id="decl-originalValue"></a>originalValue  : float
The original value at <span class='code'><a href="interlockedaddf32-0be.html#decl-byteAddress" class="code_param">byteAddress</a></span> before the add operation.


## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicFAdd</span>. For HLSL, this function translates to an NVAPI call
due to lack of native HLSL intrinsic for floating point atomic add. For CUDA, this function
maps to <span class='code'>atomicAdd</span>.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvAtomicFloat32AddEXT`, `spvAtomicFloat32MinMaxEXT`.


