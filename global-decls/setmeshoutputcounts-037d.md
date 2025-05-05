---
layout: stdlib-reference
---

# SetMeshOutputCounts

## Description

Set the number of output vertices and primitives for a mesh shader invocation.




## Signature 

<pre>
<span class="code_keyword">void</span> <a href="setmeshoutputcounts-037d.html">SetMeshOutputCounts</a>(
    <span class="code_keyword">uint</span> <a href="setmeshoutputcounts-037d.html#decl-vertexCount" class="code_param">vertexCount</a>,
    <span class="code_keyword">uint</span> <a href="setmeshoutputcounts-037d.html#decl-primitiveCount" class="code_param">primitiveCount</a>);

</pre>

## Parameters

####  <a id="decl-vertexCount"></a>vertexCount  : uint
####  <a id="decl-primitiveCount"></a>primitiveCount  : uint

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


