---
layout: stdlib-reference
---

# attribute [ForwardDifferentiable]

## Description

Marks a function as being differentiable in forward-mode.

See the user guide [section on forward-mode differentiation](https://shader-slang.org/slang/user-guide/autodiff.html#invoking-auto-diff-in-slang) for more

If used on a function that has a definition (i.e. a function body),Slang will use
automatic-differentiation to generate a forward-mode derivative of this function,
unless an implementation is provided by the user via <span class='code'>[<a href="forwardderivative-07.html">ForwardDerivative</a>(fn)]</span>

If used on an interface requirement, the signature of the requirement is modified to
include forward-differentiability. Any satisfying method must also be forward-differentiable,
or provide an appropriate derivative implementation.
See the user guide [section on auto-diff for interfaces](https://shader-slang.org/slang/user-guide/autodiff.html##using-auto-diff-with-interface-requirements-and-interface-types) for more


## Signature

<pre>
[<a href="forwarddifferentiable-07.html">ForwardDifferentiable</a>]
</pre>

