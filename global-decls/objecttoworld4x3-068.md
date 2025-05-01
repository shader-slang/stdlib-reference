---
layout: stdlib-reference
---

# ObjectToWorld4x3

## Description

Returns the object-to-world transformation matrix (4x3).



## Signature 

<pre>
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, 4, 3&gt; <a href="objecttoworld4x3-068.html">ObjectToWorld4x3</a>();

</pre>

## Return value
4x3 matrix transforming from object to world space

## Remarks
Transposed version of ObjectToWorld3x4


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `intersection`, `closesthit`, `anyhit`.

#### glsl
Available in stages: `intersection`, `closesthit`, `anyhit`.

#### spirv
Available in stages: `intersection`, `closesthit`, `anyhit`.

Requires capability: `spvRayTracingKHR`.


