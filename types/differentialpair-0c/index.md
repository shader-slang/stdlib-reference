---
layout: stdlib-reference
---

# struct DifferentialPair\<T\>

*Conforms to:* [IDifferentiable](/stdlib-reference/interfaces/idifferentiable-01/index)

## Description

<span class='code'><a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/differentialpair-0c/index#typeparam-T" class="code_type">T</a>&gt;</span> is a built-in type that carries both the original and derivative value of a term.
It is defined as follows:
```csharp
struct DifferentialPair<T : IDifferentiable> : IDifferentiable
{
    typealias Differential = DifferentialPair<T.Differential>;
    property T p {get;}
    property T.Differential d {get;}
    static Differential dzero();
    static Differential dadd(Differential a, Differential b);
}
```

Differential pairs can be created via constructor or through the <span class='code'><a href="/stdlib-reference/global-decls/diffpair-4">diffPair</a>()</span> operation
```csharp
DifferentialPair<float> dpa = DifferentialPair<float>(1.0f, 2.0f);
DifferentialPair<float> dpa = diffPair(1.0f, 2.0f);
```
Note that derivative pairs are used to pass derivatives into and out of auto-diff functions.
See documentation on <span class='code'>fwd_diff</span> and <span class='code'>bwd_diff</span> operators for more information.


## Generic Parameters

#### T: [IDifferentiable](/stdlib-reference/interfaces/idifferentiable-01/index) {#typeparam-T}

## Properties

#### [d](/stdlib-reference/types/differentialpair-0c/d) {#decl-d}
#### [p](/stdlib-reference/types/differentialpair-0c/p) {#decl-p}
#### [v](/stdlib-reference/types/differentialpair-0c/v) {#decl-v}

## Methods

* [init](/stdlib-reference/types/differentialpair-0c/init)
* [getDifferential](/stdlib-reference/types/differentialpair-0c/getdifferential-3)
* [getPrimal](/stdlib-reference/types/differentialpair-0c/getprimal-3)
* [dzero](/stdlib-reference/types/differentialpair-0c/dzero)
* [dadd](/stdlib-reference/types/differentialpair-0c/dadd)
* [dmul](/stdlib-reference/types/differentialpair-0c/dmul)

