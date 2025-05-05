---
layout: stdlib-reference
---

# HitObject\.TraceMotionRay

## Description

Executes motion ray traversal (including anyhit and intersection shaders) like TraceRay, but returns the
resulting hit information as a HitObject and does not trigger closesthit or miss shaders.




## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">HitObject</a> <a href="index.html" class="code_type">HitObject</a>.<a href="tracemotionray-05b.html">TraceMotionRay</a>&lt;<a href="tracemotionray-05b.html#typeparam-payload_t" class="code_type">payload_t</a>&gt;(
    <a href="../raytracingaccelerationstructure-0am/index.html" class="code_type">RaytracingAccelerationStructure</a> <a href="tracemotionray-05b.html#decl-AccelerationStructure" class="code_param">AccelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="tracemotionray-05b.html#decl-RayFlags" class="code_param">RayFlags</a>,
    <span class="code_keyword">uint</span> <a href="tracemotionray-05b.html#decl-InstanceInclusionMask" class="code_param">InstanceInclusionMask</a>,
    <span class="code_keyword">uint</span> <a href="tracemotionray-05b.html#decl-RayContributionToHitGroupIndex" class="code_param">RayContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="tracemotionray-05b.html#decl-MultiplierForGeometryContributionToHitGroupIndex" class="code_param">MultiplierForGeometryContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="tracemotionray-05b.html#decl-MissShaderIndex" class="code_param">MissShaderIndex</a>,
    <a href="../raydesc-03/index.html" class="code_type">RayDesc</a> <a href="tracemotionray-05b.html#decl-Ray" class="code_param">Ray</a>,
    <span class="code_keyword">float</span> <a href="tracemotionray-05b.html#decl-CurrentTime" class="code_param">CurrentTime</a>,
    <span class="code_keyword">inout</span> <a href="tracemotionray-05b.html#typeparam-payload_t" class="code_type">payload_t</a> <a href="tracemotionray-05b.html#decl-Payload" class="code_param">Payload</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-payload_t"></a>payload\_t

## Parameters

####  <a id="decl-AccelerationStructure"></a>AccelerationStructure  : [RaytracingAccelerationStructure](../raytracingaccelerationstructure-0am/index)
####  <a id="decl-RayFlags"></a>RayFlags  : uint
####  <a id="decl-InstanceInclusionMask"></a>InstanceInclusionMask  : uint
####  <a id="decl-RayContributionToHitGroupIndex"></a>RayContributionToHitGroupIndex  : uint
####  <a id="decl-MultiplierForGeometryContributionToHitGroupIndex"></a>MultiplierForGeometryContributionToHitGroupIndex  : uint
####  <a id="decl-MissShaderIndex"></a>MissShaderIndex  : uint
####  <a id="decl-Ray"></a>Ray  : [RayDesc](../raydesc-03/index)
####  <a id="decl-CurrentTime"></a>CurrentTime  : float
####  <a id="decl-Payload"></a>Payload  : [payload\_t](tracemotionray-05b#typeparam-payload_t)

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingMotionBlurNV`, `spvRayTracingKHR`, `spvShaderInvocationReorderNV`.


