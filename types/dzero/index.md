---
layout: stdlib-reference
---

# extension DifferentialPair\<T\>\.dzero : IForwardDifferentiable\<DifferentialPair\<T\>\.dzero\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DifferentialPair](../differentialpair-0c/index.html)\<[T](../differentialpair-0c/index.html#typeparam-T)\>\.[dzero](../differentialpair-0c/dzero.html)\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DifferentialPair](../differentialpair-0c/index.html)\<[T](../differentialpair-0c/index.html#typeparam-T)\>\.[dzero](../differentialpair-0c/dzero.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DifferentialPair](../differentialpair-0c/index.html)\<[T](../differentialpair-0c/index.html#typeparam-T)\>\.[dzero](../differentialpair-0c/dzero.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[dzero](../vector/dzero.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[dzero](../vector/dzero.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[dzero](../matrix/dzero.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[dzero](../matrix/dzero.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[NullDifferential](../nulldifferential-04/index.html)\.[dzero](../nulldifferential-04/dzero.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[NullDifferential](../nulldifferential-04/index.html)\.[dzero](../nulldifferential-04/dzero.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<T \[ N \]\.dzero\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<T \[ N \]\.dzero\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[Optional](../optional-0/index.html)\<[T](../optional-0/index.html#typeparam-T)\>\.[dzero](../optional-0/dzero.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[Optional](../optional-0/index.html)\<[T](../optional-0/index.html#typeparam-T)\>\.[dzero](../optional-0/dzero.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[Tuple](../tuple-0/index.html)\<[T](../tuple-0/index.html#typeparam-T)\>\.[dzero](../tuple-0/dzero.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[Tuple](../tuple-0/index.html)\<[T](../tuple-0/index.html#typeparam-T)\>\.[dzero](../tuple-0/dzero.html)\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IDifferentiable](../../interfaces/idifferentiable-01/index.html)

## Methods

* bwd\_diff
* [apply\_bwd](apply_bwd)
* fwd\_diff
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<DifferentialPair\<T\>\.dzero\>
`<T>` additionally conforms to `IForwardDifferentiable<DifferentialPair<T>.dzero>`.
### Conformance to IBackwardDifferentiable\<DifferentialPair\<T\>\.dzero\>
`<T>` additionally conforms to `IBackwardDifferentiable<DifferentialPair<T>.dzero>`.
### Conformance to IBackwardDifferentiable\<vector\<T,N\>\.dzero\>
`<T>` additionally conforms to `IBackwardDifferentiable<vector<T,N>.dzero>`.
### Conformance to IForwardDifferentiable\<vector\<T,N\>\.dzero\>
`<T>` additionally conforms to `IForwardDifferentiable<vector<T,N>.dzero>`.
### Conformance to IForwardDifferentiable\<matrix\<T,N,M\>\.dzero\>
`<T>` additionally conforms to `IForwardDifferentiable<matrix<T,N,M>.dzero>`.
### Conformance to IBackwardDifferentiable\<matrix\<T,N,M\>\.dzero\>
`<T>` additionally conforms to `IBackwardDifferentiable<matrix<T,N,M>.dzero>`.
### Conformance to IBackwardDifferentiable\<NullDifferential\.dzero\>
`<T>` additionally conforms to `IBackwardDifferentiable<NullDifferential.dzero>`.
### Conformance to IForwardDifferentiable\<NullDifferential\.dzero\>
`<T>` additionally conforms to `IForwardDifferentiable<NullDifferential.dzero>`.
### Conformance to IForwardDifferentiable\<T\[N\]\.dzero\>
`<T>` additionally conforms to `IForwardDifferentiable<T[N].dzero>`.
### Conformance to IBackwardDifferentiable\<T\[N\]\.dzero\>
`<T>` additionally conforms to `IBackwardDifferentiable<T[N].dzero>`.
### Conformance to IForwardDifferentiable\<Optional\<T\>\.dzero\>
`<T>` additionally conforms to `IForwardDifferentiable<Optional<T>.dzero>`.
### Conformance to IBackwardDifferentiable\<Optional\<T\>\.dzero\>
`<T>` additionally conforms to `IBackwardDifferentiable<Optional<T>.dzero>`.
### Conformance to IForwardDifferentiable\<Tuple\<T\>\.dzero\>
`<T>` additionally conforms to `IForwardDifferentiable<Tuple<T>.dzero>`.
### Conformance to IBackwardDifferentiable\<Tuple\<T\>\.dzero\>
`<T>` additionally conforms to `IBackwardDifferentiable<Tuple<T>.dzero>`.

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

BwdCallable <bwdcallable-03>
MinimalContext <minimalcontext-07>
apply_bwd <apply_bwd>
remat <remat>
```
RTD-TOC-END -->
