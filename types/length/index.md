---
layout: stdlib-reference
---

# extension length\<T, N\> : IForwardDifferentiable\<length\<T, N\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[length](../../global-decls/length.html)\<[T](../../global-decls/length.html#typeparam-T), [N](../../global-decls/length.html#decl-N) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[length](../../global-decls/length.html)\<[T](../../global-decls/length.html#typeparam-T), [N](../../global-decls/length.html#decl-N) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<length\<T, N\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<length<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
