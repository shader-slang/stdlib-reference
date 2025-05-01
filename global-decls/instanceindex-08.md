---
layout: stdlib-reference
---

# InstanceIndex

## Description

Returns the index of the current instance in the acceleration structure.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="instanceindex-08.html">InstanceIndex</a>();

</pre>

## Return value
Zero-based index of the current instance

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


