---
layout: stdlib-reference
---

# extension DiffTensorView\<T, A\>\.storeOnce : IBackwardDifferentiable\<DiffTensorView\<T, A\>\.storeOnce\>

*Conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[storeOnce](../difftensorview-04a/storeonce-5.html)\>

*Conditionally conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[storeOnce](../difftensorview-04a/storeonce-5.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[storeOnce](../difftensorview-04a/storeonce-5.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[storeOnce](../difftensorview-04a/storeonce-5.html)\<[N](../difftensorview-04a/storeonce-5.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[storeOnce](../difftensorview-04a/storeonce-5.html)\<[N](../difftensorview-04a/storeonce-5.html#decl-N) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="typeparam-A"></a>A: [IDiffTensorWrapper](../../interfaces/idifftensorwrapper-015b/index.html)

## Methods

* apply\_bwd
* bwd\_diff
* remat
* [fwd\_diff](fwd_diff)

## Conditional Conformances

### Conformance to IBackwardDifferentiable\<DiffTensorView\<T, A\>\.storeOnce\>
`<T, A>` additionally conforms to `IBackwardDifferentiable<DiffTensorView<T, A>.storeOnce>`.
### Conformance to IForwardDifferentiable\<DiffTensorView\<T, A\>\.storeOnce\>
`<T, A>` additionally conforms to `IForwardDifferentiable<DiffTensorView<T, A>.storeOnce>`.
### Conformance to IBackwardDifferentiable\<DiffTensorView\<T, A\>\.storeOnce\<N\>\>
`<T, A>` additionally conforms to `IBackwardDifferentiable<DiffTensorView<T, A>.storeOnce<N>>`.
### Conformance to IForwardDifferentiable\<DiffTensorView\<T, A\>\.storeOnce\<N\>\>
`<T, A>` additionally conforms to `IForwardDifferentiable<DiffTensorView<T, A>.storeOnce<N>>`.

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

fwd_diff <fwd_diff>
```
RTD-TOC-END -->
