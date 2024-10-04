---
layout: stdlib-reference
---

# HitObject\.GetShaderRecordBufferHandle

## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/HitObject/GetShaderRecordBufferHandle">GetShaderRecordBufferHandle</a>();

</pre>

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingKHR`, `spvShaderInvocationReorderNV`.


