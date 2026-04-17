---
layout: stdlib-reference
---

# extension refract\<T, N\> : IForwardDifferentiable\<refract\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[refract](../../global-decls/refract.html)\<[T](../../global-decls/refract.html#typeparam-T), [N](../../global-decls/refract.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[refract](../../global-decls/refract.html)\<[T](../../global-decls/refract.html#typeparam-T), [N](../../global-decls/refract.html#decl-N) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<refract\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<refract<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
