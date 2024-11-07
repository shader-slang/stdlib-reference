---
layout: stdlib-reference
---

# struct RayQuery\<rayFlagsGeneric:uint\>

## Description

Note: The treatment of the <span class='code'><a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a></span> type in Slang does not
perfectly match its semantics in vanilla HLSL in some corner
cases. Specifically, a <span class='code'><a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a></span> in vanilla HLSL is an
opaque handle to mutable storage, and assigning a <span class='code'><a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a></span>
or passing one as a parameter will only copy the *handle*,
potentially resulting in aliasing of the underlying mutable
storage.

In contrast, Slang considers a <span class='code'><a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a></span> to own its mutable
state, and (because the API does not support cloning of queries),
<span class='code'><a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a></span> values are non-copyable (aka "move-only").

The main place where this arises as a consideration is when
passing a <span class='code'><a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a></span> down into a function that will perform
mutating operations on it (e.g., <span class='code'><a href="/stdlib-reference/global-decls/traceray-05">TraceRay</a></span> or <span class='code'><a href="/stdlib-reference/types/rayquery-03/proceed-0">Proceed</a></span>):
```
     void myFunc( inout RayQuery<FLAGS> q )
     {
         q.Proceed();
     }
```
In Slang, a parameter like <span class='code'>q</span> above should be declared <span class='code'><span class="code_keyword">inout</span></span>.
HLSL does not care about whether <span class='code'>q</span> is declared <span class='code'><span class="code_keyword">inout</span></span> or not.

cannot use a cap for struct with unequal target support
since it will propegate rules to children.


## Generic Parameters

#### rayFlagsGeneric  : uint = RAY \_FLAG \_NONE {#decl-rayFlagsGeneric}

## Methods

