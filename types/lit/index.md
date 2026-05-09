---
layout: stdlib-reference
---

# extension lit : IBackwardDifferentiable\<lit\>

*Conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[lit](../../global-decls/lit.html)\>

*Conditionally conforms to:* [IBackwardDifferentiable](../../interfaces/ibackwarddifferentiable-019/index.html)\<[lit](../../global-decls/lit.html)\>, [IForwardDifferentiable](../../interfaces/iforwarddifferentiable-018/index.html)\<[lit](../../global-decls/lit.html)\>

> #### Deprecated Feature
> The feature described in this page is marked as deprecated, and may be removed in a future release.
> Users are advised to avoid using this feature, and to migrate to a newer alternative.

## Description

Legacy lighting function (obsolete).


## Methods

* bwd\_diff
* apply\_bwd
* fwd\_diff
* remat

## Conditional Conformances

### Conformance to IBackwardDifferentiable\<lit\>
`` additionally conforms to `IBackwardDifferentiable<lit>`.
### Conformance to IForwardDifferentiable\<lit\>
`` additionally conforms to `IForwardDifferentiable<lit>`.
## Remarks

In HLSL, this function is implemented as an intrinsic. It is emulated for other targets.

