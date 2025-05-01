---
layout: stdlib-reference
---

# attribute [unroll]

## Description

A hint to the downstream compiler to unroll the loop until the specified number of iterations reached.
This attribute does not affect Slang compiler's behavior.
To unroll a loop in the Slang compiler before emitting target code, use the <span class='code'>[<a href="forceunroll-05.html">ForceUnroll</a>]</span> attribute.


## Signature

<pre>
[<a href="unroll.html">unroll</a>(<a href="unroll.html#decl-count" class="code_param">count</a> : <span class="code_keyword">int</span>)]
</pre>

## Parameters

####  <a id="decl-count"></a>count  : int = 0

