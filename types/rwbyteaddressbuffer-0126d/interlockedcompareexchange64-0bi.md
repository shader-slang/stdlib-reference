---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareExchange64

## Description

Perform a 64-bit integer atomic compare-and-exchange operation at <span class='code'><a href="interlockedcompareexchange64-0bi.html#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="interlockedcompareexchange64-0bi.html">InterlockedCompareExchange64</a>&lt;<a href="interlockedcompareexchange64-0bi.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="interlockedcompareexchange64-0bi.html#decl-byteAddress" class="code_param">byteAddress</a>,
    <a href="interlockedcompareexchange64-0bi.html#typeparam-T" class="code_type">T</a> <a href="interlockedcompareexchange64-0bi.html#decl-compareValue" class="code_param">compareValue</a>,
    <a href="interlockedcompareexchange64-0bi.html#typeparam-T" class="code_type">T</a> <a href="interlockedcompareexchange64-0bi.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <a href="interlockedcompareexchange64-0bi.html#typeparam-T" class="code_type">T</a> <a href="interlockedcompareexchange64-0bi.html#decl-outOriginalValue" class="code_param">outOriginalValue</a>)
    <span class='code_keyword'>where</span> <a href="interlockedcompareexchange64-0bi.html#typeparam-T" class="code_type">T</a> : __BuiltinInt64Type;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: \_\_BuiltinInt64Type

## Parameters

####  <a id="decl-byteAddress"></a>byteAddress  : uint
The address at which to perform the atomic compare-and-exchange operation.

####  <a id="decl-compareValue"></a>compareValue  : [T](interlockedcompareexchange64-0bi.html#typeparam-T)
The value to compare to the value at <span class='code'><a href="interlockedcompareexchange64-0bi.html#decl-byteAddress" class="code_param">byteAddress</a></span>.

####  <a id="decl-value"></a>value  : [T](interlockedcompareexchange64-0bi.html#typeparam-T)
The value to store at <span class='code'><a href="interlockedcompareexchange64-0bi.html#decl-byteAddress" class="code_param">byteAddress</a></span> if the comparison is successful.

####  <a id="decl-outOriginalValue"></a>outOriginalValue  : [T](interlockedcompareexchange64-0bi.html#typeparam-T)
The original value at <span class='code'><a href="interlockedcompareexchange64-0bi.html#decl-byteAddress" class="code_param">byteAddress</a></span> before the add operation.


## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicCompareExchange</span>. For HLSL, this function
translates to <span class='code'><a href="interlockedcompareexchange64-0bi.html">InterlockedCompareExchange64</a></span> and requires shader model 6.6.
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


