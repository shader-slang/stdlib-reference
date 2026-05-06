---
layout: stdlib-reference
---

# extension atan\<T\> : IForwardDifferentiable\<atan\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[atan](../../global-decls/atan.html)\<[T](../../global-decls/atan.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[atan](../../global-decls/atan.html)\<[T](../../global-decls/atan.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[atan](../../global-decls/atan.html)\<[T](../../global-decls/atan.html#typeparam-T), [N](../../global-decls/atan.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[atan](../../global-decls/atan.html)\<[T](../../global-decls/atan.html#typeparam-T), [N](../../global-decls/atan.html#decl-N), [M](../../global-decls/atan.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[atan](../../global-decls/atan.html)\<[T](../../global-decls/atan.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[atan](../../global-decls/atan.html)\<[T](../../global-decls/atan.html#typeparam-T), [N](../../global-decls/atan.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[atan](../../global-decls/atan.html)\<[T](../../global-decls/atan.html#typeparam-T), [N](../../global-decls/atan.html#decl-N), [M](../../global-decls/atan.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* fwd\_diff
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<atan\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<atan<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<atan\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<atan<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<atan\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<atan<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<atan\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<atan<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<atan\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<atan<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<atan\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<atan<T, N, M>>` when the following conditions are met:

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
