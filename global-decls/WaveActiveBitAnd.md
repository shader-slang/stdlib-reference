---
layout: stdlib-reference
---

# WaveActiveBitAnd

## Signature 

<pre>
T <a href="/stdlib-reference/global-decls/WaveActiveBitAnd">WaveActiveBitAnd</a>&lt;T&gt;(T <span class='code_param'>expr</span>)
    <span class='code_keyword'>where</span> T : __BuiltinIntegerType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/WaveActiveBitAnd">WaveActiveBitAnd</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>expr</span>)
    <span class='code_keyword'>where</span> T : __BuiltinIntegerType;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/WaveActiveBitAnd">WaveActiveBitAnd</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>expr</span>)
    <span class='code_keyword'>where</span> T : __BuiltinIntegerType;

</pre>

## Parameters

* `T`
* `N`
* `M`
* `expr`

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

Requires capability: `spvGroupNonUniformArithmetic`.


