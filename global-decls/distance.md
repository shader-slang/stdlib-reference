---
layout: stdlib-reference
---

# distance

## Description

Vector distance. Returns the distance between two points.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/distance#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/distance">distance</a>&lt;<a href="/stdlib-reference/global-decls/distance#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/distance#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/distance#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/distance#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/distance#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/distance#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/distance#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/distance#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/distance#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/global-decls/distance#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/distance">distance</a>&lt;<a href="/stdlib-reference/global-decls/distance#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/distance#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/distance#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/distance#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/distance#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/distance#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The first point.

#### y  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-y}
The second point.

#### x  : [T](/stdlib-reference/global-decls/distance#typeparam-T) {#decl-x}
The first point.

#### y  : [T](/stdlib-reference/global-decls/distance#typeparam-T) {#decl-y}
The second point.


## Return value
The distance between <span class='code'><a href="/stdlib-reference/global-decls/distance#decl-x" class="code_param">x</a></span> and <span class='code'><a href="/stdlib-reference/global-decls/distance#decl-y" class="code_param">y</a></span>.

## Remarks
This function is equivalent to <span class='code'><a href="/stdlib-reference/global-decls/length">length</a>(<a href="/stdlib-reference/global-decls/length#decl-x" class="code_param">x</a>-y)</span>. When <span class='code'><a href="/stdlib-reference/global-decls/distance#decl-x" class="code_param">x</a></span> and <span class='code'><a href="/stdlib-reference/global-decls/distance#decl-y" class="code_param">y</a></span> are scalars, this function is equivalent to <span class='code'><a href="/stdlib-reference/global-decls/abs">abs</a>(<a href="/stdlib-reference/global-decls/abs#decl-x" class="code_param">x</a>-y)</span>.


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



