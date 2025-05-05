---
layout: stdlib-reference
---

# attribute [unroll]

## Description

A hint to the downstream compiler to unroll the loop until the specified number of iterations reached.
This attribute does not affect Slang compiler's behavior.
To unroll a loop in the Slang compiler before emitting target code, use the <span class='code'>[<a href="/stdlib-reference/attributes/forceunroll-05">ForceUnroll</a>]</span> attribute.


## Signature

<pre>
[<a href="/stdlib-reference/attributes/unroll">unroll</a>(<a href="/stdlib-reference/attributes/unroll#decl-count" class="code_param">count</a> : <span class="code_keyword">int</span>)]
</pre>

## Parameters

#### count  : int = 0 {#decl-count}

