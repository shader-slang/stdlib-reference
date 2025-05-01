---
layout: stdlib-reference
---

# attribute [BackwardDerivative]

## Description

<span class='code'>[<a href="backwardderivative-08.html">BackwardDerivative</a>(bwdFn)]</span> attribute can be used to provide a forward-mode
derivative implementation.
Invoking <span class='code'>bwd_diff(decoratedFn)</span> will place a call to <span class='code'>bwdFn</span> instead of synthesizing
a derivative implementation.
The same behavior holds if <span class='code'>decoratedFn</span> is used in a differentiable context.


## Signature

<pre>
[<a href="backwardderivative-08.html">BackwardDerivative</a>(<a href="backwardderivative-08.html#decl-function" class="code_param">function</a>)]
</pre>

## Parameters

####  <a id="decl-function"></a>function

## Remarks


The signature of <span class='code'>bwdFn</span> must match the expected signature of <span class='code'>bwd_diff(decoratedFn)</span>.
See the [reference](https://shader-slang.org/slang/user-guide/autodiff.html#bwd_difff--slang_function---slang_function)
for <span class='code'>bwd_diff</span> for a full list of signature rules.

See the [user guide's section](https://shader-slang.org/slang/user-guide/autodiff.html#user-defined-derivative-functions) on custom derivatives for an introduction to custom
derivatives.

This attribute can be used on generic functions, member functions and accessors.
For generic functions, the generic signatures (parameters + constraints) of both functions
must match exactly.
Overloaded functions are also supported. The compiler will attempt to resolve the overload
from the expected derivative signature. If it is unable to do so, it will issue a
diagnostic error.

The decorated function will be considered differentiable.
There is no need for a <span class='code'>[<a href="differentiable-0.html">Differentiable</a>]</span> tag.

Example:
```csharp
[BackwardDerivative(foo_bwd)]
T foo<T : IFloat, P : IArray<T>>(T x, P xarr) { /* ... */ }

void foo_bwd<T : IFloat, P : IArray<T>>( // Use the same generic signature for a match.
    inout DifferentialPair<T> x, P dp_xarr, T.Differential dresult) { /* ... */ }
```

For member functions, or functions nested inside namespaces, <span class='code'>bwdFn</span> may need to be a fully qualified
name.


