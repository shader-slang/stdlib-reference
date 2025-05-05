---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.CommittedRayBarycentrics

## Description

Gets the barycentric coordinates of the committed hit point.



## Signature 

<pre>
<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <a href="index.html" class="code_type">RayQuery</a>&lt;<a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="committedraybarycentrics-09c.html">CommittedRayBarycentrics</a>();

</pre>

## Return value
UV barycentric coordinates on the triangle

## Remarks
GLSL/SPIRV only


## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


