---
layout: stdlib-reference
---

# extension vector\<T,N\>\.sub : IForwardDifferentiable\<vector\<T,N\>\.sub\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[sub](../vector/sub.html)\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[sub](../vector/sub.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[sub](../vector/sub.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[sub](../matrix/sub.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[sub](../matrix/sub.html)\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* bwd\_diff
* apply\_bwd
* fwd\_diff
* remat

## Conditional Conformances

### Conformance to IForwardDifferentiable\<vector\<T,N\>\.sub\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<vector<T,N>.sub>`.
### Conformance to IBackwardDifferentiable\<vector\<T,N\>\.sub\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<vector<T,N>.sub>`.
### Conformance to IForwardDifferentiable\<matrix\<T,N,M\>\.sub\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<matrix<T,N,M>.sub>`.
### Conformance to IBackwardDifferentiable\<matrix\<T,N,M\>\.sub\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<matrix<T,N,M>.sub>`.
