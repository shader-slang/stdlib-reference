---
layout: stdlib-reference
---

# WorldToObject3x4

## Description

Returns the world-to-object transformation matrix (3x4).



## Signature 

<pre>
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, 3, 4&gt; <a href="worldtoobject3x4-057.html">WorldToObject3x4</a>();

</pre>

## Return value
3x4 matrix transforming from world to object space

## Remarks
Inverse of the object-to-world transform


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `intersection`, `closesthit`, `anyhit`.

#### glsl
Available in stages: `intersection`, `closesthit`, `anyhit`.

#### spirv
Available in stages: `intersection`, `closesthit`, `anyhit`.

Requires capability: `spvRayTracingKHR`.


