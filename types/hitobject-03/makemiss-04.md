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
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/hitobject-03/index" class="code_type">HitObject</a> <a href="/stdlib-reference/types/hitobject-03/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/hitobject-03/makemiss-04">MakeMiss</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/hitobject-03/makemiss-04#decl-MissShaderIndex" class="code_param">MissShaderIndex</a>,
    <a href="/stdlib-reference/types/raydesc-03/index" class="code_type">RayDesc</a> <a href="/stdlib-reference/types/hitobject-03/makemiss-04#decl-Ray" class="code_param">Ray</a>);

</pre>

## Parameters

#### MissShaderIndex  : uint {#decl-MissShaderIndex}
#### Ray  : [RayDesc](/stdlib-reference/types/raydesc-03/index) {#decl-Ray}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in stages: `raygen`, `closesthit`, `miss`.

#### spirv
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capabilities: `spvRayTracingKHR`, `spvShaderInvocationReorderNV`.


