---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.TraceRayInline

## Description

Initialize a ray-tracing query.

This method may be called on a "fresh" ray query, or
on one that is already tracing a ray. In the latter
case any state related to the ray previously being
traced is overwritten.

The <span class='code'><a href="/stdlib-reference/types/rayquery-03/tracerayinline-058#decl-rayFlags" class="code_param">rayFlags</a></span> here will be bitwise ORed with
the <span class='code'><a href="/stdlib-reference/types/rayquery-03/tracerayinline-058#decl-rayFlags" class="code_param">rayFlags</a></span> passed as a generic argument to
<span class='code'><a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a></span> to get the effective ray flags, which
must obey any API-imposed restrictions.




## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a>&lt;<a href="/stdlib-reference/types/rayquery-03/index#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="/stdlib-reference/types/rayquery-03/tracerayinline-058">TraceRayInline</a>(
    <a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/index" class="code_type">RaytracingAccelerationStructure</a> <a href="/stdlib-reference/types/rayquery-03/tracerayinline-058#decl-accelerationStructure" class="code_param">accelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rayquery-03/tracerayinline-058#decl-rayFlags" class="code_param">rayFlags</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rayquery-03/tracerayinline-058#decl-instanceInclusionMask" class="code_param">instanceInclusionMask</a>,
    <a href="/stdlib-reference/types/raydesc-03/index" class="code_type">RayDesc</a> <a href="/stdlib-reference/types/rayquery-03/tracerayinline-058#decl-ray" class="code_param">ray</a>);

</pre>

## Parameters

#### accelerationStructure  : [RaytracingAccelerationStructure](/stdlib-reference/types/raytracingaccelerationstructure-0am/index) {#decl-accelerationStructure}
Acceleration structure to traverse

#### rayFlags  : uint {#decl-rayFlags}
Additional flags for this trace (combined with rayFlagsGeneric)

#### instanceInclusionMask  : uint {#decl-instanceInclusionMask}
Mask for filtering instance visibility

#### ray  : [RayDesc](/stdlib-reference/types/raydesc-03/index) {#decl-ray}
Description of ray parameters (origin, direction, tMin, tMax)


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


