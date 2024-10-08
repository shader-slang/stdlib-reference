---
layout: stdlib-reference
---

# struct RayQuery\<rayFlagsGeneric:uint\>

## Description

Note: The treatment of the <span class='code'><a href="/stdlib-reference/types/RayQuery/index" class="code_type">RayQuery</a></span> type in Slang does not
perfectly match its semantics in vanilla HLSL in some corner
cases. Specifically, a <span class='code'><a href="/stdlib-reference/types/RayQuery/index" class="code_type">RayQuery</a></span> in vanilla HLSL is an
opaque handle to mutable storage, and assigning a <span class='code'><a href="/stdlib-reference/types/RayQuery/index" class="code_type">RayQuery</a></span>
or passing one as a parameter will only copy the *handle*,
potentially resulting in aliasing of the underlying mutable
storage.

In contrast, Slang considers a <span class='code'><a href="/stdlib-reference/types/RayQuery/index" class="code_type">RayQuery</a></span> to own its mutable
state, and (because the API does not support cloning of queries),
<span class='code'><a href="/stdlib-reference/types/RayQuery/index" class="code_type">RayQuery</a></span> values are non-copyable (aka "move-only").

The main place where this arises as a consideration is when
passing a <span class='code'><a href="/stdlib-reference/types/RayQuery/index" class="code_type">RayQuery</a></span> down into a function that will perform
mutating operations on it (e.g., <span class='code'><a href="/stdlib-reference/global-decls/TraceRay">TraceRay</a></span> or <span class='code'><a href="/stdlib-reference/types/RayQuery/Proceed">Proceed</a></span>):
```
void myFunc( inout RayQuery<FLAGS> q )
{
q.Proceed();
}
```
In Slang, a parameter like <span class='code'>q</span> above should be declared <span class='code'><span class="code_keyword">inout</span></span>.
HLSL does not care about whether <span class='code'>q</span> is declared <span class='code'><span class="code_keyword">inout</span></span> or not.

cannot use a cap for struct with unequal target support
since it will propegate rules to children


## Generic Parameters

#### rayFlagsGeneric  : uint = RAY \_FLAG \_NONE {#decl-rayFlagsGeneric}

## Methods

