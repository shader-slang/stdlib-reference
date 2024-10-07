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
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/HitObject/MakeMotionHit">MakeMotionHit</a>&lt;<a href="/stdlib-reference/types/HitObject/MakeMotionHit#typeparam-attr_t" class="code_type">attr_t</a>&gt;(
AccelerationStructure    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index" class="code_type">RaytracingAccelerationStructure</a> ,
<a href="/stdlib-reference/global-decls/InstanceIndex">InstanceIndex</a>    uint ,
<a href="/stdlib-reference/global-decls/GeometryIndex">GeometryIndex</a>    uint ,
<a href="/stdlib-reference/global-decls/PrimitiveIndex">PrimitiveIndex</a>    uint ,
<a href="/stdlib-reference/global-decls/HitKind">HitKind</a>    uint ,
RayContributionToHitGroupIndex    uint ,
MultiplierForGeometryContributionToHitGroupIndex    uint ,
Ray    <a href="/stdlib-reference/types/RayDesc/index" class="code_type">RayDesc</a> ,
CurrentTime    float ,
attributes    <a href="/stdlib-reference/types/HitObject/MakeMotionHit#typeparam-attr_t" class="code_type">attr_t</a> );

/// Requires Capability Set 2:
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/HitObject/MakeMotionHit">MakeMotionHit</a>&lt;<a href="/stdlib-reference/types/HitObject/MakeMotionHit#typeparam-attr_t" class="code_type">attr_t</a>&gt;(
HitGroupRecordIndex    uint ,
AccelerationStructure    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index" class="code_type">RaytracingAccelerationStructure</a> ,
<a href="/stdlib-reference/global-decls/InstanceIndex">InstanceIndex</a>    uint ,
<a href="/stdlib-reference/global-decls/GeometryIndex">GeometryIndex</a>    uint ,
<a href="/stdlib-reference/global-decls/PrimitiveIndex">PrimitiveIndex</a>    uint ,
<a href="/stdlib-reference/global-decls/HitKind">HitKind</a>    uint ,
Ray    <a href="/stdlib-reference/types/RayDesc/index" class="code_type">RayDesc</a> ,
CurrentTime    float ,
attributes    <a href="/stdlib-reference/types/HitObject/MakeMotionHit#typeparam-attr_t" class="code_type">attr_t</a> );

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
#### CurrentTime  : float {#decl-CurrentTime}
#### attributes  : [attr\_t](/stdlib-reference/types/HitObject/MakeMotionHit#typeparam-attr_t) {#decl-attributes}
#### HitGroupRecordIndex  : uint {#decl-HitGroupRecordIndex}

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


