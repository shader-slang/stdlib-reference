---
layout: stdlib-reference
---

# WaveMultiPrefixBitXor

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_type">T</span> <a href="/stdlib-reference/global-decls/WaveMultiPrefixBitXor">WaveMultiPrefixBitXor</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_type">T</span> <span class='code_param'>expr</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <span class='code_param'>mask</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <a href="/stdlib-reference/global-decls/WaveMultiPrefixBitXor">WaveMultiPrefixBitXor</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>expr</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <span class='code_param'>mask</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/WaveMultiPrefixBitXor">WaveMultiPrefixBitXor</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>expr</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <span class='code_param'>mask</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### expr  : T {#decl-expr}
#### mask  : [vector](/stdlib-reference/types/vector/index)\<uint, 4\> {#decl-mask}
#### expr  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-expr}
#### expr  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-expr}

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### cuda
Available in all stages.



