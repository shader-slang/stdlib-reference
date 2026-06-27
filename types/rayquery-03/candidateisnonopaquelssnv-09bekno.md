---
layout: stdlib-reference
---

# RayQuery\<uint rayFlagsGeneric\>\.CandidateIsNonOpaqueLssNV

## Description

Checks whether the candidate intersection is a non-opaque line-swept
sphere (LSS) primitive.



## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;.<a href="candidateisnonopaquelssnv-09bekno.html">CandidateIsNonOpaqueLssNV</a>();

</pre>

## Return value
true if the candidate is a non-opaque LSS primitive


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvRayQueryKHR`, `spvRayTracingLinearSweptSpheresGeometryNV`.


