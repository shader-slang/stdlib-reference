---
layout: stdlib-reference
---

# RayQuery\<uint rayFlagsGeneric\>\.CandidateRayFrontFace

## Description

Checks if the candidate hit is on the front face of a triangle.



## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;.<a href="candidaterayfrontface-09ch.html">CandidateRayFrontFace</a>();

</pre>

## Return value
true if hit is on triangle front face

## Remarks
GLSL/SPIRV only


## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


