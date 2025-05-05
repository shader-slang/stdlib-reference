---
layout: stdlib-reference
---

# attribute [ForceInline]

## Description

Perform inlining of the function at the call site during Slang compilation.

## Signature

<pre>
[<a href="forceinline-05.html">ForceInline</a>]
</pre>

## Remarks

By default Slang does not inline user defined functions, and will preserve the function call hierarchy in the generated code.
Use this attribute on a function to force the Slang compiler to inline the function before emitting target code.


