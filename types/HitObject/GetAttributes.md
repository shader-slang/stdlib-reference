---
layout: stdlib-reference
---

# HitObject\.GetAttributes

## Description

Returns the attributes of a hit. Valid if the hit object represents a hit or a miss.




## Signature 

<pre>
<a href="/stdlib-reference/types/HitObject/GetAttributes#typeparam-attr_t" class="code_type">attr_t</a> <a href="/stdlib-reference/types/HitObject/index" class="code_type">HitObject</a>.<a href="/stdlib-reference/types/HitObject/GetAttributes">GetAttributes</a>&lt;<a href="/stdlib-reference/types/HitObject/GetAttributes#typeparam-attr_t" class="code_type">attr_t</a>&gt;();

</pre>

## Generic Parameters

#### attr\_t {#typeparam-attr_t}

## Generic Parameters

#### attr\_t {#typeparam-attr_t}

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


