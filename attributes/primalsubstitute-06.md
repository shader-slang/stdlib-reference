---
layout: stdlib-reference
---

# attribute [PrimalSubstitute]

## Description

<span class='code'>[<a href="/stdlib-reference/attributes/primalsubstitute-06">PrimalSubstitute</a>(substFn)]</span> attribute denotes a substitute <span class='code'>substFn</span> that should be used for
differentiation instead of the original function. This serves as a sort of 'reference' implementation
where the original function cannot be differentiated (for whatever reason).

See the auto-diff user guide for more: https://shader-slang.org/slang/user-guide/autodiff.html#primal-substitute-functions


## Signature

<pre>
[<a href="/stdlib-reference/attributes/primalsubstitute-06">PrimalSubstitute</a>(<a href="/stdlib-reference/attributes/primalsubstitute-06#decl-function" class="code_param">function</a>)]
</pre>

## Parameters

#### function {#decl-function}

## Remarks


<span class='code'>substFn</span> must have a function definition (i.e. a body).

In case that a function has both custom defined derivatives and a differentiable
primal substitute, the primal substitute overrides the custom defined derivative
on the original function. All calls to the original function will be translated
into calls to the primal substitute first, and differentiation step follows after.
This means that the derivatives of the primal substitute function will be used instead
of the derivatives defined on the original function.

This attribute can be used on generic functions and member functions.
For generic functions, the generic signatures (parameters + constraints) of both functions
must match exactly.
For member functions, or functions nested inside namespaces, <span class='code'>substFn</span> should be a fully qualified name.
<span class='code'>substFn</span>
Example:
```csharp
namespace A
{
    float foo(float x) { /* ... */ }
}
[PrimalSubstitute(A.foo)] // Use namespace and/or parent struct names
float bar(float x) { /* ... */ }
```


## Example

The following example shows in more detail on how primal substitute affects derivative computation.
```csharp
[PrimalSubstitute(myFuncSubst)]
float myFunc(float x) { return x*x; }

[Differentiable]
float myFuncSubst(float x) { return x*x*x; }

[Differentiable]
float caller(float x) { return myFunc(x); }

let a = caller(4.0); /// a == 16.0 (calling myFunc)
let b = fwd_diff(caller)(diffPair(4.0, 1.0)).p; /// b == 64.0 (calling myFuncSubst)
let c = fwd_diff(caller)(diffPair(4.0, 1.0)).d; /// c == 48.0 (calling derivative of myFuncSubst)
```

