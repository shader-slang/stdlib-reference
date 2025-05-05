---
layout: stdlib-reference
---

# struct RayQuery\<rayFlagsGeneric:uint\>

## Description

Note: The treatment of the <span class='code'><a href="index.html" class="code_type">RayQuery</a></span> type in Slang does not
perfectly match its semantics in vanilla HLSL in some corner
cases. Specifically, a <span class='code'><a href="index.html" class="code_type">RayQuery</a></span> in vanilla HLSL is an
opaque handle to mutable storage, and assigning a <span class='code'><a href="index.html" class="code_type">RayQuery</a></span>
or passing one as a parameter will only copy the *handle*,
potentially resulting in aliasing of the underlying mutable
storage.

In contrast, Slang considers a <span class='code'><a href="index.html" class="code_type">RayQuery</a></span> to own its mutable
state, and (because the API does not support cloning of queries),
<span class='code'><a href="index.html" class="code_type">RayQuery</a></span> values are non-copyable (aka "move-only").

The main place where this arises as a consideration is when
passing a <span class='code'><a href="index.html" class="code_type">RayQuery</a></span> down into a function that will perform
mutating operations on it (e.g., <span class='code'><a href="../../global-decls/traceray-05.html">TraceRay</a></span> or <span class='code'><a href="proceed-0.html">Proceed</a></span>):
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

####  <a id="decl-rayFlagsGeneric"></a>rayFlagsGeneric  : uint = RAY \_FLAG \_NONE

## Methods

