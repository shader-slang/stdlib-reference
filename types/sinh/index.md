---
layout: stdlib-reference
---

# extension sinh\<T\> : IForwardDifferentiable\<sinh\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sinh](../../global-decls/sinh.html)\<[T](../../global-decls/sinh.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sinh](../../global-decls/sinh.html)\<[T](../../global-decls/sinh.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sinh](../../global-decls/sinh.html)\<[T](../../global-decls/sinh.html#typeparam-T), [N](../../global-decls/sinh.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sinh](../../global-decls/sinh.html)\<[T](../../global-decls/sinh.html#typeparam-T), [N](../../global-decls/sinh.html#decl-N), [M](../../global-decls/sinh.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[sinh](../../global-decls/sinh.html)\<[T](../../global-decls/sinh.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[sinh](../../global-decls/sinh.html)\<[T](../../global-decls/sinh.html#typeparam-T), [N](../../global-decls/sinh.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[sinh](../../global-decls/sinh.html)\<[T](../../global-decls/sinh.html#typeparam-T), [N](../../global-decls/sinh.html#decl-N), [M](../../global-decls/sinh.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* [fwd\_diff](fwd_diff)
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<sinh\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sinh<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<sinh\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sinh<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<sinh\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sinh<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<sinh\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<sinh<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<sinh\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<sinh<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<sinh\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<sinh<T, N, M>>` when the following conditions are met:

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
