---
layout: stdlib-reference
---

# lerp

## Description

Computes linear interpolation.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/lerp">lerp</a>&lt;<a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/lerp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/lerp#decl-y" class="code_param">y</a>,
    <a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/lerp#decl-s" class="code_param">s</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/lerp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/lerp">lerp</a>&lt;<a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/lerp#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/lerp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/lerp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/lerp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/lerp#decl-y" class="code_param">y</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/lerp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/lerp#decl-s" class="code_param">s</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/lerp#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/lerp#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/lerp">lerp</a>&lt;<a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/lerp#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/lerp#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/lerp#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/lerp#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/lerp#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/lerp#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/lerp#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/lerp#decl-y" class="code_param">y</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/lerp#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/lerp#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/lerp#decl-s" class="code_param">s</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/lerp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/lerp#typeparam-T) {#decl-x}
The starting value.

#### y  : [T](/stdlib-reference/global-decls/lerp#typeparam-T) {#decl-y}
The ending value.

#### s  : [T](/stdlib-reference/global-decls/lerp#typeparam-T) {#decl-s}
The interpolation factor.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The starting value.

#### y  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-y}
The ending value.

#### s  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-s}
The interpolation factor.

#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
The starting value.

#### y  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-y}
The ending value.

#### s  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-s}
The interpolation factor.


## Return value
Returns <span class='code'><a href="/stdlib-reference/global-decls/lerp#decl-x" class="code_param">x</a>+(<a href="/stdlib-reference/global-decls/lerp#decl-y" class="code_param">y</a>-<a href="/stdlib-reference/global-decls/lerp#decl-x" class="code_param">x</a>)*<a href="/stdlib-reference/global-decls/lerp#decl-s" class="code_param">s</a></span>.


