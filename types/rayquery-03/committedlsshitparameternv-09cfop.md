---
layout: stdlib-reference
---

# RayQuery\<uint rayFlagsGeneric\>\.CommittedLssHitParameterNV

## Description

Gets the hit parameter (position along the LSS axis, in [0,1]) for the
committed line-swept-sphere intersection.



## Signature 

<pre>
<span class="code_keyword">float</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;.<a href="committedlsshitparameternv-09cfop.html">CommittedLssHitParameterNV</a>();

</pre>

## Return value
Scalar hit parameter along the committed LSS primitive


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvRayQueryKHR`, `spvRayTracingLinearSweptSpheresGeometryNV`.


