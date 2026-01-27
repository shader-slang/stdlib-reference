---
layout: stdlib-reference
---

# HitObject\.GetWorldToObject3x4

## Description

Returns the 3x4 world-to-object transform matrix. Valid if the hit object represents a hit.
DXR 1.3 only.




## Signature 

<pre>
<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, 3, 4&gt; <a href="index.html" class="code_type">HitObject</a>.<a href="getworldtoobject3x4-038a.html">GetWorldToObject3x4</a>();

</pre>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `ser_hlsl_native`.


