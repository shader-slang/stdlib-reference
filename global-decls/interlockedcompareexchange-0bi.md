---
layout: stdlib-reference
---

# InterlockedCompareExchange

## Description

Perform an atomic compare and exchange operation on <span class='code'><a href="interlockedcompareexchange-0bi.html#decl-dest" class="code_param">dest</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="interlockedcompareexchange-0bi.html">InterlockedCompareExchange</a>&lt;<a href="interlockedcompareexchange-0bi.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="interlockedcompareexchange-0bi.html#typeparam-T" class="code_type">T</a> <a href="interlockedcompareexchange-0bi.html#decl-dest" class="code_param">dest</a>,
    <a href="interlockedcompareexchange-0bi.html#typeparam-T" class="code_type">T</a> <a href="interlockedcompareexchange-0bi.html#decl-compare_value" class="code_param">compare_value</a>,
    <a href="interlockedcompareexchange-0bi.html#typeparam-T" class="code_type">T</a> <a href="interlockedcompareexchange-0bi.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <a href="interlockedcompareexchange-0bi.html#typeparam-T" class="code_type">T</a> <a href="interlockedcompareexchange-0bi.html#decl-original_value" class="code_param">original_value</a>)
    <span class='code_keyword'>where</span> <a href="interlockedcompareexchange-0bi.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/iatomicable-01/index.html" class="code_type">IAtomicable</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IAtomicable](../interfaces/iatomicable-01/index.html)
The type of the value to perform the atomic operation on.


## Parameters

####  <a id="decl-dest"></a>dest  : [T](interlockedcompareexchange-0bi.html#typeparam-T)
The value to perform the atomic operation on.

####  <a id="decl-compare_value"></a>compare\_value  : [T](interlockedcompareexchange-0bi.html#typeparam-T)
The value to compare <span class='code'><a href="interlockedcompareexchange-0bi.html#decl-dest" class="code_param">dest</a></span> with.

####  <a id="decl-value"></a>value  : [T](interlockedcompareexchange-0bi.html#typeparam-T)
The value to store into <span class='code'><a href="interlockedcompareexchange-0bi.html#decl-dest" class="code_param">dest</a></span> if the compare result is equal.

####  <a id="decl-original_value"></a>original\_value  : [T](interlockedcompareexchange-0bi.html#typeparam-T)
The value of <span class='code'><a href="interlockedcompareexchange-0bi.html#decl-dest" class="code_param">dest</a></span> before the operation.


## Remarks
When targeting HLSL, a call to this function with <span class='code'><a href="interlockedcompareexchange-0bi.html#typeparam-T" class="code_type">T</a></span> being <span class='code'><span class="code_keyword">float</span></span> will translate to a call to
<span class='code'><a href="interlockedcompareexchangefloatbitwise-0biqv.html">InterlockedCompareExchangeFloatBitwise</a></span>, which means the comparison is done as a bitwise comparison.

On SPIR-V (Vulkan), this function maps to <span class='code'>OpAtomicCompareExchange</span>.

On Metal and WGSL, all floating-point types are not supported.

On CUDA, this function maps to <span class='code'>atomicCAS</span>.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.



