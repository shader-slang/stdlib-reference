---
layout: stdlib-reference
---

# HitObject\.MakeMiss

## Description

Creates a HitObject representing a miss based on values explicitly passed as arguments, without
tracing a ray. The provided shader table index must reference a valid miss record in the shader
table.




## Signature 

<pre>
/// Requires Capability Set 1:
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">HitObject</a> <a href="index.html" class="code_type">HitObject</a>.<a href="makemiss-04.html">MakeMiss</a>(
    <span class="code_keyword">uint</span> <a href="makemiss-04.html#decl-MissShaderIndex" class="code_param">MissShaderIndex</a>,
    <a href="../raydesc-03/index.html" class="code_type">RayDesc</a> <a href="makemiss-04.html#decl-Ray" class="code_param">Ray</a>);

/// Requires Capability Set 2:
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">HitObject</a> <a href="index.html" class="code_type">HitObject</a>.<a href="makemiss-04.html">MakeMiss</a>(
    <span class="code_keyword">uint</span> <a href="makemiss-04.html#decl-RayFlags" class="code_param">RayFlags</a>,
    <span class="code_keyword">uint</span> <a href="makemiss-04.html#decl-MissShaderIndex" class="code_param">MissShaderIndex</a>,
    <a href="../raydesc-03/index.html" class="code_type">RayDesc</a> <a href="makemiss-04.html#decl-Ray" class="code_param">Ray</a>);

</pre>

## Parameters

####  <a id="decl-MissShaderIndex"></a>MissShaderIndex  : uint
####  <a id="decl-Ray"></a>Ray  : [RayDesc](../raydesc-03/index.html)
####  <a id="decl-RayFlags"></a>RayFlags  : uint

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `hlsl_nvapi`, `ser_hlsl_native`.
#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### cuda
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingKHR`, `spvShaderInvocationReorderNV`, `spvShaderInvocationReorderEXT`.

### Capability Set 2

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `ser_hlsl_native`.
#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingKHR`, `spvShaderInvocationReorderNV`, `spvShaderInvocationReorderEXT`.
#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.



