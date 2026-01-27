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
* [MakeMotionMiss](makemotionmiss-04a)
* [MakeNop](makenop-04)
* [Invoke](invoke-0)
* [IsMiss](ismiss-02)
* [IsHit](ishit-02)
* [IsNop](isnop-02)
* [GetRayDesc](getraydesc-036)
* [GetShaderTableIndex](getshadertableindex-039e)
* [SetShaderTableIndex](setshadertableindex-039e)
* [GetInstanceIndex](getinstanceindex-03b)
* [GetInstanceID](getinstanceid-03bc)
* [GetGeometryIndex](getgeometryindex-03b)
* [GetPrimitiveIndex](getprimitiveindex-03c)
* [GetHitKind](gethitkind-036)
* [GetClusterID](getclusterid-03ab)
* [GetSpherePositionAndRadius](getspherepositionandradius-039hk)
* [GetLssPositionsAndRadii](getlsspositionsandradii-036fi)
* [IsSphereHit](isspherehit-028)
* [IsLssHit](islsshit-025)
* [GetWorldToObject](getworldtoobject-038a)
* [GetObjectToWorld](getobjecttoworld-039b)
* [GetCurrentTime](getcurrenttime-03a)
* [GetObjectRayOrigin](getobjectrayorigin-039c)
* [GetObjectRayDirection](getobjectraydirection-039c)
* [GetShaderRecordBufferHandle](getshaderrecordbufferhandle-039fl)
* [GetAttributes](getattributes-03)
* [LoadLocalRootTableConstant](loadlocalroottableconstant-049di)
* [GetRayFlags](getrayflags-036)
* [GetRayTMin](getraytmin-0367)
* [GetRayTCurrent](getraytcurrent-0367)
* [GetWorldRayOrigin](getworldrayorigin-038b)
* [GetWorldRayDirection](getworldraydirection-038b)
* [GetObjectToWorld3x4](getobjecttoworld3x4-039b)
* [GetObjectToWorld4x3](getobjecttoworld4x3-039b)
* [GetWorldToObject3x4](getworldtoobject3x4-038a)
* [GetWorldToObject4x3](getworldtoobject4x3-038a)
* [MakeMiss](makemiss-04)
* [FromRayQuery](fromrayquery-047)


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

FromRayQuery <fromrayquery-047>
GetAttributes <getattributes-03>
GetClusterID <getclusterid-03ab>
GetCurrentTime <getcurrenttime-03a>
GetGeometryIndex <getgeometryindex-03b>
GetHitKind <gethitkind-036>
GetInstanceID <getinstanceid-03bc>
GetInstanceIndex <getinstanceindex-03b>
GetLssPositionsAndRadii <getlsspositionsandradii-036fi>
GetObjectRayDirection <getobjectraydirection-039c>
GetObjectRayOrigin <getobjectrayorigin-039c>
GetObjectToWorld <getobjecttoworld-039b>
GetObjectToWorld3x4 <getobjecttoworld3x4-039b>
GetObjectToWorld4x3 <getobjecttoworld4x3-039b>
GetPrimitiveIndex <getprimitiveindex-03c>
GetRayDesc <getraydesc-036>
GetRayFlags <getrayflags-036>
GetRayTCurrent <getraytcurrent-0367>
GetRayTMin <getraytmin-0367>
GetShaderRecordBufferHandle <getshaderrecordbufferhandle-039fl>
GetShaderTableIndex <getshadertableindex-039e>
GetSpherePositionAndRadius <getspherepositionandradius-039hk>
GetWorldRayDirection <getworldraydirection-038b>
GetWorldRayOrigin <getworldrayorigin-038b>
GetWorldToObject <getworldtoobject-038a>
GetWorldToObject3x4 <getworldtoobject3x4-038a>
GetWorldToObject4x3 <getworldtoobject4x3-038a>
Invoke <invoke-0>
IsHit <ishit-02>
IsLssHit <islsshit-025>
IsMiss <ismiss-02>
IsNop <isnop-02>
IsSphereHit <isspherehit-028>
LoadLocalRootTableConstant <loadlocalroottableconstant-049di>
MakeHit <makehit-04>
MakeMiss <makemiss-04>
MakeMotionHit <makemotionhit-04a>
MakeMotionMiss <makemotionmiss-04a>
MakeNop <makenop-04>
SetShaderTableIndex <setshadertableindex-039e>
TraceMotionRay <tracemotionray-05b>
TraceRay <traceray-05>
init <init>
```
RTD-TOC-END -->
