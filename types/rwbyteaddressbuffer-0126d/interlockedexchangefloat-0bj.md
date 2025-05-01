---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedExchangeFloat

## Description

Perform a floating-point atomic bitwise exchange operation at <span class='code'><a href="interlockedexchangefloat-0bj.html#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="interlockedexchangefloat-0bj.html">InterlockedExchangeFloat</a>(
    <span class="code_keyword">uint</span> <a href="interlockedexchangefloat-0bj.html#decl-byteAddress" class="code_param">byteAddress</a>,
    <span class="code_keyword">float</span> <a href="interlockedexchangefloat-0bj.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="interlockedexchangefloat-0bj.html#decl-outOriginalValue" class="code_param">outOriginalValue</a>);

</pre>

## Parameters

####  <a id="decl-byteAddress"></a>byteAddress  : uint
The address at which to perform the atomic exchange operation.

####  <a id="decl-value"></a>value  : float
The value to store at <span class='code'><a href="interlockedexchangefloat-0bj.html#decl-byteAddress" class="code_param">byteAddress</a></span>.

####  <a id="decl-outOriginalValue"></a>outOriginalValue  : float
\[out\] The original value at <span class='code'><a href="interlockedexchangefloat-0bj.html#decl-byteAddress" class="code_param">byteAddress</a></span> before the exchange operation.


## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicExchange</span>. For HLSL, this function
translates to <span class='code'><a href="interlockedexchangefloat-0bj.html">InterlockedExchangeFloat</a></span> and requires shader model 6.6.
For CUDA, this function maps to <span class='code'>atomicExch</span>.


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


