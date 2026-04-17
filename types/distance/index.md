---
layout: stdlib-reference
---

# extension distance\<T, N\> : IForwardDifferentiable\<distance\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[distance](../../global-decls/distance.html)\<[T](../../global-decls/distance.html#typeparam-T), [N](../../global-decls/distance.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[distance](../../global-decls/distance.html)\<[T](../../global-decls/distance.html#typeparam-T), [N](../../global-decls/distance.html#decl-N) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<distance\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<distance<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
