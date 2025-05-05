---
layout: stdlib-reference
---

# smoothstep

## Description

Smooth step (Hermite interpolation).



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/smoothstep">smoothstep</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/smoothstep#decl-min" class="code_param">min</a>,
    <a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/smoothstep#decl-max" class="code_param">max</a>,
    <a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/smoothstep#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/smoothstep">smoothstep</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/smoothstep#decl-min" class="code_param">min</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/smoothstep#decl-max" class="code_param">max</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/smoothstep#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/smoothstep">smoothstep</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/smoothstep#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/smoothstep#decl-min" class="code_param">min</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/smoothstep#decl-max" class="code_param">max</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/smoothstep#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/smoothstep#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/smoothstep#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### min  : [T](/stdlib-reference/global-decls/smoothstep#typeparam-T) {#decl-min}
The lower edge of the interpolation range.

#### max  : [T](/stdlib-reference/global-decls/smoothstep#typeparam-T) {#decl-max}
The upper edge of the interpolation range.

#### x  : [T](/stdlib-reference/global-decls/smoothstep#typeparam-T) {#decl-x}
The value to interpolate.

#### min  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-min}
The lower edge of the interpolation range.

#### max  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-max}
The upper edge of the interpolation range.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The value to interpolate.

#### min  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-min}
The lower edge of the interpolation range.

#### max  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-max}
The upper edge of the interpolation range.

#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
The value to interpolate.


## Return value
0 if <span class='code'><a href="/stdlib-reference/global-decls/smoothstep#decl-x" class="code_param">x</a></span> is less than <span class='code'><a href="/stdlib-reference/global-decls/smoothstep#decl-min" class="code_param">min</a></span>, 1 if <span class='code'><a href="/stdlib-reference/global-decls/smoothstep#decl-x" class="code_param">x</a></span> is greater than <span class='code'><a href="/stdlib-reference/global-decls/smoothstep#decl-max" class="code_param">max</a></span>, and a smooth interpolation between 0 and 1 otherwise.


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



