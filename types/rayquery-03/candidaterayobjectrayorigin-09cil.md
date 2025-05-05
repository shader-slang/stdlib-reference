---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.CandidateRayObjectRayOrigin

## Description

Gets the ray origin in object space for the candidate hit.



## Signature 

<pre>
<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="index.html" class="code_type">RayQuery</a>&lt;<a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="candidaterayobjectrayorigin-09cil.html">CandidateRayObjectRayOrigin</a>();

</pre>

## Return value
Origin point transformed into instance's object space

## Remarks
GLSL/SPIRV only


## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


