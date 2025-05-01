---
layout: stdlib-reference
---

# InstanceID

## Description

Returns the user-provided ID of the current instance.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="instanceid-089.html">InstanceID</a>();

</pre>

## Return value
Custom instance identifier set during acceleration structure build

## Remarks
Used for instance-specific shader behavior


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


