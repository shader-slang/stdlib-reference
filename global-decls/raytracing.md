---
layout: stdlib-reference
---
# Ray-tracing

This category contains the following declarations:

#### [AcceptHitAndEndSearch](accepthitandendsearch-069cf)

#### [CANDIDATE\_NON\_OPAQUE\_TRIANGLE](candidate_non_opaque_triangle-012345678abcefghijlmnopqrs)

#### [CANDIDATE\_PROCEDURAL\_PRIMITIVE](candidate_procedural_primitive-012345678abcdefghijlmnopqrst)

#### [COMMITTED\_NOTHING](committed_nothing-012345678abcdefg)

#### [COMMITTED\_PROCEDURAL\_PRIMITIVE\_HIT](committed_procedural_primitive_hit-012345678abcdefghijlmnopqrstvwx)

#### [COMMITTED\_TRIANGLE\_HIT](committed_triangle_hit-012345678abcdefghjkl)

#### [CallShader\<Payload\>](callshader-04)

#### [DispatchRaysDimensions](dispatchraysdimensions-08c)

#### [DispatchRaysIndex](dispatchraysindex-08c)

#### [GeometryIndex](geometryindex-08)

#### [GetClusterID](getclusterid-03ab)

#### [HIT\_KIND\_TRIANGLE\_BACK\_FACE](hit_kind_triangle_back_face-01245679abcdefgijklnopq)

#### [HIT\_KIND\_TRIANGLE\_FRONT\_FACE](hit_kind_triangle_front_face-01245679abcdefgijklmopqr)

#### [HitKind](hitkind-03)

#### [HitTriangleVertexPosition](hittrianglevertexposition-03bh)

#### [IgnoreHit](ignorehit-06)

#### [InstanceID](instanceid-089)

#### [InstanceIndex](instanceindex-08)

#### [ObjectRayDirection](objectraydirection-069)

#### [ObjectRayOrigin](objectrayorigin-069)

#### [ObjectToWorld](objecttoworld-068)

#### [ObjectToWorld3x4](objecttoworld3x4-068)

#### [ObjectToWorld4x3](objecttoworld4x3-068)

#### [PrimitiveIndex](primitiveindex-09)

#### [RAY\_FLAG\_ACCEPT\_FIRST\_HIT\_AND\_END\_SEARCH](ray_flag_accept_first_hit_and_end_search-01245679abcdeghijkmnoqrsuvwyz10111213)

#### [RAY\_FLAG\_CULL\_BACK\_FACING\_TRIANGLES](ray_flag_cull_back_facing_triangles-01245679abcefghjklmnoqrstuvwxy)

#### [RAY\_FLAG\_CULL\_FRONT\_FACING\_TRIANGLES](ray_flag_cull_front_facing_triangles-01245679abcefghiklmnoprstuvwxyz)

#### [RAY\_FLAG\_CULL\_NON\_OPAQUE](ray_flag_cull_non_opaque-01245679abcefgijklmn)

#### [RAY\_FLAG\_CULL\_OPAQUE](ray_flag_cull_opaque-01245679abcefghij)

#### [RAY\_FLAG\_FORCE\_NON\_OPAQUE](ray_flag_force_non_opaque-01245679abcdfghjklmno)

#### [RAY\_FLAG\_FORCE\_OPAQUE](ray_flag_force_opaque-01245679abcdfghijk)

#### [RAY\_FLAG\_NONE](ray_flag_none-01245679abc)

#### [RAY\_FLAG\_SKIP\_CLOSEST\_HIT\_SHADER](ray_flag_skip_closest_hit_shader-01245679abcefghijkmnoqrstuv)

#### [RAY\_FLAG\_SKIP\_PROCEDURAL\_PRIMITIVES](ray_flag_skip_procedural_primitives-01245679abcefghijklmnpqrstuvwxy)

#### [RAY\_FLAG\_SKIP\_TRIANGLES](ray_flag_skip_triangles-01245679abcefghijklm)

#### [RayCurrentTime](raycurrenttime-03a)

#### [RayFlags](rayflags-03)

#### [RayTCurrent](raytcurrent-034)

#### [RayTMin](raytmin-034)

#### [ReportHit\<A\>](reporthit-06)

#### [ReportHitOptix\<each T\>](reporthitoptix-069)

#### [TraceMotionRay\<payload\_t\>](tracemotionray-05b)

