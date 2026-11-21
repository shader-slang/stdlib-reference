---
layout: stdlib-reference
---

# extension DiffTensorView\<T, A\>\.load : IBackwardDifferentiable\<DiffTensorView\<T, A\>\.load\>

*Conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[load](../difftensorview-04a/load.html)\>

*Conditionally conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[load](../difftensorview-04a/load.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[load](../difftensorview-04a/load.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[load](../difftensorview-04a/load.html)\<[N](../difftensorview-04a/load.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[load](../difftensorview-04a/load.html)\<[N](../difftensorview-04a/load.html#decl-N) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="typeparam-A"></a>A: [IDiffTensorWrapper](../../interfaces/idifftensorwrapper-015b/index.html)

## Methods

* [apply\_bwd](apply_bwd)
* bwd\_diff
* [remat](remat)
* [fwd\_diff](fwd_diff)

## Conditional Conformances

### Conformance to IBackwardDifferentiable\<DiffTensorView\<T, A\>\.load\>
`<T, A>` additionally conforms to `IBackwardDifferentiable<DiffTensorView<T, A>.load>`.
### Conformance to IForwardDifferentiable\<DiffTensorView\<T, A\>\.load\>
`<T, A>` additionally conforms to `IForwardDifferentiable<DiffTensorView<T, A>.load>`.
### Conformance to IBackwardDifferentiable\<DiffTensorView\<T, A\>\.load\<N\>\>
`<T, A>` additionally conforms to `IBackwardDifferentiable<DiffTensorView<T, A>.load<N>>`.
### Conformance to IForwardDifferentiable\<DiffTensorView\<T, A\>\.load\<N\>\>
`<T, A>` additionally conforms to `IForwardDifferentiable<DiffTensorView<T, A>.load<N>>`.

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

BwdCallable <bwdcallable-03>
MinimalContext <minimalcontext-07>
apply_bwd <apply_bwd>
fwd_diff <fwd_diff>
remat <remat>
```
RTD-TOC-END -->
