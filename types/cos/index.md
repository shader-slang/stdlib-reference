---
layout: stdlib-reference
---

# extension cos\<T\> : IForwardDifferentiable\<cos\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[cos](../../global-decls/cos.html)\<[T](../../global-decls/cos.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[cos](../../global-decls/cos.html)\<[T](../../global-decls/cos.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[cos](../../global-decls/cos.html)\<[T](../../global-decls/cos.html#typeparam-T), [N](../../global-decls/cos.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[cos](../../global-decls/cos.html)\<[T](../../global-decls/cos.html#typeparam-T), [N](../../global-decls/cos.html#decl-N), [M](../../global-decls/cos.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[cos](../../global-decls/cos.html)\<[T](../../global-decls/cos.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[cos](../../global-decls/cos.html)\<[T](../../global-decls/cos.html#typeparam-T), [N](../../global-decls/cos.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[cos](../../global-decls/cos.html)\<[T](../../global-decls/cos.html#typeparam-T), [N](../../global-decls/cos.html#decl-N), [M](../../global-decls/cos.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* fwd\_diff
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<cos\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<cos<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<cos\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<cos<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<cos\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<cos<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<cos\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<cos<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<cos\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<cos<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<cos\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<cos<T, N, M>>` when the following conditions are met:

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