* [init](/stdlib-reference/types/rayquery-03/init)
* [TraceRayInline](/stdlib-reference/types/rayquery-03/tracerayinline-058)
* [Proceed](/stdlib-reference/types/rayquery-03/proceed-0)
* [Abort](/stdlib-reference/types/rayquery-03/abort-0)
* [CommitNonOpaqueTriangleHit](/stdlib-reference/types/rayquery-03/commitnonopaquetrianglehit-069fn)
* [CommitProceduralPrimitiveHit](/stdlib-reference/types/rayquery-03/commitproceduralprimitivehit-06gp)
* [CandidateType](/stdlib-reference/types/rayquery-03/candidatetype-09)
* [CommittedStatus](/stdlib-reference/types/rayquery-03/committedstatus-09)
* [CandidateProceduralPrimitiveNonOpaque](/stdlib-reference/types/rayquery-03/candidateproceduralprimitivenonopaque-09jsv)
* [CandidateTriangleRayT](/stdlib-reference/types/rayquery-03/candidatetrianglerayt-09hk)
* [CommittedRayT](/stdlib-reference/types/rayquery-03/committedrayt-09c)
* [CandidateRayInstanceCustomIndex](/stdlib-reference/types/rayquery-03/candidaterayinstancecustomindex-09ckq)
* [CommittedRayInstanceCustomIndex](/stdlib-reference/types/rayquery-03/committedrayinstancecustomindex-09ckq)
* [CandidateRayInstanceId](/stdlib-reference/types/rayquery-03/candidaterayinstanceid-09ck)
* [CommittedRayInstanceId](/stdlib-reference/types/rayquery-03/committedrayinstanceid-09ck)
* [CandidateRayInstanceShaderBindingTableRecordOffset](/stdlib-reference/types/rayquery-03/candidaterayinstanceshaderbindingtablerecordoffset-09ckqx1218)
* [CommittedRayInstanceShaderBindingTableRecordOffset](/stdlib-reference/types/rayquery-03/committedrayinstanceshaderbindingtablerecordoffset-09ckqx1218)
* [CandidateRayGeometryIndex](/stdlib-reference/types/rayquery-03/candidateraygeometryindex-09ck)
* [CommittedRayGeometryIndex](/stdlib-reference/types/rayquery-03/committedraygeometryindex-09ck)
* [CandidateRayPrimitiveIndex](/stdlib-reference/types/rayquery-03/candidaterayprimitiveindex-09cl)
* [CommittedRayPrimitiveIndex](/stdlib-reference/types/rayquery-03/committedrayprimitiveindex-09cl)
* [CandidateRayBarycentrics](/stdlib-reference/types/rayquery-03/candidateraybarycentrics-09c)
* [CommittedRayBarycentrics](/stdlib-reference/types/rayquery-03/committedraybarycentrics-09c)
* [CandidateRayFrontFace](/stdlib-reference/types/rayquery-03/candidaterayfrontface-09ch)
* [CommittedRayFrontFace](/stdlib-reference/types/rayquery-03/committedrayfrontface-09ch)
* [CandidateRayObjectRayDirection](/stdlib-reference/types/rayquery-03/candidaterayobjectraydirection-09cil)
* [CommittedRayObjectRayDirection](/stdlib-reference/types/rayquery-03/committedrayobjectraydirection-09cil)
* [CandidateRayObjectRayOrigin](/stdlib-reference/types/rayquery-03/candidaterayobjectrayorigin-09cil)
* [CommittedRayObjectRayOrigin](/stdlib-reference/types/rayquery-03/committedrayobjectrayorigin-09cil)
* [CandidateRayObjectToWorld](/stdlib-reference/types/rayquery-03/candidaterayobjecttoworld-09cik)
* [CommittedRayObjectToWorld](/stdlib-reference/types/rayquery-03/committedrayobjecttoworld-09cik)
* [CandidateRayWorldToObject](/stdlib-reference/types/rayquery-03/candidaterayworldtoobject-09chj)
* [CommittedRayWorldToObject](/stdlib-reference/types/rayquery-03/committedrayworldtoobject-09chj)
* [CandidateGetIntersectionTriangleVertexPositions](/stdlib-reference/types/rayquery-03/candidategetintersectiontrianglevertexpositions-09cow12)
* [CandidateObjectToWorld3x4](/stdlib-reference/types/rayquery-03/candidateobjecttoworld3x4-09fh)
* [CandidateObjectToWorld4x3](/stdlib-reference/types/rayquery-03/candidateobjecttoworld4x3-09fh)
* [CandidateWorldToObject3x4](/stdlib-reference/types/rayquery-03/candidateworldtoobject3x4-09eg)
* [CandidateWorldToObject4x3](/stdlib-reference/types/rayquery-03/candidateworldtoobject4x3-09eg)
* [CandidateInstanceIndex](/stdlib-reference/types/rayquery-03/candidateinstanceindex-09h)
* [CandidateInstanceID](/stdlib-reference/types/rayquery-03/candidateinstanceid-09hi)
* [CandidatePrimitiveIndex](/stdlib-reference/types/rayquery-03/candidateprimitiveindex-09i)
* [CandidateGeometryIndex](/stdlib-reference/types/rayquery-03/candidategeometryindex-09h)
* [CandidateInstanceContributionToHitGroupIndex](/stdlib-reference/types/rayquery-03/candidateinstancecontributiontohitgroupindex-09htvy13)
* [CandidateObjectRayOrigin](/stdlib-reference/types/rayquery-03/candidateobjectrayorigin-09fi)
* [CandidateObjectRayDirection](/stdlib-reference/types/rayquery-03/candidateobjectraydirection-09fi)
* [CandidateTriangleFrontFace](/stdlib-reference/types/rayquery-03/candidatetrianglefrontface-09hm)
* [CandidateTriangleBarycentrics](/stdlib-reference/types/rayquery-03/candidatetrianglebarycentrics-09h)
* [CommittedGetIntersectionTriangleVertexPositions](/stdlib-reference/types/rayquery-03/committedgetintersectiontrianglevertexpositions-09cow12)
* [CommittedObjectToWorld3x4](/stdlib-reference/types/rayquery-03/committedobjecttoworld3x4-09fh)
* [CommittedObjectToWorld4x3](/stdlib-reference/types/rayquery-03/committedobjecttoworld4x3-09fh)
* [CommittedWorldToObject3x4](/stdlib-reference/types/rayquery-03/committedworldtoobject3x4-09eg)
* [CommittedWorldToObject4x3](/stdlib-reference/types/rayquery-03/committedworldtoobject4x3-09eg)
* [CommittedInstanceIndex](/stdlib-reference/types/rayquery-03/committedinstanceindex-09h)
* [CommittedInstanceID](/stdlib-reference/types/rayquery-03/committedinstanceid-09hi)
* [CommittedPrimitiveIndex](/stdlib-reference/types/rayquery-03/committedprimitiveindex-09i)
* [CommittedGeometryIndex](/stdlib-reference/types/rayquery-03/committedgeometryindex-09h)
* [CommittedInstanceContributionToHitGroupIndex](/stdlib-reference/types/rayquery-03/committedinstancecontributiontohitgroupindex-09htvy13)
* [CommittedObjectRayOrigin](/stdlib-reference/types/rayquery-03/committedobjectrayorigin-09fi)
* [CommittedObjectRayDirection](/stdlib-reference/types/rayquery-03/committedobjectraydirection-09fi)
* [CommittedTriangleFrontFace](/stdlib-reference/types/rayquery-03/committedtrianglefrontface-09hm)
* [CommittedTriangleBarycentrics](/stdlib-reference/types/rayquery-03/committedtrianglebarycentrics-09h)
* [RayFlags](/stdlib-reference/types/rayquery-03/rayflags-03)
* [WorldRayOrigin](/stdlib-reference/types/rayquery-03/worldrayorigin-058)
* [WorldRayDirection](/stdlib-reference/types/rayquery-03/worldraydirection-058)
* [RayTMin](/stdlib-reference/types/rayquery-03/raytmin-034)

