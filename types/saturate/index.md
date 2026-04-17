---
layout: stdlib-reference
---

# extension saturate\<T\> : IForwardDifferentiable\<saturate\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[saturate](../../global-decls/saturate.html)\<[T](../../global-decls/saturate.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[saturate](../../global-decls/saturate.html)\<[T](../../global-decls/saturate.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[saturate](../../global-decls/saturate.html)\<[T](../../global-decls/saturate.html#typeparam-T), [N](../../global-decls/saturate.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[saturate](../../global-decls/saturate.html)\<[T](../../global-decls/saturate.html#typeparam-T), [N](../../global-decls/saturate.html#decl-N), [M](../../global-decls/saturate.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<saturate\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<saturate<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<saturate\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<saturate<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<saturate\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<saturate<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
