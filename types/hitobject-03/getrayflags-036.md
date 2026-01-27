---
layout: stdlib-reference
---

# HitObject\.GetRayFlags

## Description

Returns the ray flags associated with the hit object. Valid if the hit object represents a hit or a miss.
DXR 1.3 and GL_EXT_shader_invocation_reorder.




## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="index.html" class="code_type">HitObject</a>.<a href="getrayflags-036.html">GetRayFlags</a>();

</pre>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `ser_hlsl_native`.
#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingKHR`, `spvShaderInvocationReorderNV`, `spvShaderInvocationReorderEXT`.
#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.



