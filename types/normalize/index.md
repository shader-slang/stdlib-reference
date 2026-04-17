---
layout: stdlib-reference
---

# extension normalize\<T, N\> : IForwardDifferentiable\<normalize\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[normalize](../../global-decls/normalize.html)\<[T](../../global-decls/normalize.html#typeparam-T), [N](../../global-decls/normalize.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[normalize](../../global-decls/normalize.html)\<[T](../../global-decls/normalize.html#typeparam-T), [N](../../global-decls/normalize.html#decl-N) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<normalize\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<normalize<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
