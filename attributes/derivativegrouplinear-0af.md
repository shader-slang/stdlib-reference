---
layout: stdlib-reference
---

# attribute [DerivativeGroupLinear]

## Description

Mark a compute shader entry point to allow it to use implicit derivatives.

## Signature

<pre>
[<a href="derivativegrouplinear-0af.html">DerivativeGroupLinear</a>]
</pre>

## Remarks

This attribute emits the <span class='code'>DerivativeGroupLinearKHR</span> execution mode for SPIR-V
and the <span class='code'>derivative_group_linearNV</span> layout qualifier for GLSL.
It has no effect on other targets.


