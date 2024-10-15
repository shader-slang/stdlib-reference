---
layout: stdlib-reference
---

# struct HitObject

## Description

Immutable data type representing a ray hit or a miss. Can be used to invoke hit or miss shading,
or as a key in ReorderThread. Created by one of several methods described below. HitObject
and its related functions are available in raytracing shader types only.


## Methods

* [init](/stdlib-reference/types/hitobject-03/init)
* [TraceRay](/stdlib-reference/types/hitobject-03/traceray-05)
* [TraceMotionRay](/stdlib-reference/types/hitobject-03/tracemotionray-05b)
* [MakeHit](/stdlib-reference/types/hitobject-03/makehit-04)
* [MakeMotionHit](/stdlib-reference/types/hitobject-03/makemotionhit-04a)
* [MakeMiss](/stdlib-reference/types/hitobject-03/makemiss-04)
* [MakeMotionMiss](/stdlib-reference/types/hitobject-03/makemotionmiss-04a)
* [MakeNop](/stdlib-reference/types/hitobject-03/makenop-04)
* [Invoke](/stdlib-reference/types/hitobject-03/invoke-0)
* [IsMiss](/stdlib-reference/types/hitobject-03/ismiss-02)
* [IsHit](/stdlib-reference/types/hitobject-03/ishit-02)
* [IsNop](/stdlib-reference/types/hitobject-03/isnop-02)
* [GetRayDesc](/stdlib-reference/types/hitobject-03/getraydesc-036)
* [GetShaderTableIndex](/stdlib-reference/types/hitobject-03/getshadertableindex-039e)
* [GetInstanceIndex](/stdlib-reference/types/hitobject-03/getinstanceindex-03b)
* [GetInstanceID](/stdlib-reference/types/hitobject-03/getinstanceid-03bc)
* [GetGeometryIndex](/stdlib-reference/types/hitobject-03/getgeometryindex-03b)
* [GetPrimitiveIndex](/stdlib-reference/types/hitobject-03/getprimitiveindex-03c)
* [GetHitKind](/stdlib-reference/types/hitobject-03/gethitkind-036)
* [GetWorldToObject](/stdlib-reference/types/hitobject-03/getworldtoobject-038a)
* [GetObjectToWorld](/stdlib-reference/types/hitobject-03/getobjecttoworld-039b)
* [GetCurrentTime](/stdlib-reference/types/hitobject-03/getcurrenttime-03a)
* [GetObjectRayOrigin](/stdlib-reference/types/hitobject-03/getobjectrayorigin-039c)
* [GetObjectRayDirection](/stdlib-reference/types/hitobject-03/getobjectraydirection-039c)
* [GetShaderRecordBufferHandle](/stdlib-reference/types/hitobject-03/getshaderrecordbufferhandle-039fl)
* [GetAttributes](/stdlib-reference/types/hitobject-03/getattributes-03)
* [LoadLocalRootTableConstant](/stdlib-reference/types/hitobject-03/loadlocalroottableconstant-049di)

