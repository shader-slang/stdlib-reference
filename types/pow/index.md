---
layout: stdlib-reference
---

# extension pow\<T, N\> : IForwardDifferentiable\<pow\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[pow](../../global-decls/pow.html)\<[T](../../global-decls/pow.html#typeparam-T), [N](../../global-decls/pow.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[pow](../../global-decls/pow.html)\<[T](../../global-decls/pow.html#typeparam-T), [N](../../global-decls/pow.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[pow](../../global-decls/pow.html)\<[T](../../global-decls/pow.html#typeparam-T), [N](../../global-decls/pow.html#decl-N), [M](../../global-decls/pow.html#decl-M) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[pow](../../global-decls/pow.html)\<[T](../../global-decls/pow.html#typeparam-T) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<pow\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<pow<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<pow\<T, N, M\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<pow<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<pow\<T\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<pow<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
