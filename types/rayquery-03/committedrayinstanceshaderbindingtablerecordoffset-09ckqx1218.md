---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.CommittedRayInstanceShaderBindingTableRecordOffset

## Description

Gets the shader binding table offset for the instance containing the committed hit.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a>&lt;<a href="/stdlib-reference/types/rayquery-03/index#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="/stdlib-reference/types/rayquery-03/committedrayinstanceshaderbindingtablerecordoffset-09ckqx1218">CommittedRayInstanceShaderBindingTableRecordOffset</a>();

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


