---
layout: stdlib-reference
---

# WaveGetLaneEqMask

## Description

Returns a mask with only the current lane's bit set.
Equivalent to GLSL gl_SubgroupEqMask.




## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavegetlaneeqmask-047bd.html">WaveGetLaneEqMask</a>();

</pre>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformBallot`.


