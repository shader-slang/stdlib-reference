---
layout: stdlib-reference
---

# extension fmod\<T, N\> : IForwardDifferentiable\<fmod\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[fmod](../../global-decls/fmod.html)\<[T](../../global-decls/fmod.html#typeparam-T), [N](../../global-decls/fmod.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[fmod](../../global-decls/fmod.html)\<[T](../../global-decls/fmod.html#typeparam-T), [N](../../global-decls/fmod.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[fmod](../../global-decls/fmod.html)\<[T](../../global-decls/fmod.html#typeparam-T), [N](../../global-decls/fmod.html#decl-N), [M](../../global-decls/fmod.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[fmod](../../global-decls/fmod.html)\<[T](../../global-decls/fmod.html#typeparam-T), [N](../../global-decls/fmod.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[fmod](../../global-decls/fmod.html)\<[T](../../global-decls/fmod.html#typeparam-T), [N](../../global-decls/fmod.html#decl-N), [M](../../global-decls/fmod.html#decl-M) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[fmod](../../global-decls/fmod.html)\<[T](../../global-decls/fmod.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[fmod](../../global-decls/fmod.html)\<[T](../../global-decls/fmod.html#typeparam-T) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* fwd\_diff
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<fmod\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<fmod<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<fmod\<T, N, M\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<fmod<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<fmod\<T, N\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<fmod<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<fmod\<T, N, M\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<fmod<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<fmod\<T\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<fmod<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<fmod\<T\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<fmod<T>>` when the following conditions are met:

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
