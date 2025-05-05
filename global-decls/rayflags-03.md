---
layout: stdlib-reference
---

# RayFlags

## Description

Returns the flags used when tracing the current ray.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="rayflags-03.html">RayFlags</a>();

</pre>

## Return value
Combination of RAY_FLAG values used for this ray

## Remarks
Allows shaders to modify behavior based on ray trace flags


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `closesthit`, `anyhit`, `miss`, `intersection`.

#### glsl
Available in stages: `closesthit`, `anyhit`, `miss`, `intersection`.

#### cuda
Available in stages: `closesthit`, `anyhit`, `miss`, `intersection`.

#### spirv
Available in stages: `closesthit`, `anyhit`, `miss`, `intersection`.

Requires capability: `spvRayTracingKHR`.


