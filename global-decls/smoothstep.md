---
layout: stdlib-reference
---

# smoothstep

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/smoothstep">smoothstep</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>&gt;(
<a href="/stdlib-reference/global-decls/min">min</a>    <a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> ,
<a href="/stdlib-reference/global-decls/max">max</a>    <a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> ,
x    <a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/smoothstep">smoothstep</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>, N:int&gt;(
<a href="/stdlib-reference/global-decls/min">min</a>    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
<a href="/stdlib-reference/global-decls/max">max</a>    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
x    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/smoothstep">smoothstep</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(
<a href="/stdlib-reference/global-decls/min">min</a>    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; ,
<a href="/stdlib-reference/global-decls/max">max</a>    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; ,
x    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### min  : [T](/stdlib-reference/global-decls/smoothstep#typeparam-T) {#decl-min}
#### max  : [T](/stdlib-reference/global-decls/smoothstep#typeparam-T) {#decl-max}
#### x  : [T](/stdlib-reference/global-decls/smoothstep#typeparam-T) {#decl-x}
#### min  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-min}
#### max  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-max}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### min  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-min}
#### max  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-max}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}

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



