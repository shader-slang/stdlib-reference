---
layout: stdlib-reference
---

# HitObject\.Invoke

## Description

Invokes closesthit or miss shading for the specified hit object. In case of a NOP HitObject, no
shader is invoked.




## Signature 

<pre>
<span class='code_keyword'>static</span> void <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/HitObject/Invoke">Invoke</a>&lt;<a href="/stdlib-reference/types/HitObject/Invoke#typeparam-payload_t" class="code_type">payload_t</a>&gt;(
AccelerationStructure    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index" class="code_type">RaytracingAccelerationStructure</a> ,
HitOrMiss    <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a> ,
Payload    inout <a href="/stdlib-reference/types/HitObject/Invoke#typeparam-payload_t" class="code_type">payload_t</a> );

</pre>

## Generic Parameters

#### payload\_t {#typeparam-payload_t}

## Generic Parameters

#### payload\_t {#typeparam-payload_t}

## Parameters

#### AccelerationStructure  : [RaytracingAccelerationStructure](/stdlib-reference/types/RaytracingAccelerationStructure/index) {#decl-AccelerationStructure}
#### HitOrMiss  : [HitObject](/stdlib-reference/types/HitObject/index) {#decl-HitOrMiss}
#### Payload  : [payload\_t](/stdlib-reference/types/HitObject/Invoke#typeparam-payload_t) {#decl-Payload}

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


