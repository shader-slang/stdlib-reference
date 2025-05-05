---
layout: stdlib-reference
---

# struct DiffTensorView\<T, A\>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) = float {#typeparam-T}
#### A: [IDiffTensorWrapper](/stdlib-reference/interfaces/idifftensorwrapper-015b/index) = [AtomicAdd](/stdlib-reference/types/atomicadd-06/index) {#typeparam-A}

## Fields

#### [diff](/stdlib-reference/types/difftensorview-04a/diff) : [A](/stdlib-reference/types/difftensorview-04a/index#typeparam-A) {#decl-diff}
#### [primal](/stdlib-reference/types/difftensorview-04a/primal) : [TensorView](/stdlib-reference/types/tensorview-06/index)\<[T](/stdlib-reference/types/tensorview-06/index#typeparam-T)\> {#decl-primal}

## Methods

* [size](/stdlib-reference/types/difftensorview-04a/size)
* [dims](/stdlib-reference/types/difftensorview-04a/dims)
* [stride](/stdlib-reference/types/difftensorview-04a/stride)
* [init](/stdlib-reference/types/difftensorview-04a/init)
* [load](/stdlib-reference/types/difftensorview-04a/load)
* [store](/stdlib-reference/types/difftensorview-04a/store)
* [subscript](/stdlib-reference/types/difftensorview-04a/subscript)
* [loadOnce](/stdlib-reference/types/difftensorview-04a/loadonce-4)
* [storeOnce](/stdlib-reference/types/difftensorview-04a/storeonce-5)

