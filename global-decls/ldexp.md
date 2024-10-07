---
layout: stdlib-reference
---

# ldexp

## Description





## Signature 

<pre>
<span class="code_type">T</span> <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    <span class="code_type">T</span> <span class='code_param'>exp</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>exp</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>exp</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_type">T</span> <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<span class="code_type">T</span>, E&gt;(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    E <span class='code_param'>exp</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> E : __BuiltinIntegerType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<span class="code_type">T</span>, E, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;E, N&gt; <span class='code_param'>exp</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> E : __BuiltinIntegerType;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### E: \_\_BuiltinIntegerType {#typeparam-E}

## Parameters

#### x  : T {#decl-x}
#### exp  : T {#decl-exp}
#### x  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-x}
#### exp  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-exp}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}
#### exp  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-exp}
#### exp  : E {#decl-exp}
#### exp  : [vector](/stdlib-reference/types/vector/index)\<E, N\> {#decl-exp}

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



