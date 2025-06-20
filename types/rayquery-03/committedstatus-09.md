---
layout: stdlib-reference
---

# RayQuery\<uint rayFlagsGeneric\>\.CommittedStatus

## Description

Returns the status of the committed (closest) hit.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;.<a href="committedstatus-09.html">CommittedStatus</a>();

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


