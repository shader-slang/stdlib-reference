---
layout: stdlib-reference
---

# HitKind

## Description



Returns the type of intersection that was found.

## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/hitkind-03">HitKind</a>();

</pre>

## Return value
Hit kind value (HIT_KIND_TRIANGLE_FRONT_FACE, HIT_KIND_TRIANGLE_BACK_FACE, or custom value)

## Remarks
Available in any-hit and closest-hit shaders


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `closesthit`, `anyhit`.

#### glsl
Available in stages: `closesthit`, `anyhit`.

#### cuda
Available in stages: `closesthit`, `anyhit`.

#### spirv
Available in stages: `closesthit`, `anyhit`.

Requires capability: `spvRayTracingKHR`.


