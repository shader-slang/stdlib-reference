---
layout: stdlib-reference
---

# ObjectRayDirection

## Description

Returns the ray direction in object space of the current instance.



## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="objectraydirection-069.html">ObjectRayDirection</a>();

</pre>

## Return value
Object-space direction vector of the ray

## Remarks
Transformed by the inverse of the instance transform


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `intersection`, `closesthit`, `anyhit`.

#### glsl
Available in stages: `intersection`, `closesthit`, `anyhit`.

#### cuda
Available in stages: `intersection`, `closesthit`, `anyhit`.

#### spirv
Available in stages: `intersection`, `closesthit`, `anyhit`.

Requires capability: `spvRayTracingKHR`.


