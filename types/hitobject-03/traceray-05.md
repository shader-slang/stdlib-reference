---
layout: stdlib-reference
---

# HitObject\.TraceRay

## Description

Executes ray traversal (including anyhit and intersection shaders) like TraceRay, but returns the
resulting hit information as a HitObject and does not trigger closesthit or miss shaders.

Generic payload parameter T can be:
- payload_t: for HLSL data-based API (payload structure)
- int: for GLSL location-based API (payload location ID)




## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">HitObject</a> <a href="index.html" class="code_type">HitObject</a>.<a href="traceray-05.html">TraceRay</a>&lt;<a href="traceray-05.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="../raytracingaccelerationstructure-0am/index.html" class="code_type">RaytracingAccelerationStructure</a> <a href="traceray-05.html#decl-AccelerationStructure" class="code_param">AccelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="traceray-05.html#decl-RayFlags" class="code_param">RayFlags</a>,
    <span class="code_keyword">uint</span> <a href="traceray-05.html#decl-InstanceInclusionMask" class="code_param">InstanceInclusionMask</a>,
    <span class="code_keyword">uint</span> <a href="traceray-05.html#decl-RayContributionToHitGroupIndex" class="code_param">RayContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="traceray-05.html#decl-MultiplierForGeometryContributionToHitGroupIndex" class="code_param">MultiplierForGeometryContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="traceray-05.html#decl-MissShaderIndex" class="code_param">MissShaderIndex</a>,
    <a href="../raydesc-03/index.html" class="code_type">RayDesc</a> <a href="traceray-05.html#decl-Ray" class="code_param">Ray</a>,
    <span class="code_keyword">inout</span> <a href="traceray-05.html#typeparam-T" class="code_type">T</a> <a href="traceray-05.html#decl-Payload" class="code_param">Payload</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T

## Parameters

####  <a id="decl-AccelerationStructure"></a>AccelerationStructure  : [RaytracingAccelerationStructure](../raytracingaccelerationstructure-0am/index.html)
####  <a id="decl-RayFlags"></a>RayFlags  : uint
####  <a id="decl-InstanceInclusionMask"></a>InstanceInclusionMask  : uint
####  <a id="decl-RayContributionToHitGroupIndex"></a>RayContributionToHitGroupIndex  : uint
####  <a id="decl-MultiplierForGeometryContributionToHitGroupIndex"></a>MultiplierForGeometryContributionToHitGroupIndex  : uint
####  <a id="decl-MissShaderIndex"></a>MissShaderIndex  : uint
####  <a id="decl-Ray"></a>Ray  : [RayDesc](../raydesc-03/index.html)
####  <a id="decl-Payload"></a>Payload  : [T](traceray-05.html#typeparam-T)

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