#### [TraceRay\<payload\_t\>](traceray-05)

#### [WorldRayDirection](worldraydirection-058)

#### [WorldRayOrigin](worldrayorigin-058)

#### [WorldToObject](worldtoobject-057)

#### [WorldToObject3x4](worldtoobject3x4-057)

#### [WorldToObject4x3](worldtoobject4x3-057)


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

AcceptHitAndEndSearch <accepthitandendsearch-069cf>
CANDIDATE_NON_OPAQUE_TRIANGLE <candidate_non_opaque_triangle-012345678abcefghijlmnopqrs>
CANDIDATE_PROCEDURAL_PRIMITIVE <candidate_procedural_primitive-012345678abcdefghijlmnopqrst>
COMMITTED_NOTHING <committed_nothing-012345678abcdefg>
COMMITTED_PROCEDURAL_PRIMITIVE_HIT <committed_procedural_primitive_hit-012345678abcdefghijlmnopqrstvwx>
COMMITTED_TRIANGLE_HIT <committed_triangle_hit-012345678abcdefghjkl>
CallShader <callshader-04>
DispatchRaysDimensions <dispatchraysdimensions-08c>
DispatchRaysIndex <dispatchraysindex-08c>
GeometryIndex <geometryindex-08>
GetClusterID <getclusterid-03ab>
HIT_KIND_TRIANGLE_BACK_FACE <hit_kind_triangle_back_face-01245679abcdefgijklnopq>
HIT_KIND_TRIANGLE_FRONT_FACE <hit_kind_triangle_front_face-01245679abcdefgijklmopqr>
HitKind <hitkind-03>
HitTriangleVertexPosition <hittrianglevertexposition-03bh>
IgnoreHit <ignorehit-06>
InstanceID <instanceid-089>
InstanceIndex <instanceindex-08>
ObjectRayDirection <objectraydirection-069>
ObjectRayOrigin <objectrayorigin-069>
ObjectToWorld <objecttoworld-068>
ObjectToWorld3x4 <objecttoworld3x4-068>
ObjectToWorld4x3 <objecttoworld4x3-068>
PrimitiveIndex <primitiveindex-09>
RAY_FLAG_ACCEPT_FIRST_HIT_AND_END_SEARCH <ray_flag_accept_first_hit_and_end_search-01245679abcdeghijkmnoqrsuvwyz10111213>
RAY_FLAG_CULL_BACK_FACING_TRIANGLES <ray_flag_cull_back_facing_triangles-01245679abcefghjklmnoqrstuvwxy>
RAY_FLAG_CULL_FRONT_FACING_TRIANGLES <ray_flag_cull_front_facing_triangles-01245679abcefghiklmnoprstuvwxyz>
RAY_FLAG_CULL_NON_OPAQUE <ray_flag_cull_non_opaque-01245679abcefgijklmn>
RAY_FLAG_CULL_OPAQUE <ray_flag_cull_opaque-01245679abcefghij>
RAY_FLAG_FORCE_NON_OPAQUE <ray_flag_force_non_opaque-01245679abcdfghjklmno>
RAY_FLAG_FORCE_OPAQUE <ray_flag_force_opaque-01245679abcdfghijk>
RAY_FLAG_NONE <ray_flag_none-01245679abc>
RAY_FLAG_SKIP_CLOSEST_HIT_SHADER <ray_flag_skip_closest_hit_shader-01245679abcefghijkmnoqrstuv>
RAY_FLAG_SKIP_PROCEDURAL_PRIMITIVES <ray_flag_skip_procedural_primitives-01245679abcefghijklmnpqrstuvwxy>
RAY_FLAG_SKIP_TRIANGLES <ray_flag_skip_triangles-01245679abcefghijklm>
RayCurrentTime <raycurrenttime-03a>
RayFlags <rayflags-03>
RayTCurrent <raytcurrent-034>
RayTMin <raytmin-034>
ReportHit <reporthit-06>
ReportHitOptix <reporthitoptix-069>
TraceMotionRay <tracemotionray-05b>
TraceRay <traceray-05>
WorldRayDirection <worldraydirection-058>
WorldRayOrigin <worldrayorigin-058>
WorldToObject <worldtoobject-057>
WorldToObject3x4 <worldtoobject3x4-057>
WorldToObject4x3 <worldtoobject4x3-057>
```
RTD-TOC-END -->
