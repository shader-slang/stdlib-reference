---
layout: stdlib-reference
---

# extension vector\<T,N\>\.mul : IForwardDifferentiable\<vector\<T,N\>\.mul\>

*Conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[mul](../vector/mul.html)\>

*Conditionally conforms to:* [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[mul](../vector/mul.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[vector](../vector/index.html)\<[T](../vector/index.html#typeparam-T), [N](../vector/index.html#decl-N)\>\.[mul](../vector/mul.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[mul](../matrix/mul.html)\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[matrix](../matrix/index.html)\<[T](../matrix/t-0.html), [N](../matrix/index.html#decl-N), [M](../matrix/index.html#decl-M)\>\.[mul](../matrix/mul.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[mul](../../global-decls/mul.html)\<[T](../../global-decls/mul.html#typeparam-T), [N](../../global-decls/mul.html#decl-N), [M](../../global-decls/mul.html#decl-M) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[mul](../../global-decls/mul.html)\<[T](../../global-decls/mul.html#typeparam-T), [N](../../global-decls/mul.html#decl-N), [M](../../global-decls/mul.html#decl-M) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[mul](../../global-decls/mul.html)\<[T](../../global-decls/mul.html#typeparam-T), [R](../../global-decls/mul.html#decl-R), [N](../../global-decls/mul.html#decl-N), [C](../../global-decls/mul.html#decl-C) \>\>, [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[mul](../../global-decls/mul.html)\<[T](../../global-decls/mul.html#typeparam-T), [R](../../global-decls/mul.html#decl-R), [N](../../global-decls/mul.html#decl-N), [C](../../global-decls/mul.html#decl-C) \>\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Methods

* bwd\_diff
* [apply\_bwd](apply_bwd)
* fwd\_diff
* [remat](remat)

## Conditional Conformances

### Conformance to IForwardDifferentiable\<vector\<T,N\>\.mul\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<vector<T,N>.mul>`.
### Conformance to IBackwardDifferentiable\<vector\<T,N\>\.mul\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<vector<T,N>.mul>`.
### Conformance to IForwardDifferentiable\<matrix\<T,N,M\>\.mul\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<matrix<T,N,M>.mul>`.
### Conformance to IBackwardDifferentiable\<matrix\<T,N,M\>\.mul\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<matrix<T,N,M>.mul>`.
### Conformance to IForwardDifferentiable\<mul\<T, N, M\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<mul<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<mul\<T, N, M\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<mul<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<mul\<T, N, M\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<mul<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<mul\<T, N, M\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<mul<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<mul\<T, N, M\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<mul<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<mul\<T, N, M\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<mul<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<mul\<T, N, M\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<mul<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<mul\<T, N, M\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<mul<T, N, M>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<mul\<T, R, N, C\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<mul<T, R, N, C>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<mul\<T, R, N, C\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<mul<T, R, N, C>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<mul\<T, R, N, C\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<mul<T, R, N, C>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<mul\<T, R, N, C\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<mul<T, R, N, C>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IBackwardDifferentiable\<mul\<T, R, N, C\>\>
`<T, int N>` additionally conforms to `IBackwardDifferentiable<mul<T, R, N, C>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<mul\<T, R, N, C\>\>
`<T, int N>` additionally conforms to `IForwardDifferentiable<mul<T, R, N, C>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

BwdCallable <bwdcallable-03>
MinimalContext <minimalcontext-07>
apply_bwd <apply_bwd>
remat <remat>
```
RTD-TOC-END -->
