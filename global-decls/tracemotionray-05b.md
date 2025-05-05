---
layout: stdlib-reference
---

# TraceMotionRay

## Description

Traces a ray with motion blur support through the acceleration structure.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/tracemotionray-05b">TraceMotionRay</a>&lt;<a href="/stdlib-reference/global-decls/tracemotionray-05b#typeparam-payload_t" class="code_type">payload_t</a>&gt;(
    <a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/index" class="code_type">RaytracingAccelerationStructure</a> <a href="/stdlib-reference/global-decls/tracemotionray-05b#decl-AccelerationStructure" class="code_param">AccelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/tracemotionray-05b#decl-RayFlags" class="code_param">RayFlags</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/tracemotionray-05b#decl-InstanceInclusionMask" class="code_param">InstanceInclusionMask</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/tracemotionray-05b#decl-RayContributionToHitGroupIndex" class="code_param">RayContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/tracemotionray-05b#decl-MultiplierForGeometryContributionToHitGroupIndex" class="code_param">MultiplierForGeometryContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/tracemotionray-05b#decl-MissShaderIndex" class="code_param">MissShaderIndex</a>,
    <a href="/stdlib-reference/types/raydesc-03/index" class="code_type">RayDesc</a> <a href="/stdlib-reference/global-decls/tracemotionray-05b#decl-Ray" class="code_param">Ray</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/tracemotionray-05b#decl-CurrentTime" class="code_param">CurrentTime</a>,
    <span class="code_keyword">inout</span> <a href="/stdlib-reference/global-decls/tracemotionray-05b#typeparam-payload_t" class="code_type">payload_t</a> <a href="/stdlib-reference/global-decls/tracemotionray-05b#decl-Payload" class="code_param">Payload</a>);

</pre>

## Generic Parameters

#### payload\_t {#typeparam-payload_t}

## Parameters

#### AccelerationStructure  : [RaytracingAccelerationStructure](/stdlib-reference/types/raytracingaccelerationstructure-0am/index) {#decl-AccelerationStructure}
The acceleration structure to traverse

#### RayFlags  : uint {#decl-RayFlags}
Flags controlling ray behavior

#### InstanceInclusionMask  : uint {#decl-InstanceInclusionMask}
Mask for filtering instance visibility

#### RayContributionToHitGroupIndex  : uint {#decl-RayContributionToHitGroupIndex}
Offset for hit group indexing

#### MultiplierForGeometryContributionToHitGroupIndex  : uint {#decl-MultiplierForGeometryContributionToHitGroupIndex}
Multiplier for geometry-based hit group indexing

#### MissShaderIndex  : uint {#decl-MissShaderIndex}
Index of the miss shader to execute if no hit is found

#### Ray  : [RayDesc](/stdlib-reference/types/raydesc-03/index) {#decl-Ray}
Description of the ray to trace

#### CurrentTime  : float {#decl-CurrentTime}
Time value for motion blur interpolation

#### Payload  : [payload\_t](/stdlib-reference/global-decls/tracemotionray-05b#typeparam-payload_t) {#decl-Payload}
Structure for passing data between shaders


## Remarks
Extended version of TraceRay with motion blur support


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


