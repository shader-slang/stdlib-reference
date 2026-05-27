---
layout: stdlib-reference
---

# extension sin\<T\> : IForwardDifferentiable\<sin\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sin](../../global-decls/sin.html)\<[T](../../global-decls/sin.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sin](../../global-decls/sin.html)\<[T](../../global-decls/sin.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sin](../../global-decls/sin.html)\<[T](../../global-decls/sin.html#typeparam-T), [N](../../global-decls/sin.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sin](../../global-decls/sin.html)\<[T](../../global-decls/sin.html#typeparam-T), [N](../../global-decls/sin.html#decl-N), [M](../../global-decls/sin.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[sin](../../global-decls/sin.html)\<[T](../../global-decls/sin.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[sin](../../global-decls/sin.html)\<[T](../../global-decls/sin.html#typeparam-T), [N](../../global-decls/sin.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[sin](../../global-decls/sin.html)\<[T](../../global-decls/sin.html#typeparam-T), [N](../../global-decls/sin.html#decl-N), [M](../../global-decls/sin.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* [fwd\_diff](fwd_diff)
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<sin\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sin<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<sin\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sin<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<sin\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sin<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<sin\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<sin<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<sin\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<sin<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<sin\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<sin<T, N, M>>` when the following conditions are met:

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
