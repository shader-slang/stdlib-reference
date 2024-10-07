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
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/HitObject/MakeHit">MakeHit</a>&lt;<a href="/stdlib-reference/types/HitObject/MakeHit#typeparam-attr_t" class="code_type">attr_t</a>&gt;(
    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index" class="code_type">RaytracingAccelerationStructure</a> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-AccelerationStructure" class="code_param">AccelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-InstanceIndex" class="code_param">InstanceIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-GeometryIndex" class="code_param">GeometryIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-PrimitiveIndex" class="code_param">PrimitiveIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-HitKind" class="code_param">HitKind</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-RayContributionToHitGroupIndex" class="code_param">RayContributionToHitGroupIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-MultiplierForGeometryContributionToHitGroupIndex" class="code_param">MultiplierForGeometryContributionToHitGroupIndex</a>,
    <a href="/stdlib-reference/types/RayDesc/index" class="code_type">RayDesc</a> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-Ray" class="code_param">Ray</a>,
    <a href="/stdlib-reference/types/HitObject/MakeHit#typeparam-attr_t" class="code_type">attr_t</a> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-attributes" class="code_param">attributes</a>);

<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/HitObject/MakeHit">MakeHit</a>&lt;<a href="/stdlib-reference/types/HitObject/MakeHit#typeparam-attr_t" class="code_type">attr_t</a>&gt;(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-HitGroupRecordIndex" class="code_param">HitGroupRecordIndex</a>,
    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index" class="code_type">RaytracingAccelerationStructure</a> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-AccelerationStructure" class="code_param">AccelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-InstanceIndex" class="code_param">InstanceIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-GeometryIndex" class="code_param">GeometryIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-PrimitiveIndex" class="code_param">PrimitiveIndex</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-HitKind" class="code_param">HitKind</a>,
    <a href="/stdlib-reference/types/RayDesc/index" class="code_type">RayDesc</a> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-Ray" class="code_param">Ray</a>,
    <a href="/stdlib-reference/types/HitObject/MakeHit#typeparam-attr_t" class="code_type">attr_t</a> <a href="/stdlib-reference/types/HitObject/MakeHit#decl-attributes" class="code_param">attributes</a>);

</pre>

## Generic Parameters

#### attr\_t {#typeparam-attr_t}

## Generic Parameters

#### attr\_t {#typeparam-attr_t}

## Parameters

#### AccelerationStructure  : [RaytracingAccelerationStructure](/stdlib-reference/types/RaytracingAccelerationStructure/index) {#decl-AccelerationStructure}
#### InstanceIndex  : uint {#decl-InstanceIndex}
#### GeometryIndex  : uint {#decl-GeometryIndex}
#### PrimitiveIndex  : uint {#decl-PrimitiveIndex}
#### HitKind  : uint {#decl-HitKind}
#### RayContributionToHitGroupIndex  : uint {#decl-RayContributionToHitGroupIndex}
#### MultiplierForGeometryContributionToHitGroupIndex  : uint {#decl-MultiplierForGeometryContributionToHitGroupIndex}
#### Ray  : [RayDesc](/stdlib-reference/types/RayDesc/index) {#decl-Ray}
#### attributes  : [attr\_t](/stdlib-reference/types/HitObject/MakeHit#typeparam-attr_t) {#decl-attributes}
#### HitGroupRecordIndex  : uint {#decl-HitGroupRecordIndex}

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


