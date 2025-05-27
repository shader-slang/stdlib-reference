---
layout: stdlib-reference
---

# HitObject\.GetRayDesc

## Description

Queries ray properties from HitObject. Valid if the hit object represents a hit or a miss.




## Signature 

<pre>
<a href="../raydesc-03/index.html" class="code_type">RayDesc</a> <a href="index.html" class="code_type">HitObject</a>.<a href="getraydesc-036.html">GetRayDesc</a>();

</pre>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingKHR`, `spvShaderInvocationReorderNV`.


