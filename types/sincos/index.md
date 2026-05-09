---
layout: stdlib-reference
---

# extension sincos\<T\> : IBackwardDifferentiable\<sincos\<T\>\>

*Conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[sincos](../../global-decls/sincos.html)\<[T](../../global-decls/sincos.html#typeparam-T) \>\>

*Conditionally conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[sincos](../../global-decls/sincos.html)\<[T](../../global-decls/sincos.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sincos](../../global-decls/sincos.html)\<[T](../../global-decls/sincos.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sincos](../../global-decls/sincos.html)\<[T](../../global-decls/sincos.html#typeparam-T), [N](../../global-decls/sincos.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[sincos](../../global-decls/sincos.html)\<[T](../../global-decls/sincos.html#typeparam-T), [N](../../global-decls/sincos.html#decl-N) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[sincos](../../global-decls/sincos.html)\<[T](../../global-decls/sincos.html#typeparam-T), [N](../../global-decls/sincos.html#decl-N), [M](../../global-decls/sincos.html#decl-M), [L1](../../global-decls/sincos.html#decl-L1), [L2](../../global-decls/sincos.html#decl-L2) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sincos](../../global-decls/sincos.html)\<[T](../../global-decls/sincos.html#typeparam-T), [N](../../global-decls/sincos.html#decl-N), [M](../../global-decls/sincos.html#decl-M), [L1](../../global-decls/sincos.html#decl-L1), [L2](../../global-decls/sincos.html#decl-L2) \>\>

## Description

Sine and cosine.
Calculate both the sine and cosine of <span class='code'>x</span>.

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* bwd\_diff
* apply\_bwd
* fwd\_diff
* remat

## Conditional Conformances

### Conformance to IBackwardDifferentiable\<sincos\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<sincos<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<sincos\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sincos<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<sincos\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sincos<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<sincos\<T, N\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<sincos<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<sincos\<T, N, M, L1, L2\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<sincos<T, N, M, L1, L2>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<sincos\<T, N, M, L1, L2\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sincos<T, N, M, L1, L2>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
