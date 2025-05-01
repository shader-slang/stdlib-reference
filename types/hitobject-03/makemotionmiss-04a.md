---
layout: stdlib-reference
---

# HitObject\.MakeMotionMiss

## Description

See MakeMiss but handles Motion
Currently only supported on VK




## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">HitObject</a> <a href="index.html" class="code_type">HitObject</a>.<a href="makemotionmiss-04a.html">MakeMotionMiss</a>(
    <span class="code_keyword">uint</span> <a href="makemotionmiss-04a.html#decl-MissShaderIndex" class="code_param">MissShaderIndex</a>,
    <a href="../raydesc-03/index.html" class="code_type">RayDesc</a> <a href="makemotionmiss-04a.html#decl-Ray" class="code_param">Ray</a>,
    <span class="code_keyword">float</span> <a href="makemotionmiss-04a.html#decl-CurrentTime" class="code_param">CurrentTime</a>);

</pre>

## Parameters

####  <a id="decl-MissShaderIndex"></a>MissShaderIndex  : uint
####  <a id="decl-Ray"></a>Ray  : [RayDesc](../raydesc-03/index)
####  <a id="decl-CurrentTime"></a>CurrentTime  : float

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingMotionBlurNV`, `spvRayTracingKHR`, `spvShaderInvocationReorderNV`.