* [init](init)
* [TraceRayInline](tracerayinline-058)
* [Proceed](proceed-0)
* [Abort](abort-0)
* [CommitNonOpaqueTriangleHit](commitnonopaquetrianglehit-069fn)
* [CommitProceduralPrimitiveHit](commitproceduralprimitivehit-06gp)
* [CandidateType](candidatetype-09)
* [CommittedStatus](committedstatus-09)
* [CandidateProceduralPrimitiveNonOpaque](candidateproceduralprimitivenonopaque-09jsv)
* [CandidateTriangleRayT](candidatetrianglerayt-09hk)
* [CommittedRayT](committedrayt-09c)
* [CandidateRayInstanceCustomIndex](candidaterayinstancecustomindex-09ckq)
* [CommittedRayInstanceCustomIndex](committedrayinstancecustomindex-09ckq)
* [CandidateRayInstanceId](candidaterayinstanceid-09ck)
* [CommittedRayInstanceId](committedrayinstanceid-09ck)
* [CandidateRayInstanceShaderBindingTableRecordOffset](candidaterayinstanceshaderbindingtablerecordoffset-09ckqx1218)
* [CommittedRayInstanceShaderBindingTableRecordOffset](committedrayinstanceshaderbindingtablerecordoffset-09ckqx1218)
* [CandidateRayGeometryIndex](candidateraygeometryindex-09ck)
* [CommittedRayGeometryIndex](committedraygeometryindex-09ck)
* [CandidateRayPrimitiveIndex](candidaterayprimitiveindex-09cl)
* [CommittedRayPrimitiveIndex](committedrayprimitiveindex-09cl)
* [CandidateRayBarycentrics](candidateraybarycentrics-09c)
* [CommittedRayBarycentrics](committedraybarycentrics-09c)
* [CandidateRayFrontFace](candidaterayfrontface-09ch)
* [CommittedRayFrontFace](committedrayfrontface-09ch)
* [CandidateRayObjectRayDirection](candidaterayobjectraydirection-09cil)
* [CommittedRayObjectRayDirection](committedrayobjectraydirection-09cil)
* [CandidateRayObjectRayOrigin](candidaterayobjectrayorigin-09cil)
* [CommittedRayObjectRayOrigin](committedrayobjectrayorigin-09cil)
* [CandidateRayObjectToWorld](candidaterayobjecttoworld-09cik)
* [CommittedRayObjectToWorld](committedrayobjecttoworld-09cik)
* [CandidateRayWorldToObject](candidaterayworldtoobject-09chj)
* [CommittedRayWorldToObject](committedrayworldtoobject-09chj)
* [CandidateGetIntersectionTriangleVertexPositions](candidategetintersectiontrianglevertexpositions-09cow12)
* [CandidateObjectToWorld3x4](candidateobjecttoworld3x4-09fh)
* [CandidateObjectToWorld4x3](candidateobjecttoworld4x3-09fh)
* [CandidateWorldToObject3x4](candidateworldtoobject3x4-09eg)
* [CandidateWorldToObject4x3](candidateworldtoobject4x3-09eg)
* [CandidateInstanceIndex](candidateinstanceindex-09h)
* [CandidateInstanceID](candidateinstanceid-09hi)
* [CandidatePrimitiveIndex](candidateprimitiveindex-09i)
* [CandidateGeometryIndex](candidategeometryindex-09h)
* [CandidateInstanceContributionToHitGroupIndex](candidateinstancecontributiontohitgroupindex-09htvy13)
* [CandidateObjectRayOrigin](candidateobjectrayorigin-09fi)
* [CandidateObjectRayDirection](candidateobjectraydirection-09fi)
* [CandidateTriangleFrontFace](candidatetrianglefrontface-09hm)
* [CandidateTriangleBarycentrics](candidatetrianglebarycentrics-09h)
* [CommittedGetIntersectionTriangleVertexPositions](committedgetintersectiontrianglevertexpositions-09cow12)
* [CommittedObjectToWorld3x4](committedobjecttoworld3x4-09fh)
* [CommittedObjectToWorld4x3](committedobjecttoworld4x3-09fh)
* [CommittedWorldToObject3x4](committedworldtoobject3x4-09eg)
* [CommittedWorldToObject4x3](committedworldtoobject4x3-09eg)
* [CommittedInstanceIndex](committedinstanceindex-09h)
* [CommittedInstanceID](committedinstanceid-09hi)
* [CommittedPrimitiveIndex](committedprimitiveindex-09i)
* [CommittedGeometryIndex](committedgeometryindex-09h)
* [CommittedInstanceContributionToHitGroupIndex](committedinstancecontributiontohitgroupindex-09htvy13)
* [CommittedObjectRayOrigin](committedobjectrayorigin-09fi)
* [CommittedObjectRayDirection](committedobjectraydirection-09fi)
* [CommittedTriangleFrontFace](committedtrianglefrontface-09hm)
* [CommittedTriangleBarycentrics](committedtrianglebarycentrics-09h)
* [RayFlags](rayflags-03)
* [WorldRayOrigin](worldrayorigin-058)
* [WorldRayDirection](worldraydirection-058)
* [RayTMin](raytmin-034)


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

