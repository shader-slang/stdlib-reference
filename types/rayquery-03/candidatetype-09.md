---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.CandidateType

## Description

Get the type of candidate hit being considered.

The ray query coroutine will suspend when it encounters
a hit that cannot be resolved with fixed-function logic
(either a non-opaque triangle or a procedural primitive).
In either of those cases, <span class='code'><a href="candidatetype-09.html">CandidateType</a>()</span> will return
the kind of candidate hit that must be resolved by
user code.




## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="candidatetype-09.html">CandidateType</a>();

</pre>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


