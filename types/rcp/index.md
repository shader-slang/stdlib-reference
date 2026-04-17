---
layout: stdlib-reference
---

# extension rcp\<T\> : IForwardDifferentiable\<rcp\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[rcp](../../global-decls/rcp.html)\<[T](../../global-decls/rcp.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[rcp](../../global-decls/rcp.html)\<[T](../../global-decls/rcp.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[rcp](../../global-decls/rcp.html)\<[T](../../global-decls/rcp.html#typeparam-T), [N](../../global-decls/rcp.html#decl-N) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[rcp](../../global-decls/rcp.html)\<[T](../../global-decls/rcp.html#typeparam-T), [N](../../global-decls/rcp.html#decl-N), [M](../../global-decls/rcp.html#decl-M) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<rcp\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<rcp<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<rcp\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<rcp<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<rcp\<T, N, M\>\>
`<T>` additionally conforms to `IForwardDifferentiable<rcp<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
