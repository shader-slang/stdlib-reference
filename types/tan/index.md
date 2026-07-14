---
layout: stdlib-reference
---

# extension tan\<T\> : IForwardDifferentiable\<tan\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[tan](../../global-decls/tan.html)\<[T](../../global-decls/tan.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[tan](../../global-decls/tan.html)\<[T](../../global-decls/tan.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[tan](../../global-decls/tan.html)\<[T](../../global-decls/tan.html#typeparam-T), [N](../../global-decls/tan.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[tan](../../global-decls/tan.html)\<[T](../../global-decls/tan.html#typeparam-T), [N](../../global-decls/tan.html#decl-N), [M](../../global-decls/tan.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[tan](../../global-decls/tan.html)\<[T](../../global-decls/tan.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[tan](../../global-decls/tan.html)\<[T](../../global-decls/tan.html#typeparam-T), [N](../../global-decls/tan.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[tan](../../global-decls/tan.html)\<[T](../../global-decls/tan.html#typeparam-T), [N](../../global-decls/tan.html#decl-N), [M](../../global-decls/tan.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* [fwd\_diff](fwd_diff)
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<tan\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<tan<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<tan\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<tan<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<tan\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<tan<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<tan\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<tan<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<tan\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<tan<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<tan\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<tan<T, N, M>>` when the following conditions are met:

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
