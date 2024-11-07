---
layout: stdlib-reference
---

# TraceRay

## Description



Traces a ray through the acceleration structure.

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/traceray-05">TraceRay</a>&lt;<a href="/stdlib-reference/global-decls/traceray-05#typeparam-payload_t" class="code_type">payload_t</a>&gt;(
    <a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/index" class="code_type">RaytracingAccelerationStructure</a> <a href="/stdlib-reference/global-decls/traceray-05#decl-AccelerationStructure" class="code_param">AccelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/traceray-05#decl-RayFlags" class="code_param">RayFlags</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/traceray-05#decl-InstanceInclusionMask" class="code_param">InstanceInclusionMask</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/traceray-05#decl-RayContributionToHitGroupIndex" class="code_param">RayContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/traceray-05#decl-MultiplierForGeometryContributionToHitGroupIndex" class="code_param">MultiplierForGeometryContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/traceray-05#decl-MissShaderIndex" class="code_param">MissShaderIndex</a>,
    <a href="/stdlib-reference/types/raydesc-03/index" class="code_type">RayDesc</a> <a href="/stdlib-reference/global-decls/traceray-05#decl-Ray" class="code_param">Ray</a>,
    <span class="code_keyword">inout</span> <a href="/stdlib-reference/global-decls/traceray-05#typeparam-payload_t" class="code_type">payload_t</a> <a href="/stdlib-reference/global-decls/traceray-05#decl-Payload" class="code_param">Payload</a>);

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

#### Payload  : [payload\_t](/stdlib-reference/global-decls/traceray-05#typeparam-payload_t) {#decl-Payload}
Structure for passing data between shaders


## Remarks
Core ray tracing function for initiating traversal


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### cuda
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `spvRayTracingKHR`.


