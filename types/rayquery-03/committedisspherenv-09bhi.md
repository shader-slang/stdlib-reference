---
layout: stdlib-reference
---

# RayQuery\<uint rayFlagsGeneric\>\.CommittedIsSphereNV

## Description

Checks whether the committed intersection is a sphere primitive.



## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;.<a href="committedisspherenv-09bhi.html">CommittedIsSphereNV</a>();

</pre>

## Return value
true if the committed hit is a sphere primitive


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvRayQueryKHR`, `spvRayTracingSpheresGeometryNV`.


