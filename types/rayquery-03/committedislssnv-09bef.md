---
layout: stdlib-reference
---

# RayQuery\<uint rayFlagsGeneric\>\.CommittedIsLssNV

## Description

Checks whether the committed intersection is a line-swept-sphere (LSS)
primitive.



## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;.<a href="committedislssnv-09bef.html">CommittedIsLssNV</a>();

</pre>

## Return value
true if the committed hit is an LSS primitive


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvRayQueryKHR`, `spvRayTracingLinearSweptSpheresGeometryNV`.


