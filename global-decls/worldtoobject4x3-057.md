---
layout: stdlib-reference
---

# WorldToObject4x3

## Description

Returns the world-to-object transformation matrix (4x3).



## Signature 

<pre>
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, 4, 3&gt; <a href="/stdlib-reference/global-decls/worldtoobject4x3-057">WorldToObject4x3</a>();

</pre>

## Return value
4x3 matrix transforming from world to object space

## Remarks
Transposed version of WorldToObject3x4


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `intersection`, `closesthit`, `anyhit`.

#### glsl
Available in stages: `intersection`, `closesthit`, `anyhit`.

#### spirv
Available in stages: `intersection`, `closesthit`, `anyhit`.

Requires capability: `spvRayTracingKHR`.


