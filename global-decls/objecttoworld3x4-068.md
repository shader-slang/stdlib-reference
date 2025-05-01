---
layout: stdlib-reference
---

# ObjectToWorld3x4

## Description

Returns the object-to-world transformation matrix (3x4).



## Signature 

<pre>
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, 3, 4&gt; <a href="objecttoworld3x4-068.html">ObjectToWorld3x4</a>();

</pre>

## Return value
3x4 matrix transforming from object to world space

## Remarks
Includes position and orientation of the current instance


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `intersection`, `closesthit`, `anyhit`.

#### glsl
Available in stages: `intersection`, `closesthit`, `anyhit`.

#### spirv
Available in stages: `intersection`, `closesthit`, `anyhit`.

Requires capability: `spvRayTracingKHR`.


