---
layout: stdlib-reference
---

# RayQuery\<uint rayFlagsGeneric\>\.CandidateRayInstanceCustomIndex

## Description

Gets the custom index of the instance containing the candidate hit.



## Signature 

<pre>
<span class="code_keyword">int</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;.<a href="candidaterayinstancecustomindex-09ckq.html">CandidateRayInstanceCustomIndex</a>();

</pre>

## Return value
User-provided instance identifier

## Remarks
GLSL/SPIRV only


## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


