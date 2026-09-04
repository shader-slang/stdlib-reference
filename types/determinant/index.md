---
layout: stdlib-reference
---

# extension determinant\<T, N\> : IForwardDifferentiable\<determinant\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[determinant](../../global-decls/determinant.html)\<[T](../../global-decls/determinant.html#typeparam-T), [N](../../global-decls/determinant.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[determinant](../../global-decls/determinant.html)\<[T](../../global-decls/determinant.html#typeparam-T), [N](../../global-decls/determinant.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[determinant](../../global-decls/determinant.html)\<[T](../../global-decls/determinant.html#typeparam-T), [N](../../global-decls/determinant.html#decl-N) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* fwd\_diff
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<determinant\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<determinant<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<determinant\<T, N\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<determinant<T, N>>` when the following conditions are met:

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
