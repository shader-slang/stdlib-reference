---
layout: stdlib-reference
---

# ddx\_coarse

## Description

Take the coarse partial derivative of <span class='code'><a href="/stdlib-reference/global-decls/ddx_coarse#decl-p" class="code_param">p</a></span> with respect to x in screen space.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/ddx_coarse#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/ddx_coarse">ddx_coarse</a>&lt;<a href="/stdlib-reference/global-decls/ddx_coarse#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/ddx_coarse#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/ddx_coarse#decl-p" class="code_param">p</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ddx_coarse#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/ddx_coarse#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ddx_coarse#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/ddx_coarse">ddx_coarse</a>&lt;<a href="/stdlib-reference/global-decls/ddx_coarse#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ddx_coarse#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/ddx_coarse#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ddx_coarse#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/ddx_coarse#decl-p" class="code_param">p</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ddx_coarse#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/ddx_coarse#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ddx_coarse#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/ddx_coarse#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/ddx_coarse">ddx_coarse</a>&lt;<a href="/stdlib-reference/global-decls/ddx_coarse#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ddx_coarse#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/ddx_coarse#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/ddx_coarse#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ddx_coarse#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/ddx_coarse#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/ddx_coarse#decl-p" class="code_param">p</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ddx_coarse#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### p  : [T](/stdlib-reference/global-decls/ddx_coarse#typeparam-T) {#decl-p}
The value to take partial derivative for.

#### p  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-p}
The value to take partial derivative for.

#### p  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-p}
The value to take partial derivative for.


## Return value
The partial derivative of <span class='code'><a href="/stdlib-reference/global-decls/ddx_coarse#decl-p" class="code_param">p</a></span>.

## Remarks
For SPIR-V, this function maps to <span class='code'>OpDPdxCoarse</span>.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### glsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### spirv
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

Requires capabilities: `SPV_NV_compute_shader_derivatives`, `spvMeshShadingEXT`.


