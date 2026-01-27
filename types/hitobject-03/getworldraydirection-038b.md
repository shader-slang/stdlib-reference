---
layout: stdlib-reference
---

# HitObject\.GetWorldRayDirection

## Description

Returns the world-space ray direction. Valid if the hit object represents a hit or a miss.
DXR 1.3 and GL_EXT_shader_invocation_reorder.




## Signature 

<pre>
<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="index.html" class="code_type">HitObject</a>.<a href="getworldraydirection-038b.html">GetWorldRayDirection</a>();

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



