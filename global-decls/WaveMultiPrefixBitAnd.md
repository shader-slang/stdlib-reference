---
layout: stdlib-reference
---

# WaveMultiPrefixBitAnd

## Signature 

<pre>
/// Requires Capability Set 1:
T <a href="/stdlib-reference/global-decls/WaveMultiPrefixBitAnd">WaveMultiPrefixBitAnd</a>&lt;T&gt;(
    T <span class='code_param'>expr</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <span class='code_param'>mask</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/WaveMultiPrefixBitAnd">WaveMultiPrefixBitAnd</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>expr</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <span class='code_param'>mask</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/WaveMultiPrefixBitAnd">WaveMultiPrefixBitAnd</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>expr</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <span class='code_param'>mask</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Parameters

* `T`
* `N`
* `M`
* `expr`
* `mask`

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



