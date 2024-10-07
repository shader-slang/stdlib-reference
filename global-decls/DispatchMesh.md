---
layout: stdlib-reference
---

# DispatchMesh

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/DispatchMesh">DispatchMesh</a>&lt;P&gt;(
    <span class="code_keyword">uint</span> <span class='code_param'>threadGroupCountX</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>threadGroupCountY</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>threadGroupCountZ</span>,
    P <span class='code_param'>meshPayload</span>);

</pre>

## Generic Parameters

#### P

## Generic Parameters

#### P

## Parameters

#### threadGroupCountX  : uint
#### threadGroupCountY  : uint
#### threadGroupCountZ  : uint
#### meshPayload  : P

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


