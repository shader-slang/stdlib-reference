---
layout: stdlib-reference
---

# HitObject\.Invoke

## Description

Invokes closesthit or miss shading for the specified hit object. In case of a NOP HitObject, no
shader is invoked.




## Signature 

<pre>
<span class='code_keyword'>static</span> <span class="code_keyword">void</span> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/HitObject/Invoke">Invoke</a>&lt;payload_t&gt;(
    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index" class="code_type">RaytracingAccelerationStructure</a> <span class='code_param'>AccelerationStructure</span>,
    <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a> <span class='code_param'>HitOrMiss</span>,
    <span class="code_keyword">inout</span> payload_t <span class='code_param'>Payload</span>);

</pre>

## Parameters

#### payload\_t
#### AccelerationStructure  : [RaytracingAccelerationStructure](/stdlib-reference/types/RaytracingAccelerationStructure/index)
#### HitOrMiss  : [HitObject](/stdlib-reference/types/HitObject/index)
#### Payload  : payload\_t

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


