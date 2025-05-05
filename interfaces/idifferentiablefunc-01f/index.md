---
layout: stdlib-reference
---

# interface IDifferentiableFunc\<TR, each TP\>

*Inherits from:* [IFunc](/stdlib-reference/interfaces/ifunc-01/index)\<[TR](/stdlib-reference/interfaces/ifunc-01/index#typeparam-TR), [TP](/stdlib-reference/interfaces/ifunc-01/index#typeparam-TP)\>, [IDifferentiableMutatingFunc](/stdlib-reference/interfaces/idifferentiablemutatingfunc-01fn/index)\<[TR](/stdlib-reference/interfaces/idifferentiablemutatingfunc-01fn/index#typeparam-TR), [TP](/stdlib-reference/interfaces/idifferentiablemutatingfunc-01fn/index#typeparam-TP)\>

## Description

Represents an interface for a function that can take multiple differentiable parameters and supports differentiation.
This interface inherits from both <span class='code'><a href="/stdlib-reference/interfaces/ifunc-01/index" class="code_type">IFunc</a></span> and <span class='code'><a href="/stdlib-reference/interfaces/idifferentiablemutatingfunc-01fn/index" class="code_type">IDifferentiableMutatingFunc</a></span> but is used for non-mutating differentiable functions.


## Generic Parameters

#### TR: [IDifferentiable](/stdlib-reference/interfaces/idifferentiable-01/index) {#typeparam-TR}
#### TP: [IDifferentiable](/stdlib-reference/interfaces/idifferentiable-01/index) {#typeparam-TP}

## Methods

* [operator\(\)](/stdlib-reference/interfaces/idifferentiablefunc-01f/operatorx28x29)

