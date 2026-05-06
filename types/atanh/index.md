---
layout: stdlib-reference
---

# extension atanh\<T\> : IForwardDifferentiable\<atanh\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[atanh](../../global-decls/atanh.html)\<[T](../../global-decls/atanh.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[atanh](../../global-decls/atanh.html)\<[T](../../global-decls/atanh.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[atanh](../../global-decls/atanh.html)\<[T](../../global-decls/atanh.html#typeparam-T), [N](../../global-decls/atanh.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[atanh](../../global-decls/atanh.html)\<[T](../../global-decls/atanh.html#typeparam-T), [N](../../global-decls/atanh.html#decl-N), [M](../../global-decls/atanh.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[atanh](../../global-decls/atanh.html)\<[T](../../global-decls/atanh.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[atanh](../../global-decls/atanh.html)\<[T](../../global-decls/atanh.html#typeparam-T), [N](../../global-decls/atanh.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[atanh](../../global-decls/atanh.html)\<[T](../../global-decls/atanh.html#typeparam-T), [N](../../global-decls/atanh.html#decl-N), [M](../../global-decls/atanh.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* fwd\_diff
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<atanh\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<atanh<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<atanh\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<atanh<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<atanh\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<atanh<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<atanh\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<atanh<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<atanh\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<atanh<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<atanh\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<atanh<T, N, M>>` when the following conditions are met:

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
