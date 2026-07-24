---
layout: stdlib-reference
---

# extension radians\<T\> : IForwardDifferentiable\<radians\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[radians](../../global-decls/radians.html)\<[T](../../global-decls/radians.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[radians](../../global-decls/radians.html)\<[T](../../global-decls/radians.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[radians](../../global-decls/radians.html)\<[T](../../global-decls/radians.html#typeparam-T), [N](../../global-decls/radians.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[radians](../../global-decls/radians.html)\<[T](../../global-decls/radians.html#typeparam-T), [N](../../global-decls/radians.html#decl-N), [M](../../global-decls/radians.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[radians](../../global-decls/radians.html)\<[T](../../global-decls/radians.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[radians](../../global-decls/radians.html)\<[T](../../global-decls/radians.html#typeparam-T), [N](../../global-decls/radians.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[radians](../../global-decls/radians.html)\<[T](../../global-decls/radians.html#typeparam-T), [N](../../global-decls/radians.html#decl-N), [M](../../global-decls/radians.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* [fwd\_diff](fwd_diff)
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<radians\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<radians<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<radians\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<radians<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<radians\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<radians<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<radians\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<radians<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<radians\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<radians<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<radians\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<radians<T, N, M>>` when the following conditions are met:

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
