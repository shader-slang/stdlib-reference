---
layout: stdlib-reference
---

# TraceRay

## Description

Traces a ray through the acceleration structure.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="traceray-05.html">TraceRay</a>&lt;<a href="traceray-05.html#typeparam-payload_t" class="code_type">payload_t</a>&gt;(
    <a href="../types/raytracingaccelerationstructure-0am/index.html" class="code_type">RaytracingAccelerationStructure</a> <a href="traceray-05.html#decl-AccelerationStructure" class="code_param">AccelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="traceray-05.html#decl-RayFlags" class="code_param">RayFlags</a>,
    <span class="code_keyword">uint</span> <a href="traceray-05.html#decl-InstanceInclusionMask" class="code_param">InstanceInclusionMask</a>,
    <span class="code_keyword">uint</span> <a href="traceray-05.html#decl-RayContributionToHitGroupIndex" class="code_param">RayContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="traceray-05.html#decl-MultiplierForGeometryContributionToHitGroupIndex" class="code_param">MultiplierForGeometryContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="traceray-05.html#decl-MissShaderIndex" class="code_param">MissShaderIndex</a>,
    <a href="../types/raydesc-03/index.html" class="code_type">RayDesc</a> <a href="traceray-05.html#decl-Ray" class="code_param">Ray</a>,
    <span class="code_keyword">inout</span> <a href="traceray-05.html#typeparam-payload_t" class="code_type">payload_t</a> <a href="traceray-05.html#decl-Payload" class="code_param">Payload</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-payload_t"></a>payload\_t

## Parameters

####  <a id="decl-AccelerationStructure"></a>AccelerationStructure  : [RaytracingAccelerationStructure](../types/raytracingaccelerationstructure-0am/index)
The acceleration structure to traverse

####  <a id="decl-RayFlags"></a>RayFlags  : uint
Flags controlling ray behavior

####  <a id="decl-InstanceInclusionMask"></a>InstanceInclusionMask  : uint
Mask for filtering instance visibility

####  <a id="decl-RayContributionToHitGroupIndex"></a>RayContributionToHitGroupIndex  : uint
Offset for hit group indexing

####  <a id="decl-MultiplierForGeometryContributionToHitGroupIndex"></a>MultiplierForGeometryContributionToHitGroupIndex  : uint
Multiplier for geometry-based hit group indexing

####  <a id="decl-MissShaderIndex"></a>MissShaderIndex  : uint
Index of the miss shader to execute if no hit is found

####  <a id="decl-Ray"></a>Ray  : [RayDesc](../types/raydesc-03/index)
Description of the ray to trace

####  <a id="decl-Payload"></a>Payload  : [payload\_t](traceray-05#typeparam-payload_t)
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


