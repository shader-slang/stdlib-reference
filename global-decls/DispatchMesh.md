---
layout: stdlib-reference
---

# DispatchMesh

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/DispatchMesh">DispatchMesh</a>&lt;<a href="/stdlib-reference/global-decls/DispatchMesh#typeparam-P" class="code_type">P</a>&gt;(
    uint <a href="/stdlib-reference/global-decls/DispatchMesh#decl-threadGroupCountX" class="code_param">threadGroupCountX</a>,
    uint <a href="/stdlib-reference/global-decls/DispatchMesh#decl-threadGroupCountY" class="code_param">threadGroupCountY</a>,
    uint <a href="/stdlib-reference/global-decls/DispatchMesh#decl-threadGroupCountZ" class="code_param">threadGroupCountZ</a>,
    <a href="/stdlib-reference/global-decls/DispatchMesh#typeparam-P" class="code_type">P</a> <a href="/stdlib-reference/global-decls/DispatchMesh#decl-meshPayload" class="code_param">meshPayload</a>);

</pre>

## Generic Parameters

#### P {#typeparam-P}

## Generic Parameters

#### P {#typeparam-P}

## Parameters

#### threadGroupCountX  : uint {#decl-threadGroupCountX}
#### threadGroupCountY  : uint {#decl-threadGroupCountY}
#### threadGroupCountZ  : uint {#decl-threadGroupCountZ}
#### meshPayload  : [P](/stdlib-reference/global-decls/DispatchMesh#typeparam-P) {#decl-meshPayload}

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