Abort <abort-0>
CandidateGeometryIndex <candidategeometryindex-09h>
CandidateGetIntersectionTriangleVertexPositions <candidategetintersectiontrianglevertexpositions-09cow12>
CandidateInstanceContributionToHitGroupIndex <candidateinstancecontributiontohitgroupindex-09htvy13>
CandidateInstanceID <candidateinstanceid-09hi>
CandidateInstanceIndex <candidateinstanceindex-09h>
CandidateObjectRayDirection <candidateobjectraydirection-09fi>
CandidateObjectRayOrigin <candidateobjectrayorigin-09fi>
CandidateObjectToWorld3x4 <candidateobjecttoworld3x4-09fh>
CandidateObjectToWorld4x3 <candidateobjecttoworld4x3-09fh>
CandidatePrimitiveIndex <candidateprimitiveindex-09i>
CandidateProceduralPrimitiveNonOpaque <candidateproceduralprimitivenonopaque-09jsv>
CandidateRayBarycentrics <candidateraybarycentrics-09c>
CandidateRayFrontFace <candidaterayfrontface-09ch>
CandidateRayGeometryIndex <candidateraygeometryindex-09ck>
CandidateRayInstanceCustomIndex <candidaterayinstancecustomindex-09ckq>
CandidateRayInstanceId <candidaterayinstanceid-09ck>
CandidateRayInstanceShaderBindingTableRecordOffset <candidaterayinstanceshaderbindingtablerecordoffset-09ckqx1218>
CandidateRayObjectRayDirection <candidaterayobjectraydirection-09cil>
CandidateRayObjectRayOrigin <candidaterayobjectrayorigin-09cil>
CandidateRayObjectToWorld <candidaterayobjecttoworld-09cik>
CandidateRayPrimitiveIndex <candidaterayprimitiveindex-09cl>
CandidateRayWorldToObject <candidaterayworldtoobject-09chj>
CandidateTriangleBarycentrics <candidatetrianglebarycentrics-09h>
CandidateTriangleFrontFace <candidatetrianglefrontface-09hm>
CandidateTriangleRayT <candidatetrianglerayt-09hk>
CandidateType <candidatetype-09>
CandidateWorldToObject3x4 <candidateworldtoobject3x4-09eg>
CandidateWorldToObject4x3 <candidateworldtoobject4x3-09eg>
CommitNonOpaqueTriangleHit <commitnonopaquetrianglehit-069fn>
CommitProceduralPrimitiveHit <commitproceduralprimitivehit-06gp>
CommittedGeometryIndex <committedgeometryindex-09h>
CommittedGetIntersectionTriangleVertexPositions <committedgetintersectiontrianglevertexpositions-09cow12>
CommittedInstanceContributionToHitGroupIndex <committedinstancecontributiontohitgroupindex-09htvy13>
CommittedInstanceID <committedinstanceid-09hi>
CommittedInstanceIndex <committedinstanceindex-09h>
CommittedObjectRayDirection <committedobjectraydirection-09fi>
CommittedObjectRayOrigin <committedobjectrayorigin-09fi>
CommittedObjectToWorld3x4 <committedobjecttoworld3x4-09fh>
CommittedObjectToWorld4x3 <committedobjecttoworld4x3-09fh>
CommittedPrimitiveIndex <committedprimitiveindex-09i>
CommittedRayBarycentrics <committedraybarycentrics-09c>
CommittedRayFrontFace <committedrayfrontface-09ch>
CommittedRayGeometryIndex <committedraygeometryindex-09ck>
CommittedRayInstanceCustomIndex <committedrayinstancecustomindex-09ckq>
CommittedRayInstanceId <committedrayinstanceid-09ck>
CommittedRayInstanceShaderBindingTableRecordOffset <committedrayinstanceshaderbindingtablerecordoffset-09ckqx1218>
CommittedRayObjectRayDirection <committedrayobjectraydirection-09cil>
CommittedRayObjectRayOrigin <committedrayobjectrayorigin-09cil>
CommittedRayObjectToWorld <committedrayobjecttoworld-09cik>
CommittedRayPrimitiveIndex <committedrayprimitiveindex-09cl>
CommittedRayT <committedrayt-09c>
CommittedRayWorldToObject <committedrayworldtoobject-09chj>
CommittedStatus <committedstatus-09>
CommittedTriangleBarycentrics <committedtrianglebarycentrics-09h>
CommittedTriangleFrontFace <committedtrianglefrontface-09hm>
CommittedWorldToObject3x4 <committedworldtoobject3x4-09eg>
CommittedWorldToObject4x3 <committedworldtoobject4x3-09eg>
Proceed <proceed-0>
RayFlags <rayflags-03>
RayTMin <raytmin-034>
TraceRayInline <tracerayinline-058>
WorldRayDirection <worldraydirection-058>
WorldRayOrigin <worldrayorigin-058>
init <init>
```
RTD-TOC-END -->
