---
layout: stdlib-reference
---

# HitObject\.GetRayTMin

## Description

Returns the parametric starting point (TMin) of the ray. Valid if the hit object represents a hit or a miss.
DXR 1.3 and GL_EXT_shader_invocation_reorder.




## Signature 

<pre>
<span class="code_keyword">float</span> <a href="index.html" class="code_type">HitObject</a>.<a href="getraytmin-0367.html">GetRayTMin</a>();

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



