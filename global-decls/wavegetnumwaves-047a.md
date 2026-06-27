---
layout: stdlib-reference
---

# WaveGetNumWaves

## Description

Returns the number of waves (subgroups) in the current workgroup.
Equivalent to GLSL gl_NumSubgroups.

On GLSL and SPIR-V this lowers to gl_NumSubgroups / BuiltIn NumSubgroups,
which are restricted to compute-class execution models (compute, mesh,
amplification); using it from any other stage is a capability error.




## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="wavegetnumwaves-047a.html">WaveGetNumWaves</a>();

</pre>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in stages: `amplification`, `mesh`, `compute`.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in stages: `amplification`, `mesh`, `compute`.

Requires capabilities: `spvGroupNonUniform`, `spvMeshShadingEXT`.


