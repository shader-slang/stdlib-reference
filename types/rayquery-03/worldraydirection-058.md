---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.WorldRayDirection

## Description

Gets the world-space direction of the ray.



## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a>&lt;<a href="/stdlib-reference/types/rayquery-03/index#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="/stdlib-reference/types/rayquery-03/worldraydirection-058">WorldRayDirection</a>();

</pre>

## Return value
Normalized direction vector in world space


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


