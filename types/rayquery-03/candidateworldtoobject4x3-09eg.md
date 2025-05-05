---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.CandidateWorldToObject4x3

## Description

Gets the world-to-object transform as a 4x3 matrix.



## Signature 

<pre>
<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, 4, 3&gt; <a href="index.html" class="code_type">RayQuery</a>&lt;<a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="candidateworldtoobject4x3-09eg.html">CandidateWorldToObject4x3</a>();

</pre>

## Return value
4x3 matrix transforming from world to object space

## Remarks
Available for both candidate and committed hits


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


