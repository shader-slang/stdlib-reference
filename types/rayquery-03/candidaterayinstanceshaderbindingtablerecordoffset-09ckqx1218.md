---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.CandidateRayInstanceShaderBindingTableRecordOffset

## Description

Gets the shader binding table offset for the instance containing the candidate hit.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="candidaterayinstanceshaderbindingtablerecordoffset-09ckqx1218.html">CandidateRayInstanceShaderBindingTableRecordOffset</a>();

</pre>

## Return value
Offset into the shader binding table for hit group selection

## Remarks
GLSL/SPIRV only


## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


