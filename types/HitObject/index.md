---
layout: stdlib-reference
---

# struct HitObject

## Description

Immutable data type representing a ray hit or a miss. Can be used to invoke hit or miss shading,
or as a key in ReorderThread. Created by one of several methods described below. HitObject
and its related functions are available in raytracing shader types only.


## Methods

* [init](/stdlib-reference/types/HitObject/init)
* [TraceRay](/stdlib-reference/types/HitObject/TraceRay)
* [TraceMotionRay](/stdlib-reference/types/HitObject/TraceMotionRay)
* [MakeHit](/stdlib-reference/types/HitObject/MakeHit)
* [MakeMotionHit](/stdlib-reference/types/HitObject/MakeMotionHit)
* [MakeMiss](/stdlib-reference/types/HitObject/MakeMiss)
* [MakeMotionMiss](/stdlib-reference/types/HitObject/MakeMotionMiss)
* [MakeNop](/stdlib-reference/types/HitObject/MakeNop)
* [Invoke](/stdlib-reference/types/HitObject/Invoke)
* [IsMiss](/stdlib-reference/types/HitObject/IsMiss)
* [IsHit](/stdlib-reference/types/HitObject/IsHit)
* [IsNop](/stdlib-reference/types/HitObject/IsNop)
* [GetRayDesc](/stdlib-reference/types/HitObject/GetRayDesc)
* [GetShaderTableIndex](/stdlib-reference/types/HitObject/GetShaderTableIndex)
* [GetInstanceIndex](/stdlib-reference/types/HitObject/GetInstanceIndex)
* [GetInstanceID](/stdlib-reference/types/HitObject/GetInstanceID)
* [GetGeometryIndex](/stdlib-reference/types/HitObject/GetGeometryIndex)
* [GetPrimitiveIndex](/stdlib-reference/types/HitObject/GetPrimitiveIndex)
* [GetHitKind](/stdlib-reference/types/HitObject/GetHitKind)
* [GetWorldToObject](/stdlib-reference/types/HitObject/GetWorldToObject)
* [GetObjectToWorld](/stdlib-reference/types/HitObject/GetObjectToWorld)
* [GetCurrentTime](/stdlib-reference/types/HitObject/GetCurrentTime)
* [GetObjectRayOrigin](/stdlib-reference/types/HitObject/GetObjectRayOrigin)
* [GetObjectRayDirection](/stdlib-reference/types/HitObject/GetObjectRayDirection)
* [GetShaderRecordBufferHandle](/stdlib-reference/types/HitObject/GetShaderRecordBufferHandle)
* [GetAttributes](/stdlib-reference/types/HitObject/GetAttributes)
* [LoadLocalRootTableConstant](/stdlib-reference/types/HitObject/LoadLocalRootTableConstant)

