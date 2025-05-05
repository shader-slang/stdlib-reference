---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareStoreFloatBitwise

## Description

Perform a floating-point atomic bitwise compare-and-store operation at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestorefloatbitwise-0bins#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestorefloatbitwise-0bins">InterlockedCompareStoreFloatBitwise</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestorefloatbitwise-0bins#decl-byteAddress" class="code_param">byteAddress</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestorefloatbitwise-0bins#decl-compareValue" class="code_param">compareValue</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestorefloatbitwise-0bins#decl-value" class="code_param">value</a>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
The address at which to perform the atomic compare-and-exchange  operation.

#### compareValue  : float {#decl-compareValue}
The value to perform bitwise comparison to the value at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestorefloatbitwise-0bins#decl-byteAddress" class="code_param">byteAddress</a></span>.

#### value  : float {#decl-value}
The value to store at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestorefloatbitwise-0bins#decl-byteAddress" class="code_param">byteAddress</a></span> if the comparison is successful.


## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicCompareExchange</span>. For HLSL, this function
translates to <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestorefloatbitwise-0bins">InterlockedCompareStoreFloatBitwise</a></span> and requires shader model 6.6.
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


