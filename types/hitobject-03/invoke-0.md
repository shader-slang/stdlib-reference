---
layout: stdlib-reference
---

# HitObject\.Invoke

## Description

Invokes closesthit or miss shading for the specified hit object. In case of a NOP HitObject, no
shader is invoked.




## Signature 

<pre>
<span class='code_keyword'>static</span> <span class="code_keyword">void</span> <a href="/stdlib-reference/types/hitobject-03/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/hitobject-03/invoke-0">Invoke</a>&lt;<a href="/stdlib-reference/types/hitobject-03/invoke-0#typeparam-payload_t" class="code_type">payload_t</a>&gt;(
    <a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/index" class="code_type">RaytracingAccelerationStructure</a> <a href="/stdlib-reference/types/hitobject-03/invoke-0#decl-AccelerationStructure" class="code_param">AccelerationStructure</a>,
    <a href="/stdlib-reference/types/hitobject-03/index" class="code_type">HitObject</a> <a href="/stdlib-reference/types/hitobject-03/invoke-0#decl-HitOrMiss" class="code_param">HitOrMiss</a>,
    <span class="code_keyword">inout</span> <a href="/stdlib-reference/types/hitobject-03/invoke-0#typeparam-payload_t" class="code_type">payload_t</a> <a href="/stdlib-reference/types/hitobject-03/invoke-0#decl-Payload" class="code_param">Payload</a>);

</pre>

## Generic Parameters

#### payload\_t {#typeparam-payload_t}

## Parameters

#### AccelerationStructure  : [RaytracingAccelerationStructure](/stdlib-reference/types/raytracingaccelerationstructure-0am/index) {#decl-AccelerationStructure}
#### HitOrMiss  : [HitObject](/stdlib-reference/types/hitobject-03/index) {#decl-HitOrMiss}
#### Payload  : [payload\_t](/stdlib-reference/types/hitobject-03/invoke-0#typeparam-payload_t) {#decl-Payload}

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


