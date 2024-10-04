---
layout: stdlib-reference
---

# TraceMotionRay

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/TraceMotionRay">TraceMotionRay</a>&lt;payload_t&gt;(
    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index" class="code_type">RaytracingAccelerationStructure</a> <span class='code_param'>AccelerationStructure</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>RayFlags</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>InstanceInclusionMask</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>RayContributionToHitGroupIndex</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>MultiplierForGeometryContributionToHitGroupIndex</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>MissShaderIndex</span>,
    <a href="/stdlib-reference/types/RayDesc/index" class="code_type">RayDesc</a> <span class='code_param'>Ray</span>,
    <span class="code_keyword">float</span> <span class='code_param'>CurrentTime</span>,
    <span class="code_keyword">inout</span> payload_t <span class='code_param'>Payload</span>);

</pre>

## Parameters

* `payload_t`
* `AccelerationStructure`
* [`RayFlags`](/stdlib-reference/global-decls/RayFlags)
* `InstanceInclusionMask`
* `RayContributionToHitGroupIndex`
* `MultiplierForGeometryContributionToHitGroupIndex`
* `MissShaderIndex`
* `Ray`
* `CurrentTime`
* `Payload`

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


