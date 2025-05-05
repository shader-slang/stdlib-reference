---
layout: stdlib-reference
---

# InterlockedCompareStoreFloatBitwise

## Description

Perform an atomic compare and store operation on <span class='code'><a href="/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#decl-dest" class="code_param">dest</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins">InterlockedCompareStoreFloatBitwise</a>&lt;<a href="/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#decl-dest" class="code_param">dest</a>,
    <a href="/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#decl-compare_value" class="code_param">compare_value</a>,
    <a href="/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/iatomicable-01/index" class="code_type">IAtomicable</a>;

</pre>

## Generic Parameters

#### T: [IAtomicable](/stdlib-reference/interfaces/iatomicable-01/index) {#typeparam-T}
The type of the value to perform the atomic operation on.


## Parameters

#### dest  : [T](/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#typeparam-T) {#decl-dest}
The value to perform the atomic operation on.

#### compare\_value  : [T](/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#typeparam-T) {#decl-compare_value}
The value to compare <span class='code'><a href="/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#decl-dest" class="code_param">dest</a></span> with.

#### value  : [T](/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#typeparam-T) {#decl-value}
The value to store into <span class='code'><a href="/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins#decl-dest" class="code_param">dest</a></span> if the compare result is equal.


## Remarks
When targeting HLSL, a call to this function will translate to a call to
<span class='code'><a href="/stdlib-reference/global-decls/interlockedcomparestorefloatbitwise-0bins">InterlockedCompareStoreFloatBitwise</a></span>, which means the comparison is done as a bitwise comparison.

On SPIR-V (Vulkan), this function maps to <span class='code'>OpAtomicCompareExchange</span>.

On Metal and WGSL, this function is not available.

On CUDA, this function maps to <span class='code'>atomicCAS</span>.


