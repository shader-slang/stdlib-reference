---
layout: stdlib-reference
---

# GeometryIndex

## Description

Returns the index of the geometry that was hit in an intersection, any-hit, or closest-hit shader.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="geometryindex-08.html">GeometryIndex</a>();

</pre>

## Return value
Zero-based index of the geometry in the current instance

## Remarks
Available in intersection, any-hit, and closest-hit shaders


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `intersection`, `closesthit`, `anyhit`.

#### glsl
Available in stages: `intersection`, `closesthit`, `anyhit`.

#### spirv
Available in stages: `intersection`, `closesthit`, `anyhit`.

Requires capability: `spvRayTracingKHR`.


