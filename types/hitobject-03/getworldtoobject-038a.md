---
layout: stdlib-reference
---

# HitObject\.GetWorldToObject

## Description

Returns 4x3 world-to-object transform matrix. Valid if the hit object represents a hit.
Note: NVAPI/SPIRV/GLSL extension. DXR 1.3 uses GetWorldToObject3x4() and GetWorldToObject4x3().




## Signature 

<pre>
<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, 4, 3&gt; <a href="index.html" class="code_type">HitObject</a>.<a href="getworldtoobject-038a.html">GetWorldToObject</a>();

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


