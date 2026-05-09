---
layout: stdlib-reference
---

# extension lerp\<T, N\> : IForwardDifferentiable\<lerp\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[lerp](../../global-decls/lerp.html)\<[T](../../global-decls/lerp.html#typeparam-T), [N](../../global-decls/lerp.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[lerp](../../global-decls/lerp.html)\<[T](../../global-decls/lerp.html#typeparam-T), [N](../../global-decls/lerp.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[lerp](../../global-decls/lerp.html)\<[T](../../global-decls/lerp.html#typeparam-T), [N](../../global-decls/lerp.html#decl-N), [M](../../global-decls/lerp.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[lerp](../../global-decls/lerp.html)\<[T](../../global-decls/lerp.html#typeparam-T), [N](../../global-decls/lerp.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[lerp](../../global-decls/lerp.html)\<[T](../../global-decls/lerp.html#typeparam-T), [N](../../global-decls/lerp.html#decl-N), [M](../../global-decls/lerp.html#decl-M) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[lerp](../../global-decls/lerp.html)\<[T](../../global-decls/lerp.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[lerp](../../global-decls/lerp.html)\<[T](../../global-decls/lerp.html#typeparam-T) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* [fwd\_diff](fwd_diff)
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<lerp\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<lerp<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<lerp\<T, N, M\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<lerp<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<lerp\<T, N\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<lerp<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<lerp\<T, N, M\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<lerp<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<lerp\<T\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<lerp<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<lerp\<T\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<lerp<T>>` when the following conditions are met:

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
