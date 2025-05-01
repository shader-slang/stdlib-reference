---
layout: stdlib-reference
---

# DispatchRaysDimensions

## Description

Returns the dimensions of the ray dispatch.



## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="dispatchraysdimensions-08c.html">DispatchRaysDimensions</a>();

</pre>

## Return value
3D dimensions of the ray dispatch grid

## Remarks
Available in all ray tracing shader stages


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `intersection`, `raygen`, `miss`, `callable`, `closesthit`, `anyhit`.

#### glsl
Available in stages: `intersection`, `raygen`, `miss`, `callable`, `closesthit`, `anyhit`.

#### cuda
Available in stages: `intersection`, `raygen`, `miss`, `callable`, `closesthit`, `anyhit`.

#### spirv
Available in stages: `intersection`, `raygen`, `miss`, `callable`, `closesthit`, `anyhit`.

Requires capability: `spvRayTracingKHR`.


