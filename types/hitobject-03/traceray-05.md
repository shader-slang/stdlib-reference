---
layout: stdlib-reference
---

# HitObject\.TraceRay

## Description

Executes ray traversal (including anyhit and intersection shaders) like TraceRay, but returns the
resulting hit information as a HitObject and does not trigger closesthit or miss shaders.




## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/hitobject-03/index" class="code_type">HitObject</a> <a href="/stdlib-reference/types/hitobject-03/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/hitobject-03/traceray-05">TraceRay</a>&lt;<a href="/stdlib-reference/types/hitobject-03/traceray-05#typeparam-payload_t" class="code_type">payload_t</a>&gt;(
    <a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/index" class="code_type">RaytracingAccelerationStructure</a> <a href="/stdlib-reference/types/hitobject-03/traceray-05#decl-AccelerationStructure" class="code_param">AccelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/hitobject-03/traceray-05#decl-RayFlags" class="code_param">RayFlags</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/hitobject-03/traceray-05#decl-InstanceInclusionMask" class="code_param">InstanceInclusionMask</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/hitobject-03/traceray-05#decl-RayContributionToHitGroupIndex" class="code_param">RayContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/hitobject-03/traceray-05#decl-MultiplierForGeometryContributionToHitGroupIndex" class="code_param">MultiplierForGeometryContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/hitobject-03/traceray-05#decl-MissShaderIndex" class="code_param">MissShaderIndex</a>,
    <a href="/stdlib-reference/types/raydesc-03/index" class="code_type">RayDesc</a> <a href="/stdlib-reference/types/hitobject-03/traceray-05#decl-Ray" class="code_param">Ray</a>,
    <span class="code_keyword">inout</span> <a href="/stdlib-reference/types/hitobject-03/traceray-05#typeparam-payload_t" class="code_type">payload_t</a> <a href="/stdlib-reference/types/hitobject-03/traceray-05#decl-Payload" class="code_param">Payload</a>);

</pre>

## Generic Parameters

#### payload\_t {#typeparam-payload_t}

## Parameters

#### AccelerationStructure  : [RaytracingAccelerationStructure](/stdlib-reference/types/raytracingaccelerationstructure-0am/index) {#decl-AccelerationStructure}
#### RayFlags  : uint {#decl-RayFlags}
#### InstanceInclusionMask  : uint {#decl-InstanceInclusionMask}
#### RayContributionToHitGroupIndex  : uint {#decl-RayContributionToHitGroupIndex}
#### MultiplierForGeometryContributionToHitGroupIndex  : uint {#decl-MultiplierForGeometryContributionToHitGroupIndex}
#### MissShaderIndex  : uint {#decl-MissShaderIndex}
#### Ray  : [RayDesc](/stdlib-reference/types/raydesc-03/index) {#decl-Ray}
#### Payload  : [payload\_t](/stdlib-reference/types/hitobject-03/traceray-05#typeparam-payload_t) {#decl-Payload}

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


