---
layout: stdlib-reference
---

# HitObject\.GetRayDesc

## Description

Queries ray properties from HitObject. Valid if the hit object represents a hit or a miss.
Note: This is an NVAPI/SPIRV/CUDA extension. DXR 1.3 uses individual accessors (GetRayTMin, GetRayTCurrent, etc.)




## Signature 

<pre>
<a href="../raydesc-03/index.html" class="code_type">RayDesc</a> <a href="index.html" class="code_type">HitObject</a>.<a href="getraydesc-036.html">GetRayDesc</a>();

</pre>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `hlsl_nvapi`, `ser_hlsl_native`.
#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### cuda
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingKHR`, `spvShaderInvocationReorderNV`, `spvShaderInvocationReorderEXT`.


