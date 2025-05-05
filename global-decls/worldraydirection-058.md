---
layout: stdlib-reference
---

# WorldRayDirection

## Description

Returns the direction of the current ray in world space.



## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="worldraydirection-058.html">WorldRayDirection</a>();

</pre>

## Return value
Normalized world-space direction vector of the ray

## Remarks
Available in any-hit, closest-hit, intersection, and miss shaders


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


