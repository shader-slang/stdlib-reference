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

This attributes causes Slang to emit <span class='code'>DerivativeGroupLinearNV</span> execution mode when producing SPIR-V. The attribute has no
effect on other targets.


