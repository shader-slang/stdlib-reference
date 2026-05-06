---
layout: stdlib-reference
---

# extension DiffTensorView\<T, A\>\.store : IBackwardDifferentiable\<DiffTensorView\<T, A\>\.store\>

*Conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[store](../difftensorview-04a/store.html)\>

*Conditionally conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[store](../difftensorview-04a/store.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[store](../difftensorview-04a/store.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[store](../difftensorview-04a/store.html)\<[N](../difftensorview-04a/store.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[store](../difftensorview-04a/store.html)\<[N](../difftensorview-04a/store.html#decl-N) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="typeparam-A"></a>A: [IDiffTensorWrapper](../../interfaces/idifftensorwrapper-015b/index.html)

## Methods

* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)
* [fwd\_diff](fwd_diff)

## Conditional Conformances

### Conformance to IBackwardDifferentiable\<DiffTensorView\<T, A\>\.store\>
`<T, A>` additionally conforms to `IBackwardDifferentiable<DiffTensorView<T, A>.store>`.
### Conformance to IForwardDifferentiable\<DiffTensorView\<T, A\>\.store\>
`<T, A>` additionally conforms to `IForwardDifferentiable<DiffTensorView<T, A>.store>`.
### Conformance to IBackwardDifferentiable\<DiffTensorView\<T, A\>\.store\<N\>\>
`<T, A>` additionally conforms to `IBackwardDifferentiable<DiffTensorView<T, A>.store<N>>`.
### Conformance to IForwardDifferentiable\<DiffTensorView\<T, A\>\.store\<N\>\>
`<T, A>` additionally conforms to `IForwardDifferentiable<DiffTensorView<T, A>.store<N>>`.

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

MinimalContext <minimalcontext-07>
apply_bwd <apply_bwd>
bwd_diff <bwd_diff>
fwd_diff <fwd_diff>
remat <remat>
```
RTD-TOC-END -->
