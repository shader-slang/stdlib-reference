---
layout: stdlib-reference
---

# HitObject\.GetAttributes

## Description

Returns the attributes of a hit. Valid if the hit object represents a hit or a miss.




## Signature 

<pre>
attr_t <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/HitObject/GetAttributes">GetAttributes</a>&lt;attr_t&gt;();

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


