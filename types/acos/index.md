---
layout: stdlib-reference
---

# extension acos\<T\> : IForwardDifferentiable\<acos\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[acos](../../global-decls/acos.html)\<[T](../../global-decls/acos.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[acos](../../global-decls/acos.html)\<[T](../../global-decls/acos.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[acos](../../global-decls/acos.html)\<[T](../../global-decls/acos.html#typeparam-T), [N](../../global-decls/acos.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[acos](../../global-decls/acos.html)\<[T](../../global-decls/acos.html#typeparam-T), [N](../../global-decls/acos.html#decl-N), [M](../../global-decls/acos.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[acos](../../global-decls/acos.html)\<[T](../../global-decls/acos.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[acos](../../global-decls/acos.html)\<[T](../../global-decls/acos.html#typeparam-T), [N](../../global-decls/acos.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[acos](../../global-decls/acos.html)\<[T](../../global-decls/acos.html#typeparam-T), [N](../../global-decls/acos.html#decl-N), [M](../../global-decls/acos.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* [fwd\_diff](fwd_diff)
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<acos\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<acos<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<acos\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<acos<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<acos\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<acos<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<acos\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<acos<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<acos\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<acos<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<acos\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<acos<T, N, M>>` when the following conditions are met:

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
