---
layout: stdlib-reference
---

# extension vector\<T,N\>\.toFloat : IForwardDifferentiable\<vector\<T,N\>\.toFloat\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[toFloat](../vector/tofloat-2.html)\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[toFloat](../vector/tofloat-2.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[toFloat](../vector/tofloat-2.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[toFloat](../matrix/tofloat-2.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[toFloat](../matrix/tofloat-2.html)\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* bwd\_diff
* [apply\_bwd](apply_bwd)
* [fwd\_diff](fwd_diff)
* remat

## Conditional Conformances

### Conformance to IForwardDifferentiable\<vector\<T,N\>\.toFloat\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<vector<T,N>.toFloat>`.
### Conformance to IBackwardDifferentiable\<vector\<T,N\>\.toFloat\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<vector<T,N>.toFloat>`.
### Conformance to IForwardDifferentiable\<matrix\<T,N,M\>\.toFloat\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<matrix<T,N,M>.toFloat>`.
### Conformance to IBackwardDifferentiable\<matrix\<T,N,M\>\.toFloat\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<matrix<T,N,M>.toFloat>`.

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

BwdCallable <bwdcallable-03>
MinimalContext <minimalcontext-07>
apply_bwd <apply_bwd>
fwd_diff <fwd_diff>
```
RTD-TOC-END -->
