---
layout: stdlib-reference
---

# extension vector\<T,N\>\.neg : IForwardDifferentiable\<vector\<T,N\>\.neg\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[neg](../vector/neg.html)\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[neg](../vector/neg.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[neg](../vector/neg.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[neg](../matrix/neg.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[neg](../matrix/neg.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[CoopVec](../coopvec-04/index.html)\<[T](../coopvec-04/index.html#typeparam-T), [N](../coopvec-04/index.html#decl-N)\>\.[neg](../coopvec-04/neg.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[CoopVec](../coopvec-04/index.html)\<[T](../coopvec-04/index.html#typeparam-T), [N](../coopvec-04/index.html#decl-N)\>\.[neg](../coopvec-04/neg.html)\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* [fwd\_diff](fwd_diff)
* [apply\_bwd](apply_bwd)
* bwd\_diff
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<vector\<T,N\>\.neg\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<vector<T,N>.neg>`.
### Conformance to IBackwardDifferentiable\<vector\<T,N\>\.neg\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<vector<T,N>.neg>`.
### Conformance to IForwardDifferentiable\<matrix\<T,N,M\>\.neg\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<matrix<T,N,M>.neg>`.
### Conformance to IBackwardDifferentiable\<matrix\<T,N,M\>\.neg\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<matrix<T,N,M>.neg>`.
### Conformance to IBackwardDifferentiable\<CoopVec\<T, N\>\.neg\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<CoopVec<T, N>.neg>`.
### Conformance to IForwardDifferentiable\<CoopVec\<T, N\>\.neg\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<CoopVec<T, N>.neg>`.
### Conformance to IForwardDifferentiable\<CoopVec\<T, N\>\.neg\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<CoopVec<T, N>.neg>`.
### Conformance to IBackwardDifferentiable\<CoopVec\<T, N\>\.neg\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<CoopVec<T, N>.neg>`.

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

 <>
BwdCallable <bwdcallable-03>
MinimalContext <minimalcontext-07>
apply_bwd <apply_bwd>
fwd_diff <fwd_diff>
remat <remat>
```
RTD-TOC-END -->
