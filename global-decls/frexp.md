---
layout: stdlib-reference
---

# frexp

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/frexp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/frexp">frexp</a>&lt;<a href="/stdlib-reference/global-decls/frexp#typeparam-T" class="code_type">T</a>&gt;(
x    <a href="/stdlib-reference/global-decls/frexp#typeparam-T" class="code_type">T</a> ,
<a href="/stdlib-reference/global-decls/exp">exp</a>    out int )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/frexp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/frexp">frexp</a>&lt;<a href="/stdlib-reference/global-decls/frexp#typeparam-T" class="code_type">T</a>, N:int&gt;(
x    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
<a href="/stdlib-reference/global-decls/exp">exp</a>    out <a href="/stdlib-reference/types/vector/index">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/frexp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/frexp">frexp</a>&lt;<a href="/stdlib-reference/global-decls/frexp#typeparam-T" class="code_type">T</a>, N:int, M:int, L:int&gt;(
x    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; ,
<a href="/stdlib-reference/global-decls/exp">exp</a>    out <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;int, N, M&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/frexp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### L  : int {#decl-L}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/frexp#typeparam-T) {#decl-x}
#### exp  : int {#decl-exp}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### exp  : [vector](/stdlib-reference/types/vector/index)\<int, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-exp}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}
#### exp  : [matrix](/stdlib-reference/types/matrix/index)\<int, N, M\> {#decl-exp}

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



