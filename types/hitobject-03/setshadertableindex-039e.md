---
layout: stdlib-reference
---

# HitObject\.SetShaderTableIndex

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">HitObject</a>.<a href="setshadertableindex-039e.html">SetShaderTableIndex</a>(<span class="code_keyword">uint</span> <a href="setshadertableindex-039e.html#decl-RecordIndex" class="code_param">RecordIndex</a>);

</pre>

## Parameters

####  <a id="decl-RecordIndex"></a>RecordIndex  : uint

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### cuda
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingKHR`, `spvShaderInvocationReorderNV`, `spvShaderInvocationReorderEXT`.
#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `ser_hlsl_native`.


