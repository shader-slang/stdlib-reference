---
layout: stdlib-reference
---

# RayTMin

## Description

Returns the minimum valid intersection distance for the current ray.



## Signature 

<pre>
<span class="code_keyword">float</span> <a href="raytmin-034.html">RayTMin</a>();

</pre>

## Return value
Minimum distance along the ray where intersections are considered

## Remarks
Used to prevent self-intersections and near-plane clipping


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `closesthit`, `anyhit`, `miss`, `intersection`.

#### glsl
Available in stages: `closesthit`, `anyhit`, `miss`, `intersection`.

#### cuda
Available in stages: `closesthit`, `anyhit`, `miss`, `intersection`.

#### spirv
Available in stages: `closesthit`, `anyhit`, `miss`, `intersection`.

Requires capability: `spvRayTracingKHR`.


