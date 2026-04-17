---
layout: stdlib-reference
---

# extension sinh\<T\> : IForwardDifferentiable\<sinh\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sinh](../../global-decls/sinh.html)\<[T](../../global-decls/sinh.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sinh](../../global-decls/sinh.html)\<[T](../../global-decls/sinh.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sinh](../../global-decls/sinh.html)\<[T](../../global-decls/sinh.html#typeparam-T), [N](../../global-decls/sinh.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sinh](../../global-decls/sinh.html)\<[T](../../global-decls/sinh.html#typeparam-T), [N](../../global-decls/sinh.html#decl-N), [M](../../global-decls/sinh.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<sinh\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sinh<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<sinh\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sinh<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<sinh\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sinh<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
