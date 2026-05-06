---
layout: stdlib-reference
---

# extension fma\<T, N\> : IForwardDifferentiable\<fma\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[fma](../../global-decls/fma.html)\<[T](../../global-decls/fma.html#typeparam-T), [N](../../global-decls/fma.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[fma](../../global-decls/fma.html)\<[T](../../global-decls/fma.html#typeparam-T), [N](../../global-decls/fma.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[fma](../../global-decls/fma.html)\<[T](../../global-decls/fma.html#typeparam-T), [N](../../global-decls/fma.html#decl-N), [M](../../global-decls/fma.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[fma](../../global-decls/fma.html)\<[T](../../global-decls/fma.html#typeparam-T), [N](../../global-decls/fma.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[fma](../../global-decls/fma.html)\<[T](../../global-decls/fma.html#typeparam-T), [N](../../global-decls/fma.html#decl-N), [M](../../global-decls/fma.html#decl-M) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[fma](../../global-decls/fma.html)\<[T](../../global-decls/fma.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[fma](../../global-decls/fma.html)\<[T](../../global-decls/fma.html#typeparam-T) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* [fwd\_diff](fwd_diff)
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<fma\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<fma<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<fma\<T, N, M\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<fma<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<fma\<T, N\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<fma<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<fma\<T, N, M\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<fma<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<fma\<T\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<fma<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<fma\<T\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<fma<T>>` when the following conditions are met:

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
