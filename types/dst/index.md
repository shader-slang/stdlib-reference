---
layout: stdlib-reference
---

# extension dst\<T\> : IBackwardDifferentiable\<dst\<T\>\>

*Conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[dst](../../global-decls/dst.html)\<[T](../../global-decls/dst.html#typeparam-T) \>\>

*Conditionally conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[dst](../../global-decls/dst.html)\<[T](../../global-decls/dst.html#typeparam-T) \>\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[dst](../../global-decls/dst.html)\<[T](../../global-decls/dst.html#typeparam-T) \>\>

> #### Deprecated Feature
> The feature described in this page is marked as deprecated, and may be removed in a future release.
> Users are advised to avoid using this feature, and to migrate to a newer alternative.

## Description

Helper for computing distance terms for lighting (obsolete).
Use the subtraction operator '-' instead.


## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

## Methods

* bwd\_diff
* [apply\_bwd](apply_bwd)
* [fwd\_diff](fwd_diff)
* [remat](remat)

## Conditional Conformances

### Conformance to IBackwardDifferentiable\<dst\<T\>\>
`<T>` additionally conforms to `IBackwardDifferentiable<dst<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IForwardDifferentiable\<dst\<T\>\>
`<T>` additionally conforms to `IForwardDifferentiable<dst<T>>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

Math functions <math>
```
RTD-TOC-END -->
