---
layout: stdlib-reference
---

# extension transpose\<T, N, M\> : IForwardDifferentiable\<transpose\<T, N, M\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[transpose](../../global-decls/transpose.html)\<[T](../../global-decls/transpose.html#typeparam-T), [N](../../global-decls/transpose.html#decl-N), [M](../../global-decls/transpose.html#decl-M) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[transpose](../../global-decls/transpose.html)\<[T](../../global-decls/transpose.html#typeparam-T), [N](../../global-decls/transpose.html#decl-N), [M](../../global-decls/transpose.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[transpose](../../global-decls/transpose.html)\<[T](../../global-decls/transpose.html#typeparam-T), [N](../../global-decls/transpose.html#decl-N), [M](../../global-decls/transpose.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Methods

* fwd\_diff
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<transpose\<T, N, M\>\>
`<T, int N, int M>` additionally conforms to `IForwardDifferentiable<transpose<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<transpose\<T, N, M\>\>
`<T, int N, int M>` additionally conforms to `IBackwardDifferentiable<transpose<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

BwdCallable <bwdcallable-03>
MinimalContext <minimalcontext-07>
apply_bwd <apply_bwd>
bwd_diff <bwd_diff>
remat <remat>
```
RTD-TOC-END -->
