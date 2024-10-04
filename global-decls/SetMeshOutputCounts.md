---
layout: stdlib-reference
---

# SetMeshOutputCounts

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/SetMeshOutputCounts">SetMeshOutputCounts</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>vertexCount</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>primitiveCount</span>);

</pre>

## Parameters

* `vertexCount`
* `primitiveCount`

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


