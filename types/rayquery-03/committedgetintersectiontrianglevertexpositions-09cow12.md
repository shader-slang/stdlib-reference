---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.CommittedGetIntersectionTriangleVertexPositions

## Description

Gets the triangle vertex positions for an intersection.



## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt;[3] <a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a>&lt;<a href="/stdlib-reference/types/rayquery-03/index#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="/stdlib-reference/types/rayquery-03/committedgetintersectiontrianglevertexpositions-09cow12">CommittedGetIntersectionTriangleVertexPositions</a>();

</pre>

## Return value
Array of three vertex positions in world space

## Remarks
Requires ray query position fetch extension


## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryPositionFetchKHR`.


