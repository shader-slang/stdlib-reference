---
layout: stdlib-reference
---

# extension atan2\<T, N\> : IForwardDifferentiable\<atan2\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[atan2](../../global-decls/atan2.html)\<[T](../../global-decls/atan2.html#typeparam-T), [N](../../global-decls/atan2.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[atan2](../../global-decls/atan2.html)\<[T](../../global-decls/atan2.html#typeparam-T), [N](../../global-decls/atan2.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[atan2](../../global-decls/atan2.html)\<[T](../../global-decls/atan2.html#typeparam-T), [N](../../global-decls/atan2.html#decl-N), [M](../../global-decls/atan2.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[atan2](../../global-decls/atan2.html)\<[T](../../global-decls/atan2.html#typeparam-T), [N](../../global-decls/atan2.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[atan2](../../global-decls/atan2.html)\<[T](../../global-decls/atan2.html#typeparam-T), [N](../../global-decls/atan2.html#decl-N), [M](../../global-decls/atan2.html#decl-M) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[atan2](../../global-decls/atan2.html)\<[T](../../global-decls/atan2.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[atan2](../../global-decls/atan2.html)\<[T](../../global-decls/atan2.html#typeparam-T) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* [fwd\_diff](fwd_diff)
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<atan2\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<atan2<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<atan2\<T, N, M\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<atan2<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<atan2\<T, N\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<atan2<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<atan2\<T, N, M\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<atan2<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<atan2\<T\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<atan2<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<atan2\<T\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<atan2<T>>` when the following conditions are met:

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
