---
layout: stdlib-reference
---

# extension vector\<T,N\>\.mod : IForwardDifferentiable\<vector\<T,N\>\.mod\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[mod](../vector/mod.html)\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[mod](../vector/mod.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[mod](../vector/mod.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[mod](../matrix/mod.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[mod](../matrix/mod.html)\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* bwd\_diff
* [apply\_bwd](apply_bwd)
* [fwd\_diff](fwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<vector\<T,N\>\.mod\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<vector<T,N>.mod>`.
### Conformance to IBackwardDifferentiable\<vector\<T,N\>\.mod\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<vector<T,N>.mod>`.
### Conformance to IForwardDifferentiable\<matrix\<T,N,M\>\.mod\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<matrix<T,N,M>.mod>`.
### Conformance to IBackwardDifferentiable\<matrix\<T,N,M\>\.mod\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<matrix<T,N,M>.mod>`.

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
