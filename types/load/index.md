---
layout: stdlib-reference
---

# extension DiffTensorView\<T, A\>\.load : IForwardDifferentiable\<DiffTensorView\<T, A\>\.load\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[load](../difftensorview-04a/load.html)\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[load](../difftensorview-04a/load.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DiffTensorView](../difftensorview-04a/index.html)\<[T](../difftensorview-04a/index.html#typeparam-T), [A](../difftensorview-04a/index.html#typeparam-A)\>\.[load](../difftensorview-04a/load.html)\<[N](../difftensorview-04a/load.html#decl-N) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="typeparam-A"></a>A: [IDiffTensorWrapper](../../interfaces/idifftensorwrapper-015b/index.html)

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<DiffTensorView\<T, A\>\.load\>
`<T, A>` additionally conforms to `IForwardDifferentiable<DiffTensorView<T, A>.load>`.
### Conformance to IForwardDifferentiable\<DiffTensorView\<T, A\>\.load\<N\>\>
`<T, A>` additionally conforms to `IForwardDifferentiable<DiffTensorView<T, A>.load<N>>`.
