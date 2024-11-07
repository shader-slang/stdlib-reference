---
layout: stdlib-reference
---

# ObjectRayOrigin

## Description



Returns the ray origin in object space of the current instance.

## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="/stdlib-reference/global-decls/objectrayorigin-069">ObjectRayOrigin</a>();

</pre>

## Return value
Object-space position where the ray originated

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


