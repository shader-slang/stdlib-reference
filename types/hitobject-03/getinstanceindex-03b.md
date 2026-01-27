---
layout: stdlib-reference
---

# HitObject\.GetInstanceIndex

## Description

Returns the instance index of a hit. Valid if the hit object represents a hit.




## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="index.html" class="code_type">HitObject</a>.<a href="getinstanceindex-03b.html">GetInstanceIndex</a>();

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


