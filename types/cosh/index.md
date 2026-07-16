---
layout: stdlib-reference
---

# extension cosh\<T\> : IForwardDifferentiable\<cosh\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[cosh](../../global-decls/cosh.html)\<[T](../../global-decls/cosh.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[cosh](../../global-decls/cosh.html)\<[T](../../global-decls/cosh.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[cosh](../../global-decls/cosh.html)\<[T](../../global-decls/cosh.html#typeparam-T), [N](../../global-decls/cosh.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[cosh](../../global-decls/cosh.html)\<[T](../../global-decls/cosh.html#typeparam-T), [N](../../global-decls/cosh.html#decl-N), [M](../../global-decls/cosh.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[cosh](../../global-decls/cosh.html)\<[T](../../global-decls/cosh.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[cosh](../../global-decls/cosh.html)\<[T](../../global-decls/cosh.html#typeparam-T), [N](../../global-decls/cosh.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[cosh](../../global-decls/cosh.html)\<[T](../../global-decls/cosh.html#typeparam-T), [N](../../global-decls/cosh.html#decl-N), [M](../../global-decls/cosh.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* [fwd\_diff](fwd_diff)
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<cosh\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<cosh<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<cosh\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<cosh<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<cosh\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<cosh<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<cosh\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<cosh<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<cosh\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<cosh<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<cosh\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<cosh<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

BwdCallable <bwdcallable-03>
MinimalContext <minimalcontext-07>
apply_bwd <apply_bwd>
bwd_diff <bwd_diff>
fwd_diff <fwd_diff>
remat <remat>
```
RTD-TOC-END -->
