---
layout: stdlib-reference
---

# fwidth

## Description

Texture filter width.
Calculates the sum abs(ddx(<span class='code'><a href="/stdlib-reference/global-decls/fwidth#decl-p" class="code_param">p</a></span>)) + abs(ddy(<span class='code'><a href="/stdlib-reference/global-decls/fwidth#decl-p" class="code_param">p</a></span>)).



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/global-decls/fwidth#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/fwidth">fwidth</a>&lt;<a href="/stdlib-reference/global-decls/fwidth#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/fwidth#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/fwidth#decl-p" class="code_param">p</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/fwidth#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/fwidth#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fwidth#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/fwidth">fwidth</a>&lt;<a href="/stdlib-reference/global-decls/fwidth#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fwidth#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/fwidth#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fwidth#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/fwidth#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/fwidth#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 3:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/fwidth#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fwidth#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/fwidth#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/fwidth">fwidth</a>&lt;<a href="/stdlib-reference/global-decls/fwidth#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fwidth#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/fwidth#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/fwidth#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fwidth#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/fwidth#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/fwidth#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/fwidth#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### p  : [T](/stdlib-reference/global-decls/fwidth#typeparam-T) {#decl-p}
The value to sum x and y partial derivative magnitudes for.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}

## Return value
The sum of abs(ddx(<span class='code'><a href="/stdlib-reference/global-decls/fwidth#decl-p" class="code_param">p</a></span>)) and abs(ddy(<span class='code'><a href="/stdlib-reference/global-decls/fwidth#decl-p" class="code_param">p</a></span>)).

## Remarks
For SPIR-V, this function maps to <span class='code'>OpFwidth</span>.


## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### glsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### metal
Available in `fragment` stage only.

#### wgsl
Available in `fragment` stage only.

#### spirv
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

Requires capabilities: `SPV_NV_compute_shader_derivatives`, `spvMeshShadingEXT`.

### Capability Set 2

Defined for the following targets:

#### hlsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### glsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### wgsl
Available in `fragment` stage only.

#### spirv
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

Requires capabilities: `SPV_NV_compute_shader_derivatives`, `spvMeshShadingEXT`.

### Capability Set 3

Defined for the following targets:

#### hlsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### glsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### spirv
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

Requires capabilities: `SPV_NV_compute_shader_derivatives`, `spvMeshShadingEXT`.


