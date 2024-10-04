---
layout: stdlib-reference
---

# HitObject\.GetWorldToObject

## Signature 

<pre>
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, 4, 3&gt; <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/HitObject/GetWorldToObject">GetWorldToObject</a>();

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


