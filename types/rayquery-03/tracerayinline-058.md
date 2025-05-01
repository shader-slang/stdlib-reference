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

The <span class='code'><a href="tracerayinline-058.html#decl-rayFlags" class="code_param">rayFlags</a></span> here will be bitwise ORed with
the <span class='code'><a href="tracerayinline-058.html#decl-rayFlags" class="code_param">rayFlags</a></span> passed as a generic argument to
<span class='code'><a href="index.html" class="code_type">RayQuery</a></span> to get the effective ray flags, which
must obey any API-imposed restrictions.




## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="tracerayinline-058.html">TraceRayInline</a>(
    <a href="../raytracingaccelerationstructure-0am/index.html" class="code_type">RaytracingAccelerationStructure</a> <a href="tracerayinline-058.html#decl-accelerationStructure" class="code_param">accelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="tracerayinline-058.html#decl-rayFlags" class="code_param">rayFlags</a>,
    <span class="code_keyword">uint</span> <a href="tracerayinline-058.html#decl-instanceInclusionMask" class="code_param">instanceInclusionMask</a>,
    <a href="../raydesc-03/index.html" class="code_type">RayDesc</a> <a href="tracerayinline-058.html#decl-ray" class="code_param">ray</a>);

</pre>

## Parameters

####  <a id="decl-accelerationStructure"></a>accelerationStructure  : [RaytracingAccelerationStructure](../raytracingaccelerationstructure-0am/index)
Acceleration structure to traverse

####  <a id="decl-rayFlags"></a>rayFlags  : uint
Additional flags for this trace (combined with rayFlagsGeneric)

####  <a id="decl-instanceInclusionMask"></a>instanceInclusionMask  : uint
Mask for filtering instance visibility

####  <a id="decl-ray"></a>ray  : [RayDesc](../raydesc-03/index)
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


