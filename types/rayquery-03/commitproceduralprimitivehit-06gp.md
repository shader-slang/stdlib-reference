---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.CommitProceduralPrimitiveHit

## Description

Commit a procedural primitive hit at the specified distance.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a>&lt;<a href="/stdlib-reference/types/rayquery-03/index#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="/stdlib-reference/types/rayquery-03/commitproceduralprimitivehit-06gp">CommitProceduralPrimitiveHit</a>(
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/rayquery-03/commitproceduralprimitivehit-06gp#decl-t" class="code_param">t</a>);

</pre>

## Parameters

#### t  : float {#decl-t}
Distance along the ray where the hit occurred


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


