---
layout: stdlib-reference
---

# WaveMultiPrefixProduct

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/WaveMultiPrefixProduct#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/WaveMultiPrefixProduct">WaveMultiPrefixProduct</a>&lt;<a href="/stdlib-reference/global-decls/WaveMultiPrefixProduct#typeparam-T" class="code_type">T</a>&gt;(
value    <a href="/stdlib-reference/global-decls/WaveMultiPrefixProduct#typeparam-T" class="code_type">T</a> ,
mask    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, 4&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveMultiPrefixProduct#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/WaveMultiPrefixProduct">WaveMultiPrefixProduct</a>&lt;<a href="/stdlib-reference/global-decls/WaveMultiPrefixProduct#typeparam-T" class="code_type">T</a>, N:int&gt;(
value    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
mask    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, 4&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveMultiPrefixProduct#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/WaveMultiPrefixProduct">WaveMultiPrefixProduct</a>&lt;<a href="/stdlib-reference/global-decls/WaveMultiPrefixProduct#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(
value    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; ,
mask    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, 4&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveMultiPrefixProduct#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### value  : [T](/stdlib-reference/global-decls/WaveMultiPrefixProduct#typeparam-T) {#decl-value}
#### mask  : [vector](/stdlib-reference/types/vector/index)\<uint, 4\> {#decl-mask}
#### value  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-value}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### cuda
Available in all stages.



