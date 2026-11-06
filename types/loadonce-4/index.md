---
layout: stdlib-reference
---

# extension DiffTensorView\<T, A\>\.loadOnce : IBackwardDifferentiable\<DiffTensorView\<T, A\>\.loadOnce\>

*Conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[loadOnce](../difftensorview-04a/loadonce-4.html)\>

*Conditionally conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[loadOnce](../difftensorview-04a/loadonce-4.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[loadOnce](../difftensorview-04a/loadonce-4.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[loadOnce](../difftensorview-04a/loadonce-4.html)\<[N](../difftensorview-04a/loadonce-4.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[loadOnce](../difftensorview-04a/loadonce-4.html)\<[N](../difftensorview-04a/loadonce-4.html#decl-N) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="typeparam-A"></a>A: [IDiffTensorWrapper](../../interfaces/idifftensorwrapper-015b/index.html)

## Methods

* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)
* [fwd\_diff](fwd_diff)

## Conditional Conformances

### Conformance to IBackwardDifferentiable\<DiffTensorView\<T, A\>\.loadOnce\>
`<T, A>` additionally conforms to `IBackwardDifferentiable<DiffTensorView<T, A>.loadOnce>`.
### Conformance to IForwardDifferentiable\<DiffTensorView\<T, A\>\.loadOnce\>
`<T, A>` additionally conforms to `IForwardDifferentiable<DiffTensorView<T, A>.loadOnce>`.
### Conformance to IBackwardDifferentiable\<DiffTensorView\<T, A\>\.loadOnce\<N\>\>
`<T, A>` additionally conforms to `IBackwardDifferentiable<DiffTensorView<T, A>.loadOnce<N>>`.
### Conformance to IForwardDifferentiable\<DiffTensorView\<T, A\>\.loadOnce\<N\>\>
`<T, A>` additionally conforms to `IForwardDifferentiable<DiffTensorView<T, A>.loadOnce<N>>`.

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

BwdCallable <bwdcallable-03>
MinimalContext <minimalcontext-07>
apply_bwd <apply_bwd>
bwd_diff <bwd_diff>
fwd_diff <fwd_diff>
remat <remat>
```
RTD-TOC-END -->
