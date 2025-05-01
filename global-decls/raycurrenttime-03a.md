---
layout: stdlib-reference
---

# RayCurrentTime

## Description

Returns the current time value for motion blur.



## Signature 

<pre>
<span class="code_keyword">float</span> <a href="raycurrenttime-03a.html">RayCurrentTime</a>();

</pre>

## Return value
Time value between 0 and 1 for motion blur interpolation

## Remarks
Available when motion blur extension is enabled


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `closesthit`, `anyhit`, `miss`, `intersection`.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in stages: `closesthit`, `anyhit`, `miss`, `intersection`.

#### spirv
Available in stages: `closesthit`, `anyhit`, `miss`, `intersection`.

Requires capabilities: `spvRayTracingMotionBlurNV`, `spvRayTracingKHR`.


