---
layout: stdlib-reference
---

# ddx

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/ddx#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/ddx">ddx</a>&lt;<a href="/stdlib-reference/global-decls/ddx#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/ddx#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/ddx#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ddx#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/ddx#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ddx#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/ddx">ddx</a>&lt;<a href="/stdlib-reference/global-decls/ddx#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ddx#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/ddx#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ddx#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/ddx#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ddx#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/ddx#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ddx#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/ddx#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/ddx">ddx</a>&lt;<a href="/stdlib-reference/global-decls/ddx#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ddx#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/ddx#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/ddx#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/ddx#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/ddx#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/ddx#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ddx#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/ddx#typeparam-T) {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### glsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### cpp
Available in `fragment` stage only.

#### cuda
Available in `fragment` stage only.

#### metal
Available in `fragment` stage only.

#### wgsl
Available in `fragment` stage only.

#### spirv
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

Requires capabilities: `SPV_NV_compute_shader_derivatives`, `spvMeshShadingEXT`.


