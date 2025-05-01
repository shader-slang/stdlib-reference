---
layout: stdlib-reference
---

# PrimitiveIndex

## Description

Returns the index of the current primitive within its geometry.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="primitiveindex-09.html">PrimitiveIndex</a>();

</pre>

## Return value
Zero-based index of the intersected primitive

## Remarks
Available in any-hit, closest-hit, and intersection shaders


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


