---
layout: stdlib-reference
---

# HitObject\.IsNop

## Description

Returns true if the HitObject encodes a nop, otherwise returns false.




## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="index.html" class="code_type">HitObject</a>.<a href="isnop-02.html">IsNop</a>();

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


