---
layout: stdlib-reference
---

# DispatchRaysIndex

## Description

Returns the current ray dispatch coordinates.



## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="dispatchraysindex-08c.html">DispatchRaysIndex</a>();

</pre>

## Return value
3D index of the current ray being processed

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


