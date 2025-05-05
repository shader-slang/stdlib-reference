---
layout: stdlib-reference
---

# attribute [Differentiable]

## Description

Marks a function as being differentiable for both
forward and backward mode auto-diff.

This attribute is equivalent to using <span class='code'>[<a href="/stdlib-reference/attributes/differentiable-0">Differentiable</a>]</span>

See the user guide [section on auto-diff invocation](https://shader-slang.org/slang/user-guide/autodiff.html#invoking-auto-diff-in-slang) for more.

If used on a function that has a definition (i.e. a function body), Slang will use
automatic-differentiation to generate the derivative implementations for this function,
unless an implementation is provided by the user via <span class='code'>[<a href="/stdlib-reference/attributes/forwardderivative-07">ForwardDerivative</a>(fn)]</span> and/or <span class='code'>[<a href="/stdlib-reference/attributes/backwardderivative-08">BackwardDerivative</a>(fn)]</span>

If used on an interface requirement, the signature of the requirement is modified to
include differentiability. Any satisfying method must also be differentiable,
or provide appropriate derivative implementations.
See the user guide [section on auto-diff for interfaces](https://shader-slang.org/slang/user-guide/autodiff.html##using-auto-diff-with-interface-requirements-and-interface-types) for more


## Signature

<pre>
[<a href="/stdlib-reference/attributes/differentiable-0">Differentiable</a>(<a href="/stdlib-reference/attributes/differentiable-0#decl-order" class="code_param">order</a> : <span class="code_keyword">int</span>)]
</pre>

## Parameters

#### order  : int = 0 {#decl-order}

