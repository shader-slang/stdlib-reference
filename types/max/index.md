---
layout: stdlib-reference
---

# extension max\<T, N\> : IForwardDifferentiable\<max\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[max](../../global-decls/max.html)\<[T](../../global-decls/max.html#typeparam-T), [N](../../global-decls/max.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[max](../../global-decls/max.html)\<[T](../../global-decls/max.html#typeparam-T), [N](../../global-decls/max.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[max](../../global-decls/max.html)\<[T](../../global-decls/max.html#typeparam-T), [N](../../global-decls/max.html#decl-N), [M](../../global-decls/max.html#decl-M) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[max](../../global-decls/max.html)\<[T](../../global-decls/max.html#typeparam-T) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<max\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<max<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<max\<T, N, M\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<max<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<max\<T\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<max<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
