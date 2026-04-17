---
layout: stdlib-reference
---

# extension tanh\<T\> : IForwardDifferentiable\<tanh\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[tanh](../../global-decls/tanh.html)\<[T](../../global-decls/tanh.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[tanh](../../global-decls/tanh.html)\<[T](../../global-decls/tanh.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[tanh](../../global-decls/tanh.html)\<[T](../../global-decls/tanh.html#typeparam-T), [N](../../global-decls/tanh.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[tanh](../../global-decls/tanh.html)\<[T](../../global-decls/tanh.html#typeparam-T), [N](../../global-decls/tanh.html#decl-N), [M](../../global-decls/tanh.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<tanh\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<tanh<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<tanh\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<tanh<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<tanh\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<tanh<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
