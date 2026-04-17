---
layout: stdlib-reference
---

# extension sqrt\<T\> : IForwardDifferentiable\<sqrt\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sqrt](../../global-decls/sqrt.html)\<[T](../../global-decls/sqrt.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sqrt](../../global-decls/sqrt.html)\<[T](../../global-decls/sqrt.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sqrt](../../global-decls/sqrt.html)\<[T](../../global-decls/sqrt.html#typeparam-T), [N](../../global-decls/sqrt.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[sqrt](../../global-decls/sqrt.html)\<[T](../../global-decls/sqrt.html#typeparam-T), [N](../../global-decls/sqrt.html#decl-N), [M](../../global-decls/sqrt.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<sqrt\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sqrt<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<sqrt\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sqrt<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<sqrt\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<sqrt<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
