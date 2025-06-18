---
layout: stdlib-reference
---

# RayQuery\<uint rayFlagsGeneric\>\.CommittedRayObjectToWorld

## Description

Gets the object-to-world transform matrix for the committed hit instance.



## Signature 

<pre>
<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, 4, 3&gt; <a href="index.html" class="code_type">RayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;.<a href="committedrayobjecttoworld-09cik.html">CommittedRayObjectToWorld</a>();

</pre>

## Return value
4x3 matrix transforming from object to world space

## Remarks
GLSL/SPIRV only


## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


