---
layout: stdlib-reference
---

# TraceMotionRay

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/TraceMotionRay">TraceMotionRay</a>&lt;<a href="/stdlib-reference/global-decls/TraceMotionRay#typeparam-payload_t" class="code_type">payload_t</a>&gt;(
    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index">RaytracingAccelerationStructure</a> <a href="/stdlib-reference/global-decls/TraceMotionRay#decl-AccelerationStructure" class="code_param">AccelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/TraceMotionRay#decl-RayFlags" class="code_param">RayFlags</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/TraceMotionRay#decl-InstanceInclusionMask" class="code_param">InstanceInclusionMask</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/TraceMotionRay#decl-RayContributionToHitGroupIndex" class="code_param">RayContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/TraceMotionRay#decl-MultiplierForGeometryContributionToHitGroupIndex" class="code_param">MultiplierForGeometryContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/TraceMotionRay#decl-MissShaderIndex" class="code_param">MissShaderIndex</a>,
    <a href="/stdlib-reference/types/RayDesc/index">RayDesc</a> <a href="/stdlib-reference/global-decls/TraceMotionRay#decl-Ray" class="code_param">Ray</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/TraceMotionRay#decl-CurrentTime" class="code_param">CurrentTime</a>,
    <span class="code_keyword">inout</span> <a href="/stdlib-reference/global-decls/TraceMotionRay#typeparam-payload_t" class="code_type">payload_t</a> <a href="/stdlib-reference/global-decls/TraceMotionRay#decl-Payload" class="code_param">Payload</a>);

</pre>

## Generic Parameters

#### payload\_t {#typeparam-payload_t}

## Generic Parameters

#### payload\_t {#typeparam-payload_t}

## Parameters

#### AccelerationStructure  : [RaytracingAccelerationStructure](/stdlib-reference/types/RaytracingAccelerationStructure/index) {#decl-AccelerationStructure}
#### RayFlags  : uint {#decl-RayFlags}
#### InstanceInclusionMask  : uint {#decl-InstanceInclusionMask}
#### RayContributionToHitGroupIndex  : uint {#decl-RayContributionToHitGroupIndex}
#### MultiplierForGeometryContributionToHitGroupIndex  : uint {#decl-MultiplierForGeometryContributionToHitGroupIndex}
#### MissShaderIndex  : uint {#decl-MissShaderIndex}
#### Ray  : [RayDesc](/stdlib-reference/types/RayDesc/index) {#decl-Ray}
#### CurrentTime  : float {#decl-CurrentTime}
#### Payload  : [payload\_t](/stdlib-reference/global-decls/TraceMotionRay#typeparam-payload_t) {#decl-Payload}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingMotionBlurNV`, `spvRayTracingKHR`.


