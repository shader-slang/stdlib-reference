---
layout: stdlib-reference
---

# extension mul\<T, N, M\> : IForwardDifferentiable\<mul\<T, N, M\>\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[mul](../../global-decls/mul.html)\<[T](../../global-decls/mul.html#typeparam-T), [N](../../global-decls/mul.html#decl-N), [M](../../global-decls/mul.html#decl-M) \>\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[mul](../../global-decls/mul.html)\<[T](../../global-decls/mul.html#typeparam-T), [N](../../global-decls/mul.html#decl-N), [M](../../global-decls/mul.html#decl-M) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[mul](../../global-decls/mul.html)\<[T](../../global-decls/mul.html#typeparam-T), [R](../../global-decls/mul.html#decl-R), [N](../../global-decls/mul.html#decl-N), [C](../../global-decls/mul.html#decl-C) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Methods

* fwd\_diff

## Conditional Conformances

### Conformance to IForwardDifferentiable\<mul\<T, N, M\>\>
`<T, int N, int M>` additionally conforms to `IForwardDifferentiable<mul<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<mul\<T, N, M\>\>
`<T, int N, int M>` additionally conforms to `IForwardDifferentiable<mul<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<mul\<T, R, N, C\>\>
`<T, int N, int M>` additionally conforms to `IForwardDifferentiable<mul<T, R, N, C>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
