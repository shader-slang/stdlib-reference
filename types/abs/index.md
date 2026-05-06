---
layout: stdlib-reference
---

# extension abs\<T\> : IForwardDifferentiable\<abs\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[abs](../../global-decls/abs.html)\<[T](../../global-decls/abs.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[abs](../../global-decls/abs.html)\<[T](../../global-decls/abs.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[abs](../../global-decls/abs.html)\<[T](../../global-decls/abs.html#typeparam-T), [N](../../global-decls/abs.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[abs](../../global-decls/abs.html)\<[T](../../global-decls/abs.html#typeparam-T), [N](../../global-decls/abs.html#decl-N), [M](../../global-decls/abs.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[abs](../../global-decls/abs.html)\<[T](../../global-decls/abs.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[abs](../../global-decls/abs.html)\<[T](../../global-decls/abs.html#typeparam-T), [N](../../global-decls/abs.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[abs](../../global-decls/abs.html)\<[T](../../global-decls/abs.html#typeparam-T), [N](../../global-decls/abs.html#decl-N), [M](../../global-decls/abs.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* [fwd\_diff](fwd_diff)
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<abs\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<abs<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<abs\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<abs<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<abs\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<abs<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<abs\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<abs<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<abs\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<abs<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<abs\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<abs<T, N, M>>` when the following conditions are met:

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
