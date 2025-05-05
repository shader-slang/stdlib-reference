---
layout: stdlib-reference
---

# attribute [BackwardDifferentiable]

## Description

Marks a function as being differentiable for backward-mode auto-diff.
Note that in the current implementation, this implies that the method
is also forward differentiable.

This attribute is equivalent to using <span class='code'>[<a href="/stdlib-reference/attributes/differentiable-0">Differentiable</a>]</span>


## Signature

<pre>
[<a href="/stdlib-reference/attributes/backwarddifferentiable-08">BackwardDifferentiable</a>(<a href="/stdlib-reference/attributes/backwarddifferentiable-08#decl-order" class="code_param">order</a> : <span class="code_keyword">int</span>)]
</pre>

## Parameters

#### order  : int = 0 {#decl-order}

