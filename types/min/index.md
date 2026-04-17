---
layout: stdlib-reference
---

# extension min\<T, N\> : IForwardDifferentiable\<min\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[min](../../global-decls/min.html)\<[T](../../global-decls/min.html#typeparam-T), [N](../../global-decls/min.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[min](../../global-decls/min.html)\<[T](../../global-decls/min.html#typeparam-T), [N](../../global-decls/min.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[min](../../global-decls/min.html)\<[T](../../global-decls/min.html#typeparam-T), [N](../../global-decls/min.html#decl-N), [M](../../global-decls/min.html#decl-M) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[min](../../global-decls/min.html)\<[T](../../global-decls/min.html#typeparam-T) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<min\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<min<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<min\<T, N, M\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<min<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<min\<T\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<min<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
