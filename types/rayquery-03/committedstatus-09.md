---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.CommittedStatus

## Description

Returns the status of the committed (closest) hit.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a>&lt;<a href="/stdlib-reference/types/rayquery-03/index#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="/stdlib-reference/types/rayquery-03/committedstatus-09">CommittedStatus</a>();

</pre>

## Return value
COMMITTED_STATUS indicating type of committed hit, if any

## Remarks
Valid after traversal is complete (Proceed() returns false)


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


