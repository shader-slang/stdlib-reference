---
layout: stdlib-reference
---

# HitObject\.MakeHit

## Description

Creates a HitObject representing a hit based on values explicitly passed as arguments, without
tracing a ray. The primitive specified by AccelerationStructure, InstanceIndex, GeometryIndex,
and PrimitiveIndex must exist. The shader table index is computed using the formula used with
TraceRay. The computed index must reference a valid hit group record in the shader table. The
Attributes parameter must either be an attribute struct, such as
BuiltInTriangleIntersectionAttributes, or another HitObject to copy the attributes from.

## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/HitObject/MakeHit">MakeHit</a>&lt;attr_t&gt;(
    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index" class="code_type">RaytracingAccelerationStructure</a> <span class='code_param'>AccelerationStructure</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>InstanceIndex</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>GeometryIndex</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>PrimitiveIndex</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>HitKind</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>RayContributionToHitGroupIndex</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>MultiplierForGeometryContributionToHitGroupIndex</span>,
    <a href="/stdlib-reference/types/RayDesc/index" class="code_type">RayDesc</a> <span class='code_param'>Ray</span>,
    attr_t <span class='code_param'>attributes</span>);

<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/HitObject/MakeHit">MakeHit</a>&lt;attr_t&gt;(
    <span class="code_keyword">uint</span> <span class='code_param'>HitGroupRecordIndex</span>,
    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index" class="code_type">RaytracingAccelerationStructure</a> <span class='code_param'>AccelerationStructure</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>InstanceIndex</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>GeometryIndex</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>PrimitiveIndex</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>HitKind</span>,
    <a href="/stdlib-reference/types/RayDesc/index" class="code_type">RayDesc</a> <span class='code_param'>Ray</span>,
    attr_t <span class='code_param'>attributes</span>);

</pre>

## Parameters

* `attr_t`
* `AccelerationStructure`
* [`InstanceIndex`](/stdlib-reference/global-decls/InstanceIndex)
* [`GeometryIndex`](/stdlib-reference/global-decls/GeometryIndex)
* [`PrimitiveIndex`](/stdlib-reference/global-decls/PrimitiveIndex)
* [`HitKind`](/stdlib-reference/global-decls/HitKind)
* `RayContributionToHitGroupIndex`
* `MultiplierForGeometryContributionToHitGroupIndex`
* `Ray`
* `attributes`
* `HitGroupRecordIndex`

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


