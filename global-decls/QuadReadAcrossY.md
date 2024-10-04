---
layout: stdlib-reference
---

# QuadReadAcrossY

## Signature 

<pre>
T <a href="/stdlib-reference/global-decls/QuadReadAcrossY">QuadReadAcrossY</a>&lt;T&gt;(T <span class='code_param'>localValue</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/QuadReadAcrossY">QuadReadAcrossY</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>localValue</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/QuadReadAcrossY">QuadReadAcrossY</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>localValue</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

</pre>

## Parameters

* `T`
* `N`
* `M`
* `localValue`

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformQuad`.


