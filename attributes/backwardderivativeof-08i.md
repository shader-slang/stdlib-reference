---
layout: stdlib-reference
---

# attribute [BackwardDerivativeOf]

## Description

<span class='code'>[<a href="/stdlib-reference/attributes/backwardderivativeof-08i">BackwardDerivativeOf</a>(fn)]</span> is the back-reference version of <span class='code'>[<a href="/stdlib-reference/attributes/backwardderivative-08">BackwardDerivative</a>(derivFn)]</span>

When used to decorate a function, the decorated function is considered the backward-derivative
implementation of the referenced function <span class='code'>fn</span>.

Apart from this, the semantics of the custom derivative are the same as for
<span class='code'>[<a href="/stdlib-reference/attributes/backwardderivative-08">BackwardDerivative</a>(derivFn)]</span>


## Signature

<pre>
[<a href="/stdlib-reference/attributes/backwardderivativeof-08i">BackwardDerivativeOf</a>(<a href="/stdlib-reference/attributes/backwardderivativeof-08i#decl-function" class="code_param">function</a>)]
</pre>

## Parameters

#### function {#decl-function}

