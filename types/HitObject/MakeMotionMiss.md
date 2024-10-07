---
layout: stdlib-reference
---

# HitObject\.MakeMotionMiss

## Description

See MakeMiss but handles Motion
Currently only supported on VK




## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/HitObject/MakeMotionMiss">MakeMotionMiss</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/HitObject/MakeMotionMiss#decl-MissShaderIndex" class="code_param">MissShaderIndex</a>,
    <a href="/stdlib-reference/types/RayDesc/index" class="code_type">RayDesc</a> <a href="/stdlib-reference/types/HitObject/MakeMotionMiss#decl-Ray" class="code_param">Ray</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/HitObject/MakeMotionMiss#decl-CurrentTime" class="code_param">CurrentTime</a>);

</pre>

## Parameters

#### MissShaderIndex  : uint {#decl-MissShaderIndex}
#### Ray  : [RayDesc](/stdlib-reference/types/RayDesc/index) {#decl-Ray}
#### CurrentTime  : float {#decl-CurrentTime}

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


