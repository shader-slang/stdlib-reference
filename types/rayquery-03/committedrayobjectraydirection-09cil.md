---
layout: stdlib-reference
---

# RayQuery\<uint rayFlagsGeneric\>\.CommittedRayObjectRayDirection

## Description

Gets the ray direction in object space for the committed hit.



## Signature 

<pre>
<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="index.html" class="code_type">RayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;.<a href="committedrayobjectraydirection-09cil.html">CommittedRayObjectRayDirection</a>();

</pre>

## Return value
Direction vector transformed into instance's object space

## Remarks
GLSL/SPIRV only


## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


