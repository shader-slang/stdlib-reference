---
layout: stdlib-reference
---

# acos

## Description

Arc cosine. Returns the angle whose cosine is the specified number.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/acos#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/acos">acos</a>&lt;<a href="/stdlib-reference/global-decls/acos#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/acos#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/acos#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/acos#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/acos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/acos#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/acos">acos</a>&lt;<a href="/stdlib-reference/global-decls/acos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/acos#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/acos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/acos#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/acos#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/acos#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/acos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/acos#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/acos#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/acos">acos</a>&lt;<a href="/stdlib-reference/global-decls/acos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/acos#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/acos#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/acos#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/acos#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/acos#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/acos#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/acos#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/acos#typeparam-T) {#decl-x}
The cosine value.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The cosine value.

#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
The cosine value.


## Return value
The angle in radians, in the range of [0, pi].


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



