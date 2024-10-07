---
layout: stdlib-reference
---

# sincos

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/sincos">sincos</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    <span class="code_keyword">out</span> <span class="code_type">T</span> <span class='code_param'>s</span>,
    <span class="code_keyword">out</span> <span class="code_type">T</span> <span class='code_param'>c</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/sincos">sincos</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>x</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>s</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>c</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/sincos">sincos</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>, L1:<span class="code_keyword">int</span>, L2:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>x</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>s</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>c</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### L1  : int {#decl-L1}
#### L2  : int {#decl-L2}

## Parameters

#### x  : T {#decl-x}
#### s  : T {#decl-s}
#### c  : T {#decl-c}
#### x  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-x}
#### s  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-s}
#### c  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-c}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}
#### s  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-s}
#### c  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-c}

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



