---
layout: stdlib-reference
---

# ldexp

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/ldexp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/ldexp#decl-exp" class="code_param">exp</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/ldexp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/ldexp#decl-exp" class="code_param">exp</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/ldexp#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/ldexp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/ldexp#decl-exp" class="code_param">exp</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ldexp#typeparam-E" class="code_type">E</a>&gt;(
    <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/ldexp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/ldexp#typeparam-E" class="code_type">E</a> <a href="/stdlib-reference/global-decls/ldexp#decl-exp" class="code_param">exp</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ldexp#typeparam-E" class="code_type">E</a> : <a href="/stdlib-reference/interfaces/BuiltinIntegerType/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ldexp#typeparam-E" class="code_type">E</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/ldexp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-E" class="code_type">E</a>, <a href="/stdlib-reference/global-decls/ldexp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/ldexp#decl-exp" class="code_param">exp</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ldexp#typeparam-E" class="code_type">E</a> : <a href="/stdlib-reference/interfaces/BuiltinIntegerType/index" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### E: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/BuiltinIntegerType/index) {#typeparam-E}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/ldexp#typeparam-T) {#decl-x}
#### exp  : [T](/stdlib-reference/global-decls/ldexp#typeparam-T) {#decl-exp}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### exp  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-exp}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
#### exp  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-exp}
#### exp  : [E](/stdlib-reference/global-decls/ldexp#typeparam-E) {#decl-exp}
#### exp  : [vector](/stdlib-reference/types/vector/index)\<E, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-exp}

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



