---
layout: stdlib-reference
---

# extension copysign\<T\> : IForwardDifferentiable\<copysign\<T\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[copysign](../../global-decls/copysign.html)\<[T](../../global-decls/copysign.html#typeparam-T) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[copysign](../../global-decls/copysign.html)\<[T](../../global-decls/copysign.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[copysign](../../global-decls/copysign.html)\<[T](../../global-decls/copysign.html#typeparam-T), [N](../../global-decls/copysign.html#decl-N) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<copysign\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<copysign<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<copysign\<T, N\>\>
`<T>` additionally conforms to `IForwardDifferentiable<copysign<T, N>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
