---
layout: stdlib-reference
---

# dot4add\_i8packed

## Description

Treats <span class='code'><a href="/stdlib-reference/global-decls/dot4add_i8packed#decl-x" class="code_param">x</a></span> and <span class='code'><a href="/stdlib-reference/global-decls/dot4add_i8packed#decl-y" class="code_param">y</a></span> as 4-component vectors of <span class='code'>int8</span> and computes <span class='code'><a href="/stdlib-reference/global-decls/dot">dot</a>(<a href="/stdlib-reference/global-decls/dot#decl-x" class="code_param">x</a>, <a href="/stdlib-reference/global-decls/dot#decl-y" class="code_param">y</a>)+acc</span>




## Signature 

<pre>
<span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/dot4add_i8packed">dot4add_i8packed</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/dot4add_i8packed#decl-x" class="code_param">x</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/dot4add_i8packed#decl-y" class="code_param">y</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/dot4add_i8packed#decl-acc" class="code_param">acc</a>);

</pre>

## Parameters

#### x  : uint {#decl-x}
#### y  : uint {#decl-y}
#### acc  : int {#decl-acc}

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


