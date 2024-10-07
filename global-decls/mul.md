---
layout: stdlib-reference
---

# mul

## Description





## Signature 

<pre>
<span class="code_type">T</span> <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    <span class="code_type">T</span> <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>x</span>,
    <span class="code_type">T</span> <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>x</span>,
    <span class="code_type">T</span> <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_type">T</span> <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_type">T</span> <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinIntegerType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, M&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, M&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinIntegerType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, M&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinLogicalType/index" class="code_type">__BuiltinLogicalType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, M&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, M&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinIntegerType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, M&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinLogicalType/index" class="code_type">__BuiltinLogicalType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, R, C&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, R:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, R, N&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, C&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, R, C&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, R:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, R, N&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, C&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinIntegerType;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, R, C&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, R:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, R, N&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, C&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinLogicalType/index" class="code_type">__BuiltinLogicalType</a>;

<a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, M&gt;&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt;&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt;&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, M&gt;&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, R, C&gt;&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, R:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, R, N&gt;&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, C&gt;&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<span class="code_type">T</span>, R:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">inout</span> <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, R, N&gt;&gt; <span class='code_param'>left</span>,
    <span class="code_keyword">inout</span> <a href="/stdlib-reference/types/DifferentialPair/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, C&gt;&gt; <span class='code_param'>right</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, R, C&gt; <span class='code_param'>dOut</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### T: \_\_BuiltinIntegerType {#typeparam-T}
#### T: [\_\_BuiltinLogicalType](/stdlib-reference/interfaces/BuiltinLogicalType/index) {#typeparam-T}
#### R  : int {#decl-R}
#### C  : int {#decl-C}

## Parameters

#### x  : T {#decl-x}
#### y  : T {#decl-y}
#### x  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-x}
#### y  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-y}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}
#### y  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-y}
#### left  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<T, M\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), R, N\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, C\> {#decl-right}
#### left  : [DifferentialPair](/stdlib-reference/types/DifferentialPair/index)\<[vector](/stdlib-reference/types/vector/index)\<T, N \>\> {#decl-left}
#### right  : [DifferentialPair](/stdlib-reference/types/DifferentialPair/index)\<[matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M \>\> {#decl-right}
#### left  : [DifferentialPair](/stdlib-reference/types/DifferentialPair/index)\<[matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M \>\> {#decl-left}
#### right  : [DifferentialPair](/stdlib-reference/types/DifferentialPair/index)\<[vector](/stdlib-reference/types/vector/index)\<T, M \>\> {#decl-right}
#### left  : [DifferentialPair](/stdlib-reference/types/DifferentialPair/index)\<[matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), R, N \>\> {#decl-left}
#### right  : [DifferentialPair](/stdlib-reference/types/DifferentialPair/index)\<[matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, C \>\> {#decl-right}
#### dOut  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), R, C\> {#decl-dOut}

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



