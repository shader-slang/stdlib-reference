---
layout: stdlib-reference
---

# HitObject\.GetAttributes

## Description

Returns the attributes of a hit. Valid if the hit object represents a hit or a miss.




## Signature 

<pre>
<a href="getattributes-03.html#typeparam-attr_t" class="code_type">attr_t</a> <a href="index.html" class="code_type">HitObject</a>.<a href="getattributes-03.html">GetAttributes</a>&lt;<a href="getattributes-03.html#typeparam-attr_t" class="code_type">attr_t</a>&gt;();

</pre>

## Generic Parameters

####  <a id="typeparam-attr_t"></a>attr\_t

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


