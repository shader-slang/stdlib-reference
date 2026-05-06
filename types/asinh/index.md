---
layout: stdlib-reference
---

# extension asinh\<T\> : IForwardDifferentiable\<asinh\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[asinh](../../global-decls/asinh.html)\<[T](../../global-decls/asinh.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[asinh](../../global-decls/asinh.html)\<[T](../../global-decls/asinh.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[asinh](../../global-decls/asinh.html)\<[T](../../global-decls/asinh.html#typeparam-T), [N](../../global-decls/asinh.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[asinh](../../global-decls/asinh.html)\<[T](../../global-decls/asinh.html#typeparam-T), [N](../../global-decls/asinh.html#decl-N), [M](../../global-decls/asinh.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[asinh](../../global-decls/asinh.html)\<[T](../../global-decls/asinh.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[asinh](../../global-decls/asinh.html)\<[T](../../global-decls/asinh.html#typeparam-T), [N](../../global-decls/asinh.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[asinh](../../global-decls/asinh.html)\<[T](../../global-decls/asinh.html#typeparam-T), [N](../../global-decls/asinh.html#decl-N), [M](../../global-decls/asinh.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* fwd\_diff
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<asinh\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<asinh<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<asinh\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<asinh<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<asinh\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<asinh<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<asinh\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<asinh<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<asinh\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<asinh<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<asinh\<T, N, M\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<asinh<T, N, M>>` when the following conditions are met:

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
