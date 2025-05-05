---
layout: stdlib-reference
---

# dot4add\_i8packed

## Description

Treats <span class='code'><a href="dot4add_i8packed.html#decl-x" class="code_param">x</a></span> and <span class='code'><a href="dot4add_i8packed.html#decl-y" class="code_param">y</a></span> as 4-component vectors of <span class='code'>int8</span> and computes <span class='code'><a href="dot.html">dot</a>(<a href="dot.html#decl-x" class="code_param">x</a>, <a href="dot.html#decl-y" class="code_param">y</a>)+acc</span>




## Signature 

<pre>
<span class="code_keyword">int</span> <a href="dot4add_i8packed.html">dot4add_i8packed</a>(
    <span class="code_keyword">uint</span> <a href="dot4add_i8packed.html#decl-x" class="code_param">x</a>,
    <span class="code_keyword">uint</span> <a href="dot4add_i8packed.html#decl-y" class="code_param">y</a>,
    <span class="code_keyword">int</span> <a href="dot4add_i8packed.html#decl-acc" class="code_param">acc</a>);

</pre>

## Parameters

####  <a id="decl-x"></a>x  : uint
####  <a id="decl-y"></a>y  : uint
####  <a id="decl-acc"></a>acc  : int

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `SPV_KHR_non_semantic_info`, `SPV_GOOGLE_user_type`, `spvDerivativeControl`, `spvImageQuery`, `spvImageGatherExtended`, `spvSparseResidency`, `spvMinLod`, `spvFragmentBarycentricKHR`, `spvFragmentFullyCoveredEXT`, `spvGroupNonUniformBallot`, `spvGroupNonUniformShuffle`, `spvGroupNonUniformArithmetic`, `spvGroupNonUniformQuad`, `spvGroupNonUniformVote`, `spvRayTracingPositionFetchKHR`, `spvShaderNonUniformEXT`.


