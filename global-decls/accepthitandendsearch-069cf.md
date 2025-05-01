---
layout: stdlib-reference
---

# AcceptHitAndEndSearch

## Description

Accepts the current intersection and terminates further traversal.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="accepthitandendsearch-069cf.html">AcceptHitAndEndSearch</a>();

</pre>

## Remarks
Used in any-hit shaders to immediately accept an intersection


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `anyhit` stage only.

#### glsl
Available in `anyhit` stage only.

#### cuda
Available in `anyhit` stage only.

#### spirv
Available in `anyhit` stage only.

Requires capability: `spvRayTracingKHR`.


