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

This attributes causes Slang to emit <span class='code'>DerivativeGroupQuadsNV</span> execution mode when producing SPIR-V. The attribute has no
effect on other targets.


