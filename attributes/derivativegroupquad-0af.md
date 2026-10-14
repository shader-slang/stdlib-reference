---
layout: stdlib-reference
---

# attribute [DerivativeGroupQuad]

## Description

Mark a compute shader entry point to allow it to use implicit derivatives.

## Signature

<pre>
[<a href="derivativegroupquad-0af.html">DerivativeGroupQuad</a>]
</pre>

## Remarks

This attribute emits the <span class='code'>DerivativeGroupQuadsKHR</span> execution mode for SPIR-V
and the <span class='code'>derivative_group_quadsNV</span> layout qualifier for GLSL.
It has no effect on other targets.


