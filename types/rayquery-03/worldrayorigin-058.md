---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.WorldRayOrigin

## Description

Gets the world-space origin of the ray.



## Signature 

<pre>
<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="index.html" class="code_type">RayQuery</a>&lt;<a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="worldrayorigin-058.html">WorldRayOrigin</a>();

</pre>

## Return value
Starting point of the ray in world space


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


