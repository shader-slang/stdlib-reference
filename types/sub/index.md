---
layout: stdlib-reference
---

# extension vector\<T,N\>\.sub : IForwardDifferentiable\<vector\<T,N\>\.sub\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[sub](../vector/sub.html)\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[sub](../vector/sub.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[sub](../vector/sub.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[sub](../matrix/sub.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[sub](../matrix/sub.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[CoopVec](../coopvec-04/index.html)\<[T](../coopvec-04/index.html#typeparam-T), [N](../coopvec-04/index.html#decl-N)\>\.[sub](../coopvec-04/sub.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[CoopVec](../coopvec-04/index.html)\<[T](../coopvec-04/index.html#typeparam-T), [N](../coopvec-04/index.html#decl-N)\>\.[sub](../coopvec-04/sub.html)\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* [fwd\_diff](fwd_diff)
* apply\_bwd
* bwd\_diff
* remat

## Conditional Conformances

### Conformance to IForwardDifferentiable\<vector\<T,N\>\.sub\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<vector<T,N>.sub>`.
### Conformance to IBackwardDifferentiable\<vector\<T,N\>\.sub\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<vector<T,N>.sub>`.
### Conformance to IBackwardDifferentiable\<matrix\<T,N,M\>\.sub\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<matrix<T,N,M>.sub>`.
### Conformance to IForwardDifferentiable\<matrix\<T,N,M\>\.sub\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<matrix<T,N,M>.sub>`.
### Conformance to IForwardDifferentiable\<CoopVec\<T, N\>\.sub\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<CoopVec<T, N>.sub>`.
### Conformance to IBackwardDifferentiable\<CoopVec\<T, N\>\.sub\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<CoopVec<T, N>.sub>`.
### Conformance to IForwardDifferentiable\<CoopVec\<T, N\>\.sub\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<CoopVec<T, N>.sub>`.
### Conformance to IBackwardDifferentiable\<CoopVec\<T, N\>\.sub\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<CoopVec<T, N>.sub>`.

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

 <>
fwd_diff <fwd_diff>
```
RTD-TOC-END -->
