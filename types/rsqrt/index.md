---
layout: stdlib-reference
---

# extension rsqrt\<T\> : IForwardDifferentiable\<rsqrt\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[rsqrt](../../global-decls/rsqrt.html)\<[T](../../global-decls/rsqrt.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[rsqrt](../../global-decls/rsqrt.html)\<[T](../../global-decls/rsqrt.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[rsqrt](../../global-decls/rsqrt.html)\<[T](../../global-decls/rsqrt.html#typeparam-T), [N](../../global-decls/rsqrt.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[rsqrt](../../global-decls/rsqrt.html)\<[T](../../global-decls/rsqrt.html#typeparam-T), [N](../../global-decls/rsqrt.html#decl-N), [M](../../global-decls/rsqrt.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[rsqrt](../../global-decls/rsqrt.html)\<[T](../../global-decls/rsqrt.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[rsqrt](../../global-decls/rsqrt.html)\<[T](../../global-decls/rsqrt.html#typeparam-T), [N](../../global-decls/rsqrt.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[rsqrt](../../global-decls/rsqrt.html)\<[T](../../global-decls/rsqrt.html#typeparam-T), [N](../../global-decls/rsqrt.html#decl-N), [M](../../global-decls/rsqrt.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* [fwd\_diff](fwd_diff)
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<rsqrt\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<rsqrt<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<rsqrt\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<rsqrt<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<rsqrt\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<rsqrt<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<rsqrt\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<rsqrt<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<rsqrt\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<rsqrt<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<rsqrt\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<rsqrt<T, N, M>>` when the following conditions are met:

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
