---
layout: stdlib-reference
---

# extension log2\<T\> : IForwardDifferentiable\<log2\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[log2](../../global-decls/log2.html)\<[T](../../global-decls/log2.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[log2](../../global-decls/log2.html)\<[T](../../global-decls/log2.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[log2](../../global-decls/log2.html)\<[T](../../global-decls/log2.html#typeparam-T), [N](../../global-decls/log2.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[log2](../../global-decls/log2.html)\<[T](../../global-decls/log2.html#typeparam-T), [N](../../global-decls/log2.html#decl-N), [M](../../global-decls/log2.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[log2](../../global-decls/log2.html)\<[T](../../global-decls/log2.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[log2](../../global-decls/log2.html)\<[T](../../global-decls/log2.html#typeparam-T), [N](../../global-decls/log2.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[log2](../../global-decls/log2.html)\<[T](../../global-decls/log2.html#typeparam-T), [N](../../global-decls/log2.html#decl-N), [M](../../global-decls/log2.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* fwd\_diff
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<log2\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<log2<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<log2\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<log2<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<log2\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<log2<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<log2\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<log2<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<log2\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<log2<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<log2\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<log2<T, N, M>>` when the following conditions are met:

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
