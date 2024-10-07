---
layout: stdlib-reference
---

# ldexp

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>&gt;(
x    <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> ,
<a href="/stdlib-reference/global-decls/exp">exp</a>    <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, N:int&gt;(
x    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
<a href="/stdlib-reference/global-decls/exp">exp</a>    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(
x    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; ,
<a href="/stdlib-reference/global-decls/exp">exp</a>    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, E&gt;(
x    <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> ,
<a href="/stdlib-reference/global-decls/exp">exp</a>    E )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> E : __BuiltinIntegerType;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/ldexp">ldexp</a>&lt;<a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a>, E, N:int&gt;(
x    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
<a href="/stdlib-reference/global-decls/exp">exp</a>    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;E, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ldexp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>
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

#### x  : [T](/stdlib-reference/global-decls/ldexp#typeparam-T) {#decl-x}
#### exp  : [T](/stdlib-reference/global-decls/ldexp#typeparam-T) {#decl-exp}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### exp  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-exp}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}
#### exp  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-exp}
#### exp  : E {#decl-exp}
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



