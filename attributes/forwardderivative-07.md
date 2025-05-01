---
layout: stdlib-reference
---

# attribute [ForwardDerivative]

## Description

<span class='code'>[<a href="forwardderivative-07.html">ForwardDerivative</a>(fwdFn)]</span> attribute can be used to provide a forward-mode
derivative implementation.
Invoking <span class='code'>fwd_diff(decoratedFn)</span> will place a call to <span class='code'>fwdFn</span> instead of synthesizing
a derivative implementation.
The same behavior holds if <span class='code'>decoratedFn</span> is used in a differentiable context.



## Signature

<pre>
[<a href="forwardderivative-07.html">ForwardDerivative</a>(<a href="forwardderivative-07.html#decl-function" class="code_param">function</a>)]
</pre>

## Parameters

####  <a id="decl-function"></a>function

## Remarks


- The signature of <span class='code'>fwdFn</span> must match the expected signature of <span class='code'>fwd_diff(decoratedFn)</span>.
- See the [reference](https://shader-slang.org/slang/user-guide/autodiff.html#fwd_difff--slang_function---slang_function) for <span class='code'>fwd_diff</span> for a full list of signature rules.
- See the [user guide's section](https://shader-slang.org/slang/user-guide/autodiff.html#user-defined-derivative-functions) on custom derivatives for an introduction to this approach.

- This attribute can be used on generic functions, member functions and accessors.
- For generic functions, the generic signatures (parameters + constraints) of both functions must match exactly.

- The decorated function will be considered forward-differentiable. There is no need for a <span class='code'>[<a href="differentiable-0.html">Differentiable</a>]</span> tag.
If the <span class='code'>[<a href="differentiable-0.html">Differentiable</a>]</span> tag is present,
and no custom backward derivative is specified with <span class='code'>[<a href="backwardderivative-08.html">BackwardDerivative</a>]</span>, then the
Slang will use auto-diff to generate the backward=mode derivative, but will use the provided
derivative for forward-mode.

Example:
```csharp
[ForwardDerivative(foo_fwd)]
T foo<T : IFloat, P : IArray<T>>(T x, P xarr) { /* ... */ }

DifferentialPair<T> foo_fwd<T : IFloat, P : IArray<T>>( // Use the same generic signature for a match.
    DifferentialPair<T> x, P dp_xarr) { /* ... */ }
```

For member functions, or functions nested inside namespaces, <span class='code'>fwdFn</span> may need a fully qualified name.

Example:
```csharp
namespace A
{
    DifferentialPair<float> foo(DifferentialPair<float> x) { /* ... */ }
}
[ForwardDerivative(A.foo)] // Use namespace and/or parent struct names
float bar(float x) { /* ... */ }
```


