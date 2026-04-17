---
layout: stdlib-reference
---

# extension dot\<T, N\> : IForwardDifferentiable\<dot\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[dot](../../global-decls/dot.html)\<[T](../../global-decls/dot.html#typeparam-T), [N](../../global-decls/dot.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[dot](../../global-decls/dot.html)\<[T](../../global-decls/dot.html#typeparam-T), [N](../../global-decls/dot.html#decl-N) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<dot\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<dot<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
