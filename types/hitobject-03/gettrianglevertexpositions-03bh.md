---
layout: stdlib-reference
---

# HitObject\.GetTriangleVertexPositions

## Description

Returns the world-space vertex positions of the triangle that was hit.
Valid if the hit object represents a triangle hit.



## Signature 

<pre>
<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt;[3] <a href="index.html" class="code_type">HitObject</a>.<a href="gettrianglevertexpositions-03bh.html">GetTriangleVertexPositions</a>();

</pre>

## Return value
Array of three vertex positions in world space

## Remarks
Requires ray tracing position fetch extension


## Availability and Requirements

Defined for the following targets:

#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingPositionFetchKHR`, `spvShaderInvocationReorderEXT`.


