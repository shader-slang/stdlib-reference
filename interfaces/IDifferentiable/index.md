---
layout: stdlib-reference
---

# interface IDifferentiable

## Description

Interface to denote types as differentiable.
Allows for user-specified differential types as
well as automatic generation, for when the associated type
hasn't been declared explicitly.
Note that the requirements must currently be defined in this exact order
since the auto-diff pass relies on the order to grab the struct keys.


# Associated types

* _Differential_ 
  ``


## Methods

* [dzero](/stdlib-reference/interfaces/IDifferentiable/dzero)
* [dadd](/stdlib-reference/interfaces/IDifferentiable/dadd)
* [dmul](/stdlib-reference/interfaces/IDifferentiable/dmul)

