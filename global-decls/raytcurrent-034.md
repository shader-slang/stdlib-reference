---
layout: stdlib-reference
---

# RayTCurrent

## Description

Returns the current intersection distance or maximum ray distance.



## Signature 

<pre>
<span class="code_keyword">float</span> <a href="raytcurrent-034.html">RayTCurrent</a>();

</pre>

## Return value
Current t-value for hit shaders or maximum distance for intersection shaders

## Remarks
Interpretation depends on shader stage (hit vs. intersection)


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


