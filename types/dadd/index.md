---
layout: stdlib-reference
---

# extension DifferentialPair\<T\>\.dadd : IForwardDifferentiable\<DifferentialPair\<T\>\.dadd\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DifferentialPair](../differentialpair-0c/index.html)\<[T](../differentialpair-0c/index.html#typeparam-T)\>\.[dadd](../differentialpair-0c/dadd.html)\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DifferentialPair](../differentialpair-0c/index.html)\<[T](../differentialpair-0c/index.html#typeparam-T)\>\.[dadd](../differentialpair-0c/dadd.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DifferentialPair](../differentialpair-0c/index.html)\<[T](../differentialpair-0c/index.html#typeparam-T)\>\.[dadd](../differentialpair-0c/dadd.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[dadd](../vector/dadd.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[dadd](../vector/dadd.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[dadd](../matrix/dadd.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[dadd](../matrix/dadd.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[NullDifferential](../nulldifferential-04/index.html)\.[dadd](../nulldifferential-04/dadd.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[NullDifferential](../nulldifferential-04/index.html)\.[dadd](../nulldifferential-04/dadd.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<T \[ N \]\.dadd\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<T \[ N \]\.dadd\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[Optional](../optional-0/index.html)\<[T](../optional-0/index.html#typeparam-T)\>\.[dadd](../optional-0/dadd.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[Optional](../optional-0/index.html)\<[T](../optional-0/index.html#typeparam-T)\>\.[dadd](../optional-0/dadd.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[Tuple](../tuple-0/index.html)\<[T](../tuple-0/index.html#typeparam-T)\>\.[dadd](../tuple-0/dadd.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[Tuple](../tuple-0/index.html)\<[T](../tuple-0/index.html#typeparam-T)\>\.[dadd](../tuple-0/dadd.html)\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IDifferentiable](../../interfaces/idifferentiable-01/index.html)

## Methods

* bwd\_diff
* [apply\_bwd](apply_bwd)
* [fwd\_diff](fwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<DifferentialPair\<T\>\.dadd\>
`<T>` additionally conforms to `IForwardDifferentiable<DifferentialPair<T>.dadd>`.
### Conformance to IBackwardDifferentiable\<DifferentialPair\<T\>\.dadd\>
`<T>` additionally conforms to `IBackwardDifferentiable<DifferentialPair<T>.dadd>`.
### Conformance to IBackwardDifferentiable\<vector\<T,N\>\.dadd\>
`<T>` additionally conforms to `IBackwardDifferentiable<vector<T,N>.dadd>`.
### Conformance to IForwardDifferentiable\<vector\<T,N\>\.dadd\>
`<T>` additionally conforms to `IForwardDifferentiable<vector<T,N>.dadd>`.
### Conformance to IForwardDifferentiable\<matrix\<T,N,M\>\.dadd\>
`<T>` additionally conforms to `IForwardDifferentiable<matrix<T,N,M>.dadd>`.
### Conformance to IBackwardDifferentiable\<matrix\<T,N,M\>\.dadd\>
`<T>` additionally conforms to `IBackwardDifferentiable<matrix<T,N,M>.dadd>`.
### Conformance to IForwardDifferentiable\<NullDifferential\.dadd\>
`<T>` additionally conforms to `IForwardDifferentiable<NullDifferential.dadd>`.
### Conformance to IBackwardDifferentiable\<NullDifferential\.dadd\>
`<T>` additionally conforms to `IBackwardDifferentiable<NullDifferential.dadd>`.
### Conformance to IBackwardDifferentiable\<T\[N\]\.dadd\>
`<T>` additionally conforms to `IBackwardDifferentiable<T[N].dadd>`.
### Conformance to IForwardDifferentiable\<T\[N\]\.dadd\>
`<T>` additionally conforms to `IForwardDifferentiable<T[N].dadd>`.
### Conformance to IForwardDifferentiable\<Optional\<T\>\.dadd\>
`<T>` additionally conforms to `IForwardDifferentiable<Optional<T>.dadd>`.
### Conformance to IBackwardDifferentiable\<Optional\<T\>\.dadd\>
`<T>` additionally conforms to `IBackwardDifferentiable<Optional<T>.dadd>`.
### Conformance to IBackwardDifferentiable\<Tuple\<T\>\.dadd\>
`<T>` additionally conforms to `IBackwardDifferentiable<Tuple<T>.dadd>`.
### Conformance to IForwardDifferentiable\<Tuple\<T\>\.dadd\>
`<T>` additionally conforms to `IForwardDifferentiable<Tuple<T>.dadd>`.

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

BwdCallable <bwdcallable-03>
apply_bwd <apply_bwd>
fwd_diff <fwd_diff>
remat <remat>
```
RTD-TOC-END -->
