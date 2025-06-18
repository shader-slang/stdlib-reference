---
layout: stdlib-reference
---

# RayQuery\<uint rayFlagsGeneric\>\.CandidateProceduralPrimitiveNonOpaque

## Description

Checks if the candidate procedural primitive is non-opaque.



## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;.<a href="candidateproceduralprimitivenonopaque-09jsv.html">CandidateProceduralPrimitiveNonOpaque</a>();

</pre>

## Return value
true if the primitive is non-opaque and requires shader evaluation


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


