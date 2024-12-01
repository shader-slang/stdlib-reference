---
layout: stdlib-reference
---

# interface IDifferentiable

## Description

Represents a type that is differentiable for the purposes of automatic differentiation.

Implemented by builtin floating-point scalar types (<span class='code'><span class="code_keyword">float</span></span>, <span class='code'><span class="code_keyword">half</span></span>, <span class='code'><span class="code_keyword">double</span></span>)

vector<T, N>, matrix<T, N, M> and Array<T, N> automatically conform to
<span class='code'><a href="/stdlib-reference/interfaces/idifferentiable-01/index" class="code_type">IDifferentiable</a></span> if <span class='code'>T</span> conforms to <span class='code'><a href="/stdlib-reference/interfaces/idifferentiable-01/index" class="code_type">IDifferentiable</a></span>.


# Associated types

#### _Differential



Constraints:

  - IDifferentiable\.This\.Differential : IDifferentiable


## Methods

* [dzero](/stdlib-reference/interfaces/idifferentiable-01/dzero)
* [dadd](/stdlib-reference/interfaces/idifferentiable-01/dadd)
* [dmul](/stdlib-reference/interfaces/idifferentiable-01/dmul)

## Remarks

Types that implement <span class='code'><a href="/stdlib-reference/interfaces/idifferentiable-01/index" class="code_type">IDifferentiable</a></span> can be used with the automatic differentiation
primitives <span class='code'>bwd_diff</span> and <span class='code'>fwd_diff</span> to load and store gradients of parameters.
This interface supports automatic synthesis of requirements. A struct that conforms to <span class='code'><a href="/stdlib-reference/interfaces/idifferentiable-01/index" class="code_type">IDifferentiable</a></span>
will have its <span class='code'>Differential</span>, <span class='code'><a href="/stdlib-reference/interfaces/idifferentiable-01/dzero">dzero</a>()</span> and <span class='code'><a href="/stdlib-reference/interfaces/idifferentiable-01/dadd">dadd</a>()</span> methods automatically synthesized based on its fields, if
they are not already defined.


