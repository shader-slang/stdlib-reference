---
layout: stdlib-reference
---

# extension vector\<T,N\>\.scale\<T1\> : IForwardDifferentiable\<vector\<T,N\>\.scale\<T1\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[scale](../vector/scale.html)\<[T1](../vector/scale.html#typeparam-T1) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[scale](../vector/scale.html)\<[T1](../vector/scale.html#typeparam-T1) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[scale](../vector/scale.html)\<[T1](../vector/scale.html#typeparam-T1) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[scale](../matrix/scale.html)\<[T1](../matrix/scale.html#typeparam-T1) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[scale](../matrix/scale.html)\<[T1](../matrix/scale.html#typeparam-T1) \>\>

## Generic Parameters

####  <a id="typeparam-T1"></a>T1: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* bwd\_diff
* [apply\_bwd](apply_bwd)
* fwd\_diff
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<vector\<T,N\>\.scale\<T1\>\>
`<T1>` additionally conforms to `IForwardDifferentiable<vector<T,N>.scale<T1>>` when the following conditions are met:

  * [T1](index.html#typeparam-T1) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<vector\<T,N\>\.scale\<T1\>\>
`<T1>` additionally conforms to `IBackwardDifferentiable<vector<T,N>.scale<T1>>` when the following conditions are met:

  * [T1](index.html#typeparam-T1) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<matrix\<T,N,M\>\.scale\<T1\>\>
`<T1>` additionally conforms to `IForwardDifferentiable<matrix<T,N,M>.scale<T1>>` when the following conditions are met:

  * [T1](index.html#typeparam-T1) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<matrix\<T,N,M\>\.scale\<T1\>\>
`<T1>` additionally conforms to `IBackwardDifferentiable<matrix<T,N,M>.scale<T1>>` when the following conditions are met:

  * [T1](index.html#typeparam-T1) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

apply_bwd <apply_bwd>
remat <remat>
```
RTD-TOC-END -->
