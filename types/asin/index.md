---
layout: stdlib-reference
---

# extension asin\<T\> : IForwardDifferentiable\<asin\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[asin](../../global-decls/asin.html)\<[T](../../global-decls/asin.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[asin](../../global-decls/asin.html)\<[T](../../global-decls/asin.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[asin](../../global-decls/asin.html)\<[T](../../global-decls/asin.html#typeparam-T), [N](../../global-decls/asin.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[asin](../../global-decls/asin.html)\<[T](../../global-decls/asin.html#typeparam-T), [N](../../global-decls/asin.html#decl-N), [M](../../global-decls/asin.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[asin](../../global-decls/asin.html)\<[T](../../global-decls/asin.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[asin](../../global-decls/asin.html)\<[T](../../global-decls/asin.html#typeparam-T), [N](../../global-decls/asin.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[asin](../../global-decls/asin.html)\<[T](../../global-decls/asin.html#typeparam-T), [N](../../global-decls/asin.html#decl-N), [M](../../global-decls/asin.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* [fwd\_diff](fwd_diff)
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<asin\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<asin<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<asin\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<asin<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<asin\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<asin<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<asin\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<asin<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<asin\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<asin<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<asin\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<asin<T, N, M>>` when the following conditions are met:

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
