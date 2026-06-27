---
layout: stdlib-reference
---

# extension DifferentialPair\<T\>\.$init : IBackwardDifferentiable\<DifferentialPair\<T\>\.$init\>

*Conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DifferentialPair](../differentialpair-0c/index.html)\<[T](../differentialpair-0c/index.html#typeparam-T)\>\.[init](../differentialpair-0c/init.html)\>

*Conditionally conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[DifferentialPair](../differentialpair-0c/index.html)\<[T](../differentialpair-0c/index.html#typeparam-T)\>\.[init](../differentialpair-0c/init.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[DifferentialPair](../differentialpair-0c/index.html)\<[T](../differentialpair-0c/index.html#typeparam-T)\>\.[init](../differentialpair-0c/init.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[init](../vector/init.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[init](../vector/init.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[init](../vector/init.html)\<[U](../vector/init.html#typeparam-U) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[init](../vector/init.html)\<[U](../vector/init.html#typeparam-U) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[init](../matrix/init.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[init](../matrix/init.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[CoopVec](../coopvec-04/index.html)\<[T](../coopvec-04/index.html#typeparam-T), [N](../coopvec-04/index.html#decl-N)\>\.[init](../coopvec-04/init.html)\<[U](../coopvec-04/init.html#typeparam-U) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[CoopVec](../coopvec-04/index.html)\<[T](../coopvec-04/index.html#typeparam-T), [N](../coopvec-04/index.html#decl-N)\>\.[init](../coopvec-04/init.html)\<[U](../coopvec-04/init.html#typeparam-U) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[NullDifferential](../nulldifferential-04/index.html)\.init\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[NullDifferential](../nulldifferential-04/index.html)\.init\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IDifferentiable](../../interfaces/idifferentiable-01/index.html)

## Methods

* bwd\_diff
* apply\_bwd
* [fwd\_diff](fwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IBackwardDifferentiable\<DifferentialPair\<T\>\.$init\>
`<T>` additionally conforms to `IBackwardDifferentiable<DifferentialPair<T>.$init>`.
### Conformance to IForwardDifferentiable\<DifferentialPair\<T\>\.$init\>
`<T>` additionally conforms to `IForwardDifferentiable<DifferentialPair<T>.$init>`.
### Conformance to IBackwardDifferentiable\<vector\<T,N\>\.$init\>
`<T>` additionally conforms to `IBackwardDifferentiable<vector<T,N>.$init>`.
### Conformance to IForwardDifferentiable\<vector\<T,N\>\.$init\>
`<T>` additionally conforms to `IForwardDifferentiable<vector<T,N>.$init>`.
### Conformance to IBackwardDifferentiable\<vector\<T,N\>\.$init\<U\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<vector<T,N>.$init<U>>` when the following conditions are met:

  * [U](index.html#typeparam-U) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<vector\<T,N\>\.$init\<U\>\>
`<T>` additionally conforms to `IForwardDifferentiable<vector<T,N>.$init<U>>` when the following conditions are met:

  * [U](index.html#typeparam-U) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<vector\<T,N\>\.$init\>
`<T>` additionally conforms to `IBackwardDifferentiable<vector<T,N>.$init>`.
### Conformance to IForwardDifferentiable\<vector\<T,N\>\.$init\>
`<T>` additionally conforms to `IForwardDifferentiable<vector<T,N>.$init>`.
### Conformance to IForwardDifferentiable\<matrix\<T,N,M\>\.$init\>
`<T>` additionally conforms to `IForwardDifferentiable<matrix<T,N,M>.$init>`.
### Conformance to IBackwardDifferentiable\<matrix\<T,N,M\>\.$init\>
`<T>` additionally conforms to `IBackwardDifferentiable<matrix<T,N,M>.$init>`.
### Conformance to IForwardDifferentiable\<matrix\<T,N,M\>\.$init\>
`<T>` additionally conforms to `IForwardDifferentiable<matrix<T,N,M>.$init>`.
### Conformance to IBackwardDifferentiable\<matrix\<T,N,M\>\.$init\>
`<T>` additionally conforms to `IBackwardDifferentiable<matrix<T,N,M>.$init>`.
### Conformance to IBackwardDifferentiable\<matrix\<T,N,M\>\.$init\>
`<T>` additionally conforms to `IBackwardDifferentiable<matrix<T,N,M>.$init>`.
### Conformance to IForwardDifferentiable\<matrix\<T,N,M\>\.$init\>
`<T>` additionally conforms to `IForwardDifferentiable<matrix<T,N,M>.$init>`.
### Conformance to IBackwardDifferentiable\<matrix\<T,N,M\>\.$init\>
`<T>` additionally conforms to `IBackwardDifferentiable<matrix<T,N,M>.$init>`.
### Conformance to IForwardDifferentiable\<matrix\<T,N,M\>\.$init\>
`<T>` additionally conforms to `IForwardDifferentiable<matrix<T,N,M>.$init>`.
### Conformance to IBackwardDifferentiable\<CoopVec\<T, N\>\.$init\<U\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<CoopVec<T, N>.$init<U>>` when the following conditions are met:

  * [U](index.html#typeparam-U) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<CoopVec\<T, N\>\.$init\<U\>\>
`<T>` additionally conforms to `IForwardDifferentiable<CoopVec<T, N>.$init<U>>` when the following conditions are met:

  * [U](index.html#typeparam-U) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<NullDifferential\.$init\>
`<T>` additionally conforms to `IBackwardDifferentiable<NullDifferential.$init>`.
### Conformance to IForwardDifferentiable\<NullDifferential\.$init\>
`<T>` additionally conforms to `IForwardDifferentiable<NullDifferential.$init>`.

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

fwd_diff <fwd_diff>
remat <remat>
```
RTD-TOC-END -->
