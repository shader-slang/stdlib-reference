---
layout: stdlib-reference
---

# HitObject\.GetWorldToObject4x3

## Description

Returns the 4x3 world-to-object transform matrix (transposed). Valid if the hit object represents a hit.
DXR 1.3 only.




## Signature 

<pre>
<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, 4, 3&gt; <a href="index.html" class="code_type">HitObject</a>.<a href="getworldtoobject4x3-038a.html">GetWorldToObject4x3</a>();

</pre>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `ser_hlsl_native`.


