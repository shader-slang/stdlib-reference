---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.Abort

## Description

Terminate ray traversal immediately.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RayQuery</a>&lt;<a href="index.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="abort-0.html">Abort</a>();

</pre>

## Remarks
Causes subsequent Proceed() calls to return false


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


