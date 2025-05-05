---
layout: stdlib-reference
---

# HitObject\.IsMiss

## Description

Returns true if the HitObject encodes a miss, otherwise returns false.




## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="/stdlib-reference/types/hitobject-03/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/hitobject-03/ismiss-02">IsMiss</a>();

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


