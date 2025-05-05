---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareStoreFloatBitwise

## Description

Perform a floating-point atomic bitwise compare-and-store operation at <span class='code'><a href="interlockedcomparestorefloatbitwise-0bins.html#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="interlockedcomparestorefloatbitwise-0bins.html">InterlockedCompareStoreFloatBitwise</a>(
    <span class="code_keyword">uint</span> <a href="interlockedcomparestorefloatbitwise-0bins.html#decl-byteAddress" class="code_param">byteAddress</a>,
    <span class="code_keyword">float</span> <a href="interlockedcomparestorefloatbitwise-0bins.html#decl-compareValue" class="code_param">compareValue</a>,
    <span class="code_keyword">float</span> <a href="interlockedcomparestorefloatbitwise-0bins.html#decl-value" class="code_param">value</a>);

</pre>

## Parameters

####  <a id="decl-byteAddress"></a>byteAddress  : uint
The address at which to perform the atomic compare-and-exchange  operation.

####  <a id="decl-compareValue"></a>compareValue  : float
The value to perform bitwise comparison to the value at <span class='code'><a href="interlockedcomparestorefloatbitwise-0bins.html#decl-byteAddress" class="code_param">byteAddress</a></span>.

####  <a id="decl-value"></a>value  : float
The value to store at <span class='code'><a href="interlockedcomparestorefloatbitwise-0bins.html#decl-byteAddress" class="code_param">byteAddress</a></span> if the comparison is successful.


## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicCompareExchange</span>. For HLSL, this function
translates to <span class='code'><a href="interlockedcomparestorefloatbitwise-0bins.html">InterlockedCompareStoreFloatBitwise</a></span> and requires shader model 6.6.
For CUDA, this function maps to <span class='code'>atomicCAS</span>.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvInt64Atomics`.


