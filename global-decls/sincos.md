---
layout: stdlib-reference
---

# sincos

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/sincos">sincos</a>&lt;<a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/sincos#decl-x" class="code_param">x</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/sincos#decl-s" class="code_param">s</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/sincos#decl-c" class="code_param">c</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/sincos">sincos</a>&lt;<a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sincos#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sincos#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/sincos#decl-x" class="code_param">x</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sincos#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/sincos#decl-s" class="code_param">s</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sincos#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/sincos#decl-c" class="code_param">c</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/sincos">sincos</a>&lt;<a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sincos#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/sincos#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/sincos#decl-L1" class="code_var">L1</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/sincos#decl-L2" class="code_var">L2</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sincos#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/sincos#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/sincos#decl-x" class="code_param">x</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sincos#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/sincos#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/sincos#decl-s" class="code_param">s</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sincos#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/sincos#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/sincos#decl-c" class="code_param">c</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

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

#### x  : [T](/stdlib-reference/global-decls/sincos#typeparam-T) {#decl-x}
#### s  : [T](/stdlib-reference/global-decls/sincos#typeparam-T) {#decl-s}
#### c  : [T](/stdlib-reference/global-decls/sincos#typeparam-T) {#decl-c}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### s  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-s}
#### c  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-c}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
#### s  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-s}
#### c  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-c}

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



