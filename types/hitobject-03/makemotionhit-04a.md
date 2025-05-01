---
layout: stdlib-reference
---

# HitObject\.MakeMotionHit

## Description

See MakeHit but handles Motion
Currently only supported on VK




## Signature 

<pre>
/// Requires Capability Set 1:
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">HitObject</a> <a href="index.html" class="code_type">HitObject</a>.<a href="makemotionhit-04a.html">MakeMotionHit</a>&lt;<a href="makemotionhit-04a.html#typeparam-attr_t" class="code_type">attr_t</a>&gt;(
    <a href="../raytracingaccelerationstructure-0am/index.html" class="code_type">RaytracingAccelerationStructure</a> <a href="makemotionhit-04a.html#decl-AccelerationStructure" class="code_param">AccelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="makemotionhit-04a.html#decl-InstanceIndex" class="code_param">InstanceIndex</a>,
    <span class="code_keyword">uint</span> <a href="makemotionhit-04a.html#decl-GeometryIndex" class="code_param">GeometryIndex</a>,
    <span class="code_keyword">uint</span> <a href="makemotionhit-04a.html#decl-PrimitiveIndex" class="code_param">PrimitiveIndex</a>,
    <span class="code_keyword">uint</span> <a href="makemotionhit-04a.html#decl-HitKind" class="code_param">HitKind</a>,
    <span class="code_keyword">uint</span> <a href="makemotionhit-04a.html#decl-RayContributionToHitGroupIndex" class="code_param">RayContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="makemotionhit-04a.html#decl-MultiplierForGeometryContributionToHitGroupIndex" class="code_param">MultiplierForGeometryContributionToHitGroupIndex</a>,
    <a href="../raydesc-03/index.html" class="code_type">RayDesc</a> <a href="makemotionhit-04a.html#decl-Ray" class="code_param">Ray</a>,
    <span class="code_keyword">float</span> <a href="makemotionhit-04a.html#decl-CurrentTime" class="code_param">CurrentTime</a>,
    <a href="makemotionhit-04a.html#typeparam-attr_t" class="code_type">attr_t</a> <a href="makemotionhit-04a.html#decl-attributes" class="code_param">attributes</a>);

/// Requires Capability Set 2:
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">HitObject</a> <a href="index.html" class="code_type">HitObject</a>.<a href="makemotionhit-04a.html">MakeMotionHit</a>&lt;<a href="makemotionhit-04a.html#typeparam-attr_t" class="code_type">attr_t</a>&gt;(
    <span class="code_keyword">uint</span> <a href="makemotionhit-04a.html#decl-HitGroupRecordIndex" class="code_param">HitGroupRecordIndex</a>,
    <a href="../raytracingaccelerationstructure-0am/index.html" class="code_type">RaytracingAccelerationStructure</a> <a href="makemotionhit-04a.html#decl-AccelerationStructure" class="code_param">AccelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="makemotionhit-04a.html#decl-InstanceIndex" class="code_param">InstanceIndex</a>,
    <span class="code_keyword">uint</span> <a href="makemotionhit-04a.html#decl-GeometryIndex" class="code_param">GeometryIndex</a>,
    <span class="code_keyword">uint</span> <a href="makemotionhit-04a.html#decl-PrimitiveIndex" class="code_param">PrimitiveIndex</a>,
    <span class="code_keyword">uint</span> <a href="makemotionhit-04a.html#decl-HitKind" class="code_param">HitKind</a>,
    <a href="../raydesc-03/index.html" class="code_type">RayDesc</a> <a href="makemotionhit-04a.html#decl-Ray" class="code_param">Ray</a>,
    <span class="code_keyword">float</span> <a href="makemotionhit-04a.html#decl-CurrentTime" class="code_param">CurrentTime</a>,
    <a href="makemotionhit-04a.html#typeparam-attr_t" class="code_type">attr_t</a> <a href="makemotionhit-04a.html#decl-attributes" class="code_param">attributes</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-attr_t"></a>attr\_t

## Parameters

####  <a id="decl-AccelerationStructure"></a>AccelerationStructure  : [RaytracingAccelerationStructure](../raytracingaccelerationstructure-0am/index)
####  <a id="decl-InstanceIndex"></a>InstanceIndex  : uint
####  <a id="decl-GeometryIndex"></a>GeometryIndex  : uint
####  <a id="decl-PrimitiveIndex"></a>PrimitiveIndex  : uint
####  <a id="decl-HitKind"></a>HitKind  : uint
####  <a id="decl-RayContributionToHitGroupIndex"></a>RayContributionToHitGroupIndex  : uint
####  <a id="decl-MultiplierForGeometryContributionToHitGroupIndex"></a>MultiplierForGeometryContributionToHitGroupIndex  : uint
####  <a id="decl-Ray"></a>Ray  : [RayDesc](../raydesc-03/index)
####  <a id="decl-CurrentTime"></a>CurrentTime  : float
####  <a id="decl-attributes"></a>attributes  : [attr\_t](makemotionhit-04a#typeparam-attr_t)
####  <a id="decl-HitGroupRecordIndex"></a>HitGroupRecordIndex  : uint

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingMotionBlurNV`, `spvRayTracingKHR`, `spvShaderInvocationReorderNV`.

### Capability Set 2

Defined for the following targets:

#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingMotionBlurNV`, `spvRayTracingKHR`, `spvShaderInvocationReorderNV`.


