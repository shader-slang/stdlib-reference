---
layout: stdlib-reference
---

# clamp

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/clamp">clamp</a>&lt;<a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/clamp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/clamp#decl-minBound" class="code_param">minBound</a>,
    <a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/clamp#decl-maxBound" class="code_param">maxBound</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> : __BuiltinIntegerType;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/clamp">clamp</a>&lt;<a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/clamp#decl-N" class="code_var">N</a>:int&gt;(
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/clamp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/clamp#decl-minBound" class="code_param">minBound</a>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/clamp#decl-maxBound" class="code_param">maxBound</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> : __BuiltinIntegerType;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/clamp">clamp</a>&lt;<a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/clamp#decl-N" class="code_var">N</a>:int, <a href="/stdlib-reference/global-decls/clamp#decl-M" class="code_var">M</a>:int&gt;(
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/clamp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/clamp#decl-minBound" class="code_param">minBound</a>,
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/clamp#decl-maxBound" class="code_param">maxBound</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> : __BuiltinIntegerType;

<a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/clamp">clamp</a>&lt;<a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/clamp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/clamp#decl-minBound" class="code_param">minBound</a>,
    <a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/clamp#decl-maxBound" class="code_param">maxBound</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/clamp">clamp</a>&lt;<a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/clamp#decl-N" class="code_var">N</a>:int&gt;(
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/clamp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/clamp#decl-minBound" class="code_param">minBound</a>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/clamp#decl-maxBound" class="code_param">maxBound</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/clamp">clamp</a>&lt;<a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/clamp#decl-N" class="code_var">N</a>:int, <a href="/stdlib-reference/global-decls/clamp#decl-M" class="code_var">M</a>:int&gt;(
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/clamp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/clamp#decl-minBound" class="code_param">minBound</a>,
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/clamp#decl-maxBound" class="code_param">maxBound</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/clamp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: \_\_BuiltinIntegerType {#typeparam-T}

## Generic Parameters

#### T: \_\_BuiltinIntegerType {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/clamp#typeparam-T) {#decl-x}
#### minBound  : [T](/stdlib-reference/global-decls/clamp#typeparam-T) {#decl-minBound}
#### maxBound  : [T](/stdlib-reference/global-decls/clamp#typeparam-T) {#decl-maxBound}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### minBound  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-minBound}
#### maxBound  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-maxBound}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
#### minBound  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-minBound}
#### maxBound  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-maxBound}

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