* [init](/stdlib-reference/types/RayQuery/init)
* [TraceRayInline](/stdlib-reference/types/RayQuery/TraceRayInline)
* [Proceed](/stdlib-reference/types/RayQuery/Proceed)
* [Abort](/stdlib-reference/types/RayQuery/Abort)
* [CommitNonOpaqueTriangleHit](/stdlib-reference/types/RayQuery/CommitNonOpaqueTriangleHit)
* [CommitProceduralPrimitiveHit](/stdlib-reference/types/RayQuery/CommitProceduralPrimitiveHit)
* [CandidateType](/stdlib-reference/types/RayQuery/CandidateType)
* [CommittedStatus](/stdlib-reference/types/RayQuery/CommittedStatus)
* [CandidateProceduralPrimitiveNonOpaque](/stdlib-reference/types/RayQuery/CandidateProceduralPrimitiveNonOpaque)
* [CandidateTriangleRayT](/stdlib-reference/types/RayQuery/CandidateTriangleRayT)
* [CommittedRayT](/stdlib-reference/types/RayQuery/CommittedRayT)
* [CandidateRayInstanceCustomIndex](/stdlib-reference/types/RayQuery/CandidateRayInstanceCustomIndex)
* [CommittedRayInstanceCustomIndex](/stdlib-reference/types/RayQuery/CommittedRayInstanceCustomIndex)
* [CandidateRayInstanceId](/stdlib-reference/types/RayQuery/CandidateRayInstanceId)
* [CommittedRayInstanceId](/stdlib-reference/types/RayQuery/CommittedRayInstanceId)
* [CandidateRayInstanceShaderBindingTableRecordOffset](/stdlib-reference/types/RayQuery/CandidateRayInstanceShaderBindingTableRecordOffset)
* [CommittedRayInstanceShaderBindingTableRecordOffset](/stdlib-reference/types/RayQuery/CommittedRayInstanceShaderBindingTableRecordOffset)
* [CandidateRayGeometryIndex](/stdlib-reference/types/RayQuery/CandidateRayGeometryIndex)
* [CommittedRayGeometryIndex](/stdlib-reference/types/RayQuery/CommittedRayGeometryIndex)
* [CandidateRayPrimitiveIndex](/stdlib-reference/types/RayQuery/CandidateRayPrimitiveIndex)
* [CommittedRayPrimitiveIndex](/stdlib-reference/types/RayQuery/CommittedRayPrimitiveIndex)
* [CandidateRayBarycentrics](/stdlib-reference/types/RayQuery/CandidateRayBarycentrics)
* [CommittedRayBarycentrics](/stdlib-reference/types/RayQuery/CommittedRayBarycentrics)
* [CandidateRayFrontFace](/stdlib-reference/types/RayQuery/CandidateRayFrontFace)
* [CommittedRayFrontFace](/stdlib-reference/types/RayQuery/CommittedRayFrontFace)
* [CandidateRayObjectRayDirection](/stdlib-reference/types/RayQuery/CandidateRayObjectRayDirection)
* [CommittedRayObjectRayDirection](/stdlib-reference/types/RayQuery/CommittedRayObjectRayDirection)
* [CandidateRayObjectRayOrigin](/stdlib-reference/types/RayQuery/CandidateRayObjectRayOrigin)
* [CommittedRayObjectRayOrigin](/stdlib-reference/types/RayQuery/CommittedRayObjectRayOrigin)
* [CandidateRayObjectToWorld](/stdlib-reference/types/RayQuery/CandidateRayObjectToWorld)
* [CommittedRayObjectToWorld](/stdlib-reference/types/RayQuery/CommittedRayObjectToWorld)
* [CandidateRayWorldToObject](/stdlib-reference/types/RayQuery/CandidateRayWorldToObject)
* [CommittedRayWorldToObject](/stdlib-reference/types/RayQuery/CommittedRayWorldToObject)
* [CandidateGetIntersectionTriangleVertexPositions](/stdlib-reference/types/RayQuery/CandidateGetIntersectionTriangleVertexPositions)
* [CandidateObjectToWorld3x4](/stdlib-reference/types/RayQuery/CandidateObjectToWorld3x4)
* [CandidateObjectToWorld4x3](/stdlib-reference/types/RayQuery/CandidateObjectToWorld4x3)
* [CandidateWorldToObject3x4](/stdlib-reference/types/RayQuery/CandidateWorldToObject3x4)
* [CandidateWorldToObject4x3](/stdlib-reference/types/RayQuery/CandidateWorldToObject4x3)
* [CandidateInstanceIndex](/stdlib-reference/types/RayQuery/CandidateInstanceIndex)
* [CandidateInstanceID](/stdlib-reference/types/RayQuery/CandidateInstanceID)
* [CandidatePrimitiveIndex](/stdlib-reference/types/RayQuery/CandidatePrimitiveIndex)
* [CandidateGeometryIndex](/stdlib-reference/types/RayQuery/CandidateGeometryIndex)
* [CandidateInstanceContributionToHitGroupIndex](/stdlib-reference/types/RayQuery/CandidateInstanceContributionToHitGroupIndex)
* [CandidateObjectRayOrigin](/stdlib-reference/types/RayQuery/CandidateObjectRayOrigin)
* [CandidateObjectRayDirection](/stdlib-reference/types/RayQuery/CandidateObjectRayDirection)
* [CandidateTriangleFrontFace](/stdlib-reference/types/RayQuery/CandidateTriangleFrontFace)
* [CandidateTriangleBarycentrics](/stdlib-reference/types/RayQuery/CandidateTriangleBarycentrics)
* [CommittedGetIntersectionTriangleVertexPositions](/stdlib-reference/types/RayQuery/CommittedGetIntersectionTriangleVertexPositions)
* [CommittedObjectToWorld3x4](/stdlib-reference/types/RayQuery/CommittedObjectToWorld3x4)
* [CommittedObjectToWorld4x3](/stdlib-reference/types/RayQuery/CommittedObjectToWorld4x3)
* [CommittedWorldToObject3x4](/stdlib-reference/types/RayQuery/CommittedWorldToObject3x4)
* [CommittedWorldToObject4x3](/stdlib-reference/types/RayQuery/CommittedWorldToObject4x3)
* [CommittedInstanceIndex](/stdlib-reference/types/RayQuery/CommittedInstanceIndex)
* [CommittedInstanceID](/stdlib-reference/types/RayQuery/CommittedInstanceID)
* [CommittedPrimitiveIndex](/stdlib-reference/types/RayQuery/CommittedPrimitiveIndex)
* [CommittedGeometryIndex](/stdlib-reference/types/RayQuery/CommittedGeometryIndex)
* [CommittedInstanceContributionToHitGroupIndex](/stdlib-reference/types/RayQuery/CommittedInstanceContributionToHitGroupIndex)
* [CommittedObjectRayOrigin](/stdlib-reference/types/RayQuery/CommittedObjectRayOrigin)
* [CommittedObjectRayDirection](/stdlib-reference/types/RayQuery/CommittedObjectRayDirection)
* [CommittedTriangleFrontFace](/stdlib-reference/types/RayQuery/CommittedTriangleFrontFace)
* [CommittedTriangleBarycentrics](/stdlib-reference/types/RayQuery/CommittedTriangleBarycentrics)
* [RayFlags](/stdlib-reference/types/RayQuery/RayFlags)
* [WorldRayOrigin](/stdlib-reference/types/RayQuery/WorldRayOrigin)
* [WorldRayDirection](/stdlib-reference/types/RayQuery/WorldRayDirection)
* [RayTMin](/stdlib-reference/types/RayQuery/RayTMin)

