---
layout: stdlib-reference
---

# fdim

## Description

Computes <span class='code'><a href="/stdlib-reference/global-decls/max">max</a>(0, <a href="/stdlib-reference/global-decls/max#decl-x" class="code_param">x</a>-<a href="/stdlib-reference/global-decls/max#decl-y" class="code_param">y</a>)</span>.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/fdim#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/fdim">fdim</a>&lt;<a href="/stdlib-reference/global-decls/fdim#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/fdim#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/fdim#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/fdim#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/fdim#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/fdim#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/fdim#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fdim#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/fdim">fdim</a>&lt;<a href="/stdlib-reference/global-decls/fdim#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fdim#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/fdim#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fdim#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/fdim#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/fdim#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fdim#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/fdim#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/fdim#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/fdim#typeparam-T) {#decl-x}
The first value.

#### y  : [T](/stdlib-reference/global-decls/fdim#typeparam-T) {#decl-y}
The second value.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The first value.

#### y  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-y}
The second value.


## Return value
The result of <span class='code'><a href="/stdlib-reference/global-decls/max">max</a>(0, <a href="/stdlib-reference/global-decls/max#decl-x" class="code_param">x</a>-<a href="/stdlib-reference/global-decls/max#decl-y" class="code_param">y</a>)</span>.


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

#### spirv
Available in all stages.



