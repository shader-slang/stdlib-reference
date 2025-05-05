---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.CandidateRayPrimitiveIndex

## Description

Gets the primitive index for the candidate hit.



## Signature 

<pre>
<span class="code_keyword">int</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="candidaterayprimitiveindex-09cl.html">CandidateRayPrimitiveIndex</a>();

</pre>

## Return value
Zero-based index of the primitive in the geometry

## Remarks
GLSL/SPIRV only


## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


