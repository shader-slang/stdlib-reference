---
layout: stdlib-reference
---

# interface IBackwardDifferentiable\<FType\>

## Generic Parameters

####  <a id="typeparam-FType"></a>FType

## Associated types

#### _BwdCallable

-> intermediate_context_type 

Constraints:

  - IBackwardDifferentiable\<FType\>\.This\.BwdCallable : IBwdCallable\<FType\>
#### _MinimalContext

-> minimal_context_type 

## Methods

* [apply\_bwd](apply_bwd)
* [remat](remat)
* [bwd\_diff](bwd_diff)


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

apply_bwd <apply_bwd>
bwd_diff <bwd_diff>
remat <remat>
```
RTD-TOC-END -->
