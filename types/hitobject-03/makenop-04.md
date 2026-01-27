---
layout: stdlib-reference
---

# HitObject\.MakeNop

## Description

Creates a HitObject representing "NOP" (no operation) which is neither a hit nor a miss. Invoking a
NOP hit object using HitObject::Invoke has no effect. Reordering by hit objects using
ReorderThread will group NOP hit objects together. This can be useful in some reordering
scenarios where future control flow for some threads is known to process neither a hit nor a
miss.




## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">HitObject</a> <a href="index.html" class="code_type">HitObject</a>.<a href="makenop-04.html">MakeNop</a>();

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


