---
layout: stdlib-reference
---

# attribute [ForwardDerivativeOf]

## Description

<span class='code'>[<a href="forwardderivativeof-07h.html">ForwardDerivativeOf</a>(fn)]</span> is the back-reference version of <span class='code'>[<a href="forwardderivative-07.html">ForwardDerivative</a>(derivFn)]</span>

When used to decorate a function, the decorated function is considered the forward-derivative
implementation of the referenced function <span class='code'>fn</span>.

Apart from this, the semantics of the custom derivative are the same as for
<span class='code'>[<a href="forwardderivative-07.html">ForwardDerivative</a>(derivFn)]</span>


## Signature

<pre>
[<a href="forwardderivativeof-07h.html">ForwardDerivativeOf</a>(<a href="forwardderivativeof-07h.html#decl-function" class="code_param">function</a>)]
</pre>

## Parameters

####  <a id="decl-function"></a>function

