---
layout: stdlib-reference
---

# HitObject\.GetInstanceID

## Description

Returns the instance ID of a hit. Valid if the hit object represents a hit.




## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="index.html" class="code_type">HitObject</a>.<a href="getinstanceid-03bc.html">GetInstanceID</a>();

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


