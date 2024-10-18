---
layout: stdlib-reference
---

# InterlockedCompareExchangeFloatBitwise

## Description

Perform an atomic compare and exchange operation on <span class='code'><a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv#decl-dest" class="code_param">dest</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv">InterlockedCompareExchangeFloatBitwise</a>(
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv#decl-compare_value" class="code_param">compare_value</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv">InterlockedCompareExchangeFloatBitwise</a>(
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv#decl-compare_value" class="code_param">compare_value</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv#decl-original_value" class="code_param">original_value</a>);

</pre>

## Parameters

#### dest  : float {#decl-dest}
The value to perform the atomic operation on.

#### compare\_value  : float {#decl-compare_value}
The value to compare <span class='code'><a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv#decl-dest" class="code_param">dest</a></span> with.

#### value  : float {#decl-value}
The value to store into <span class='code'><a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv#decl-dest" class="code_param">dest</a></span> if the compare result is equal.

#### original\_value  : float {#decl-original_value}
The value of <span class='code'><a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv#decl-dest" class="code_param">dest</a></span> before the operation.


## Remarks
When targeting HLSL, a call to this function will translate to a call to
<span class='code'><a href="/stdlib-reference/global-decls/interlockedcompareexchangefloatbitwise-0biqv">InterlockedCompareExchangeFloatBitwise</a></span>, which means the comparison is done as a bitwise comparison.

On SPIR-V (Vulkan), this function maps to <span class='code'>OpAtomicCompareExchange</span>.

On Metal and WGSL, this function is not available.

On CUDA, this function maps to <span class='code'>atomicCAS</span>.


