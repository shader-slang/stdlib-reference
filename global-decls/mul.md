---
layout: stdlib-reference
---

# mul

## Signature 

<pre>
T <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T&gt;(
    T <span class='code_param'>x</span>,
    T <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>x</span>,
    T <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(
    T <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>x</span>,
    T <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    T <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

T <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

T <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> T : __BuiltinIntegerType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, M&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, M&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> T : __BuiltinIntegerType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, M&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinLogicalType/index" class="code_type">__BuiltinLogicalType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, M&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, M&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> T : __BuiltinIntegerType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, M&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinLogicalType/index" class="code_type">__BuiltinLogicalType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, R:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, N&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, C&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, R:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, N&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, C&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> T : __BuiltinIntegerType;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, R:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, N&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, C&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinLogicalType/index" class="code_type">__BuiltinLogicalType</a>;

<a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, M&gt;&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt;&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt;&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, M&gt;&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, R:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, N&gt;&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, C&gt;&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;T, R:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">inout</span> <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, N&gt;&gt; <span class='code_param'>left</span>,
    <span class="code_keyword">inout</span> <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, C&gt;&gt; <span class='code_param'>right</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt; <span class='code_param'>dOut</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Parameters

* `T`
* `N`
* `M`
* `R`
* `C`
* `x`
* `y`
* `left`
* `right`
* `dOut`

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

#### spirv
Available in all stages.



