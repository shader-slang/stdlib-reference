---
layout: stdlib-reference
---

# DispatchMesh

## Description

Specify the number of downstream mesh shader thread groups to invoke from an amplification shader,
and provide the values for per-mesh payload parameters.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/dispatchmesh-08">DispatchMesh</a>&lt;<a href="/stdlib-reference/global-decls/dispatchmesh-08#typeparam-P" class="code_type">P</a>&gt;(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/dispatchmesh-08#decl-threadGroupCountX" class="code_param">threadGroupCountX</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/dispatchmesh-08#decl-threadGroupCountY" class="code_param">threadGroupCountY</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/dispatchmesh-08#decl-threadGroupCountZ" class="code_param">threadGroupCountZ</a>,
    <a href="/stdlib-reference/global-decls/dispatchmesh-08#typeparam-P" class="code_type">P</a> <a href="/stdlib-reference/global-decls/dispatchmesh-08#decl-meshPayload" class="code_param">meshPayload</a>);

</pre>

## Generic Parameters

#### P {#typeparam-P}

## Parameters

#### threadGroupCountX  : uint {#decl-threadGroupCountX}
#### threadGroupCountY  : uint {#decl-threadGroupCountY}
#### threadGroupCountZ  : uint {#decl-threadGroupCountZ}
#### meshPayload  : [P](/stdlib-reference/global-decls/dispatchmesh-08#typeparam-P) {#decl-meshPayload}

## Return value
This function doesn't return.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `amplification`, `mesh`.

#### glsl
Available in stages: `amplification`, `mesh`.

#### metal
Available in stages: `amplification`, `mesh`.

#### spirv
Available in stages: `amplification`, `mesh`.

Requires capability: `spvMeshShadingEXT`.


