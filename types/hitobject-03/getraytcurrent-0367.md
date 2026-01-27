---
layout: stdlib-reference
---

# HitObject\.GetRayTCurrent

## Description

Returns the parametric ending point (T value at hit/miss). Valid if the hit object represents a hit or a miss.
DXR 1.3 only.




## Signature 

<pre>
<span class="code_keyword">float</span> <a href="index.html" class="code_type">HitObject</a>.<a href="getraytcurrent-0367.html">GetRayTCurrent</a>();

</pre>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `raygen`, `closesthit`, `miss`.

Requires capability: `ser_hlsl_native`.


