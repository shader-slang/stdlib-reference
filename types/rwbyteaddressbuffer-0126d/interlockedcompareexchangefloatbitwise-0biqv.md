---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareExchangeFloatBitwise

## Description

Perform a floating-point atomic bitwise compare-and-exchange operation at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv">InterlockedCompareExchangeFloatBitwise</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv#decl-byteAddress" class="code_param">byteAddress</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv#decl-compareValue" class="code_param">compareValue</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv#decl-outOriginalValue" class="code_param">outOriginalValue</a>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
The address at which to perform the atomic exchange operation.

#### compareValue  : float {#decl-compareValue}
The value to compare to the value at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv#decl-byteAddress" class="code_param">byteAddress</a></span>.

#### value  : float {#decl-value}
The value to store at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv#decl-byteAddress" class="code_param">byteAddress</a></span>.

#### outOriginalValue  : float {#decl-outOriginalValue}
\[out\] The original value at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv#decl-byteAddress" class="code_param">byteAddress</a></span> before the exchange operation.


## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicCompareExchange</span>. For HLSL, this function
translates to <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv">InterlockedCompareExchangeFloatBitwise</a></span> and requires shader model 6.6.
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


