---
layout: stdlib-reference
---

# max

## Description

Maximum.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/max">max</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/max#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/max#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/max">max</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/max#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/max#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/max#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/max">max</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/max#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/max#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/max#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/max#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/max#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/max">max</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/max#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/max#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/max">max</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/max#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/max#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/max#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/max">max</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/max#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/max#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/max#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/max#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/max#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/max#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/max#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/0_builtinintegertype-029g/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/max#typeparam-T) {#decl-x}
The first value.

#### y  : [T](/stdlib-reference/global-decls/max#typeparam-T) {#decl-y}
The second value.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The first value.

#### y  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-y}
The second value.

#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
The first value.

#### y  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-y}
The second value.


## Return value
The maximum of <span class='code'><a href="/stdlib-reference/global-decls/max#decl-x" class="code_param">x</a></span> and <span class='code'><a href="/stdlib-reference/global-decls/max#decl-y" class="code_param">y</a></span>.


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



