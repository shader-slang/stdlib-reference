---
layout: stdlib-reference
---

# RayQuery\<uint rayFlagsGeneric\>\.CommittedLssObjectPositionsAndRadiiNV

## Description

Gets the object-space endpoint positions and radii of the committed
line-swept-sphere (LSS) primitive.



## Signature 

<pre>
<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, 2, 4&gt; <a href="index.html" class="code_type">RayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;.<a href="committedlssobjectpositionsandradiinv-09ciruz10.html">CommittedLssObjectPositionsAndRadiiNV</a>();

</pre>

## Return value
float2x4 whose rows are (endpoint.xyz, radius) for the two LSS endpoints


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvRayQueryKHR`, `spvRayTracingLinearSweptSpheresGeometryNV`.


