---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.CandidateProceduralPrimitiveNonOpaque

## Description

Checks if the candidate procedural primitive is non-opaque.



## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a>&lt;<a href="/stdlib-reference/types/rayquery-03/index#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="/stdlib-reference/types/rayquery-03/candidateproceduralprimitivenonopaque-09jsv">CandidateProceduralPrimitiveNonOpaque</a>();

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


