---
layout: stdlib-reference
---

# WaveMultiPrefixSum

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/WaveMultiPrefixSum#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/WaveMultiPrefixSum">WaveMultiPrefixSum</a>&lt;<a href="/stdlib-reference/global-decls/WaveMultiPrefixSum#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/WaveMultiPrefixSum#typeparam-T" class="code_type">T</a> <span class='code_param'>value</span>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, 4&gt; <span class='code_param'>mask</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveMultiPrefixSum#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/WaveMultiPrefixSum">WaveMultiPrefixSum</a>&lt;<a href="/stdlib-reference/global-decls/WaveMultiPrefixSum#typeparam-T" class="code_type">T</a>, N:int&gt;(
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, 4&gt; <span class='code_param'>mask</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveMultiPrefixSum#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/WaveMultiPrefixSum">WaveMultiPrefixSum</a>&lt;<a href="/stdlib-reference/global-decls/WaveMultiPrefixSum#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>value</span>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, 4&gt; <span class='code_param'>mask</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveMultiPrefixSum#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### value  : [T](/stdlib-reference/global-decls/WaveMultiPrefixSum#typeparam-T) {#decl-value}
#### mask  : [vector](/stdlib-reference/types/vector/index)\<uint, 4\> {#decl-mask}
#### value  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-value}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### cuda
Available in all stages.



