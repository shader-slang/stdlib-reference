---
layout: stdlib-reference
---

# attribute [ForwardDerivativeOf]

## Description

<span class='code'>[<a href="/stdlib-reference/attributes/forwardderivativeof-07h">ForwardDerivativeOf</a>(fn)]</span> is the back-reference version of <span class='code'>[<a href="/stdlib-reference/attributes/forwardderivative-07">ForwardDerivative</a>(derivFn)]</span>

When used to decorate a function, the decorated function is considered the forward-derivative
implementation of the referenced function <span class='code'>fn</span>.

Apart from this, the semantics of the custom derivative are the same as for
<span class='code'>[<a href="/stdlib-reference/attributes/forwardderivative-07">ForwardDerivative</a>(derivFn)]</span>


## Signature

<pre>
[<a href="/stdlib-reference/attributes/forwardderivativeof-07h">ForwardDerivativeOf</a>(<a href="/stdlib-reference/attributes/forwardderivativeof-07h#decl-function" class="code_param">function</a>)]
</pre>

## Parameters

#### function {#decl-function}

