---
layout: stdlib-reference
---

# mad

## Signature 

<pre>
/// Requires Capability Set 1:
T <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;T&gt;(
    T <span class='code_param'>mvalue</span>,
    T <span class='code_param'>avalue</span>,
    T <span class='code_param'>bvalue</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>mvalue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>avalue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>bvalue</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>mvalue</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>avalue</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>bvalue</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
T <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;T&gt;(
    T <span class='code_param'>mvalue</span>,
    T <span class='code_param'>avalue</span>,
    T <span class='code_param'>bvalue</span>)
    <span class='code_keyword'>where</span> T : __BuiltinIntegerType;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>mvalue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>avalue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>bvalue</span>)
    <span class='code_keyword'>where</span> T : __BuiltinIntegerType;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>mvalue</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>avalue</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>bvalue</span>)
    <span class='code_keyword'>where</span> T : __BuiltinIntegerType;

</pre>

## Parameters

* `T`
* `N`
* `M`
* `mvalue`
* `avalue`
* `bvalue`

## Availability and Requirements

### Capability Set 1

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

#### spirv
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.



