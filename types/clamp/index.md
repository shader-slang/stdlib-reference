---
layout: stdlib-reference
---

# extension clamp\<T, N\> : IForwardDifferentiable\<clamp\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[clamp](../../global-decls/clamp.html)\<[T](../../global-decls/clamp.html#typeparam-T), [N](../../global-decls/clamp.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[clamp](../../global-decls/clamp.html)\<[T](../../global-decls/clamp.html#typeparam-T), [N](../../global-decls/clamp.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[clamp](../../global-decls/clamp.html)\<[T](../../global-decls/clamp.html#typeparam-T), [N](../../global-decls/clamp.html#decl-N), [M](../../global-decls/clamp.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[clamp](../../global-decls/clamp.html)\<[T](../../global-decls/clamp.html#typeparam-T), [N](../../global-decls/clamp.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[clamp](../../global-decls/clamp.html)\<[T](../../global-decls/clamp.html#typeparam-T), [N](../../global-decls/clamp.html#decl-N), [M](../../global-decls/clamp.html#decl-M) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[clamp](../../global-decls/clamp.html)\<[T](../../global-decls/clamp.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[clamp](../../global-decls/clamp.html)\<[T](../../global-decls/clamp.html#typeparam-T) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* fwd\_diff
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<clamp\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<clamp<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<clamp\<T, N, M\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<clamp<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<clamp\<T, N\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<clamp<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<clamp\<T, N, M\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<clamp<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<clamp\<T\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<clamp<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<clamp\<T\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<clamp<T>>` when the following conditions are met:

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
