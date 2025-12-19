---
layout: stdlib-reference
---

# WaveGetLaneLtMask

## Description

Returns a mask with bits set for lanes < current lane.
Equivalent to GLSL gl_SubgroupLtMask.




## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavegetlaneltmask-047bd.html">WaveGetLaneLtMask</a>();

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


