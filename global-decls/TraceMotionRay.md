---
layout: stdlib-reference
---

# TraceMotionRay

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/TraceMotionRay">TraceMotionRay</a>&lt;<a href="/stdlib-reference/global-decls/TraceMotionRay#typeparam-payload_t" class="code_type">payload_t</a>&gt;(
AccelerationStructure    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index">RaytracingAccelerationStructure</a> ,
<a href="/stdlib-reference/global-decls/RayFlags">RayFlags</a>    uint ,
InstanceInclusionMask    uint ,
RayContributionToHitGroupIndex    uint ,
MultiplierForGeometryContributionToHitGroupIndex    uint ,
MissShaderIndex    uint ,
Ray    <a href="/stdlib-reference/types/RayDesc/index">RayDesc</a> ,
CurrentTime    float ,
Payload    inout <a href="/stdlib-reference/global-decls/TraceMotionRay#typeparam-payload_t" class="code_type">payload_t</a> );

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


