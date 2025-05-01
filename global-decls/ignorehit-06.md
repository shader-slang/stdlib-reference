---
layout: stdlib-reference
---

# IgnoreHit

## Description

Ignores the current intersection and continues traversal.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="ignorehit-06.html">IgnoreHit</a>();

</pre>

## Remarks
Used in any-hit shaders to reject potential intersections


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


