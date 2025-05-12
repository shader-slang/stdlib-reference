---
layout: stdlib-reference
---

# struct HitObject

## Description

Immutable data type representing a ray hit or a miss. Can be used to invoke hit or miss shading,
or as a key in ReorderThread. Created by one of several methods described below. HitObject
and its related functions are available in raytracing shader types only.


## Methods

* [init](init)
* [TraceRay](traceray-05)
* [TraceMotionRay](tracemotionray-05b)
* [MakeHit](makehit-04)
* [MakeMotionHit](makemotionhit-04a)
* [MakeMiss](makemiss-04)
* [MakeMotionMiss](makemotionmiss-04a)
* [MakeNop](makenop-04)
* [Invoke](invoke-0)
* [IsMiss](ismiss-02)
* [IsHit](ishit-02)
* [IsNop](isnop-02)
* [GetRayDesc](getraydesc-036)
* [GetShaderTableIndex](getshadertableindex-039e)
* [GetInstanceIndex](getinstanceindex-03b)
* [GetInstanceID](getinstanceid-03bc)
* [GetGeometryIndex](getgeometryindex-03b)
* [GetPrimitiveIndex](getprimitiveindex-03c)
* [GetHitKind](gethitkind-036)
* [GetClusterID](getclusterid-03ab)
* [GetWorldToObject](getworldtoobject-038a)
* [GetObjectToWorld](getobjecttoworld-039b)
* [GetCurrentTime](getcurrenttime-03a)
* [GetObjectRayOrigin](getobjectrayorigin-039c)
* [GetObjectRayDirection](getobjectraydirection-039c)
* [GetShaderRecordBufferHandle](getshaderrecordbufferhandle-039fl)
* [GetAttributes](getattributes-03)
* [LoadLocalRootTableConstant](loadlocalroottableconstant-049di)


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

GetAttributes <getattributes-03>
GetClusterID <getclusterid-03ab>
GetCurrentTime <getcurrenttime-03a>
GetGeometryIndex <getgeometryindex-03b>
GetHitKind <gethitkind-036>
GetInstanceID <getinstanceid-03bc>
GetInstanceIndex <getinstanceindex-03b>
GetObjectRayDirection <getobjectraydirection-039c>
GetObjectRayOrigin <getobjectrayorigin-039c>
GetObjectToWorld <getobjecttoworld-039b>
GetPrimitiveIndex <getprimitiveindex-03c>
GetRayDesc <getraydesc-036>
GetShaderRecordBufferHandle <getshaderrecordbufferhandle-039fl>
GetShaderTableIndex <getshadertableindex-039e>
GetWorldToObject <getworldtoobject-038a>
Invoke <invoke-0>
IsHit <ishit-02>
IsMiss <ismiss-02>
IsNop <isnop-02>
LoadLocalRootTableConstant <loadlocalroottableconstant-049di>
MakeHit <makehit-04>
MakeMiss <makemiss-04>
MakeMotionHit <makemotionhit-04a>
MakeMotionMiss <makemotionmiss-04a>
MakeNop <makenop-04>
TraceMotionRay <tracemotionray-05b>
TraceRay <traceray-05>
init <init>
```
RTD-TOC-END -->
