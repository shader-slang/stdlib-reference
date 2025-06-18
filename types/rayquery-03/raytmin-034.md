---
layout: stdlib-reference
---

# RayQuery\<uint rayFlagsGeneric\>\.RayTMin

## Description

Gets the minimum valid distance along the ray.



## Signature 

<pre>
<span class="code_keyword">float</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;.<a href="raytmin-034.html">RayTMin</a>();

</pre>

## Return value
Minimum t-value for considering intersections

## Remarks
Used to prevent self-intersections


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


