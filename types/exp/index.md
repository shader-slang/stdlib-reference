---
layout: stdlib-reference
---

# extension exp\<T\> : IForwardDifferentiable\<exp\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[exp](../../global-decls/exp.html)\<[T](../../global-decls/exp.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[exp](../../global-decls/exp.html)\<[T](../../global-decls/exp.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[exp](../../global-decls/exp.html)\<[T](../../global-decls/exp.html#typeparam-T), [N](../../global-decls/exp.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[exp](../../global-decls/exp.html)\<[T](../../global-decls/exp.html#typeparam-T), [N](../../global-decls/exp.html#decl-N), [M](../../global-decls/exp.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<exp\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<exp<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<exp\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<exp<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<exp\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<exp<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
