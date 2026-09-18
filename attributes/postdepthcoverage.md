---
layout: stdlib-reference
---

# attribute [postdepthcoverage]

## Description

Used on a fragment shader entry point so that its input <span class='code'>SV_Coverage</span> reports only the samples
that survived the early depth/stencil test, rather than every sample the fragment covers.

## Signature

<pre>
[<a href="postdepthcoverage.html">postdepthcoverage</a>]
</pre>

## Remarks

On SPIR-V this requires the <span class='code'>SampleMaskPostDepthCoverage</span> capability, declares
<span class='code'>OpExtension &quot;SPV_KHR_post_depth_coverage&quot;</span>, and enables the <span class='code'>PostDepthCoverage</span> execution mode.
On GLSL it requires <span class='code'>GL_ARB_post_depth_coverage</span> and emits <span class='code'>layout(post_depth_coverage)<span class="code_keyword">in</span>;</span>.
Post-depth coverage is only meaningful with early depth/stencil testing, so the compiler also
enables <span class='code'>EarlyFragmentTests</span> (which Vulkan requires to accompany <span class='code'>PostDepthCoverage</span>); pairing
this attribute with <span class='code'>[<a href="earlydepthstencil.html">earlydepthstencil</a>]</span> is therefore optional but harmless.
This attribute currently takes effect on SPIR-V/Vulkan and GLSL only. On any other
target (HLSL, Metal, WGSL, CUDA) no post-depth-coverage execution mode is emitted and the
compiler warns that the attribute has no effect, rather than silently changing <span class='code'>SV_Coverage</span>
semantics.


