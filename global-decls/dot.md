---
layout: stdlib-reference
---

# dot

## Description

Vector dot product. Returns the dot product of two vectors.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/dot">dot</a>&lt;<a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/dot#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/dot#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/dot">dot</a>&lt;<a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/dot#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/dot#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/dot#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/dot#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/dot#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/dot">dot</a>&lt;<a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/dot#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/dot#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/dot#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/dot#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/dot#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/dot#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}
#### T: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/0_builtinintegertype-029g/index) {#typeparam-T}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/dot#typeparam-T) {#decl-x}
The first vector.

#### y  : [T](/stdlib-reference/global-decls/dot#typeparam-T) {#decl-y}
The second vector.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The first vector.

#### y  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-y}
The second vector.


## Return value
The dot product of <span class='code'><a href="/stdlib-reference/global-decls/dot#decl-x" class="code_param">x</a></span> and <span class='code'><a href="/stdlib-reference/global-decls/dot#decl-y" class="code_param">y</a></span>.

## Remarks
When <span class='code'><a href="/stdlib-reference/global-decls/dot#decl-x" class="code_param">x</a></span> and <span class='code'><a href="/stdlib-reference/global-decls/dot#decl-y" class="code_param">y</a></span> are scalars, this function is equivalent to <span class='code'><a href="/stdlib-reference/global-decls/dot#decl-x" class="code_param">x</a>*<a href="/stdlib-reference/global-decls/dot#decl-y" class="code_param">y</a></span>.


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



