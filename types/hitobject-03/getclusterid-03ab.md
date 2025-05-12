---
layout: stdlib-reference
---

# HitObject\.GetClusterID

## Description

Returns the cluster ID of the current hit. Valid if the hit object represents a hit.




## Signature 

<pre>
<span class="code_keyword">int</span> <a href="index.html" class="code_type">HitObject</a>.<a href="getclusterid-03ab.html">GetClusterID</a>();

</pre>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### cuda
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingKHR`, `spvShaderInvocationReorderNV`.


