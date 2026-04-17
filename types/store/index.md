---
layout: stdlib-reference
---

# extension DiffTensorView\<T, A\>\.store : IForwardDifferentiable\<DiffTensorView\<T, A\>\.store\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[store](../difftensorview-04a/store.html)\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[store](../difftensorview-04a/store.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[store](../difftensorview-04a/store.html)\<[N](../difftensorview-04a/store.html#decl-N) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="typeparam-A"></a>A: [IDiffTensorWrapper](../../interfaces/idifftensorwrapper-015b/index.html)

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<DiffTensorView\<T, A\>\.store\>
`<T, A>` additionally conforms to `IForwardDifferentiable<DiffTensorView<T, A>.store>`.
### Conformance to IForwardDifferentiable\<DiffTensorView\<T, A\>\.store\<N\>\>
`<T, A>` additionally conforms to `IForwardDifferentiable<DiffTensorView<T, A>.store<N>>`.
