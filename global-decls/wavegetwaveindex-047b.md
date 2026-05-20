---
layout: stdlib-reference
---

# WaveGetWaveIndex

## Description

Returns the index of the current wave (subgroup) within the workgroup.
Equivalent to GLSL gl_SubgroupID / Metal simdgroup_index_in_threadgroup.




## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="wavegetwaveindex-047b.html">WaveGetWaveIndex</a>();

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

Requires capability: `spvGroupNonUniform`.


