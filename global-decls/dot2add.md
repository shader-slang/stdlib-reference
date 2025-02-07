---
layout: stdlib-reference
---

# dot2add

## Description

Computes <span class='code'><a href="/stdlib-reference/global-decls/dot">dot</a>(<a href="/stdlib-reference/global-decls/dot#decl-x" class="code_param">x</a>, <a href="/stdlib-reference/global-decls/dot#decl-y" class="code_param">y</a>)+acc</span>.
May not produce infinities or NaNs for intermediate results that overflow the range of <span class='code'><span class="code_keyword">half</span></span>




## Signature 

<pre>
<span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/dot2add">dot2add</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, 2&gt; <a href="/stdlib-reference/global-decls/dot2add#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, 2&gt; <a href="/stdlib-reference/global-decls/dot2add#decl-y" class="code_param">y</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/dot2add#decl-acc" class="code_param">acc</a>);

</pre>

## Parameters

#### x  : [vector](/stdlib-reference/types/vector/index)\<half, 2\> {#decl-x}
#### y  : [vector](/stdlib-reference/types/vector/index)\<half, 2\> {#decl-y}
#### acc  : float {#decl-acc}

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


