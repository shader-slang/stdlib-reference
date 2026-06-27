---
layout: stdlib-reference
---

# RayQuery\<uint rayFlagsGeneric\>\.CommittedSphereObjectPositionAndRadiusNV

## Description

Gets the object-space center position (xyz) and radius (w) of the
committed sphere primitive.



## Signature 

<pre>
<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt; <a href="index.html" class="code_type">RayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;.<a href="committedsphereobjectpositionandradiusnv-09fltw1213.html">CommittedSphereObjectPositionAndRadiusNV</a>();

</pre>

## Return value
float4 where xyz is the sphere center and w is the radius


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvRayQueryKHR`, `spvRayTracingSpheresGeometryNV`.


