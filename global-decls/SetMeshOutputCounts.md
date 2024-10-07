---
layout: stdlib-reference
---

# SetMeshOutputCounts

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/SetMeshOutputCounts">SetMeshOutputCounts</a>(
    uint <span class='code_param'>vertexCount</span>,
    uint <span class='code_param'>primitiveCount</span>);

</pre>

## Parameters

#### vertexCount  : uint {#decl-vertexCount}
#### primitiveCount  : uint {#decl-primitiveCount}

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


