---
layout: stdlib-reference
---

# extension mad\<T, N\> : IForwardDifferentiable\<mad\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[mad](../../global-decls/mad.html)\<[T](../../global-decls/mad.html#typeparam-T), [N](../../global-decls/mad.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[mad](../../global-decls/mad.html)\<[T](../../global-decls/mad.html#typeparam-T), [N](../../global-decls/mad.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[mad](../../global-decls/mad.html)\<[T](../../global-decls/mad.html#typeparam-T), [N](../../global-decls/mad.html#decl-N), [M](../../global-decls/mad.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[mad](../../global-decls/mad.html)\<[T](../../global-decls/mad.html#typeparam-T), [N](../../global-decls/mad.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[mad](../../global-decls/mad.html)\<[T](../../global-decls/mad.html#typeparam-T), [N](../../global-decls/mad.html#decl-N), [M](../../global-decls/mad.html#decl-M) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[mad](../../global-decls/mad.html)\<[T](../../global-decls/mad.html#typeparam-T) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[mad](../../global-decls/mad.html)\<[T](../../global-decls/mad.html#typeparam-T) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* fwd\_diff
* [apply\_bwd](apply_bwd)
* [bwd\_diff](bwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<mad\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<mad<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<mad\<T, N, M\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<mad<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<mad\<T, N\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<mad<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<mad\<T, N, M\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<mad<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<mad\<T\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<mad<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<mad\<T\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<mad<T>>` when the following conditions are met:

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
