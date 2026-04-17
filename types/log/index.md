---
layout: stdlib-reference
---

# extension log\<T\> : IForwardDifferentiable\<log\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[log](../../global-decls/log.html)\<[T](../../global-decls/log.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[log](../../global-decls/log.html)\<[T](../../global-decls/log.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[log](../../global-decls/log.html)\<[T](../../global-decls/log.html#typeparam-T), [N](../../global-decls/log.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[log](../../global-decls/log.html)\<[T](../../global-decls/log.html#typeparam-T), [N](../../global-decls/log.html#decl-N), [M](../../global-decls/log.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<log\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<log<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<log\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<log<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<log\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<log<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
