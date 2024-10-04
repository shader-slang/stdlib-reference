---
layout: stdlib-reference
---

# dot

## Signature 

<pre>
T <a href="/stdlib-reference/global-decls/dot">dot</a>&lt;T&gt;(
    T <span class='code_param'>x</span>,
    T <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

T <a href="/stdlib-reference/global-decls/dot">dot</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

T <a href="/stdlib-reference/global-decls/dot">dot</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> T : __BuiltinIntegerType;

</pre>

## Parameters

* `T`
* `N`
* `x`
* `y`

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.



