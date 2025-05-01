---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.CommitProceduralPrimitiveHit

## Description

Commit a procedural primitive hit at the specified distance.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="commitproceduralprimitivehit-06gp.html">CommitProceduralPrimitiveHit</a>(
    <span class="code_keyword">float</span> <a href="commitproceduralprimitivehit-06gp.html#decl-t" class="code_param">t</a>);

</pre>

## Parameters

####  <a id="decl-t"></a>t  : float
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


