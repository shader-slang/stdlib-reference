---
layout: stdlib-reference
---

# struct Array\<T, N:int\>

*Conforms to:* [IRWArray](/stdlib-reference/interfaces/irwarray-0123/index)\<[T](/stdlib-reference/interfaces/irwarray-0123/index#typeparam-T)\>

*Conditionally conforms to:* [IDifferentiable](/stdlib-reference/interfaces/idifferentiable-01/index), [IDifferentiablePtrType](/stdlib-reference/interfaces/idifferentiableptrtype-01fi/index)

## Generic Parameters

#### T {#typeparam-T}
#### N  : int {#decl-N}

## Methods

* [getCount](/stdlib-reference/types/array-0/getcount-3)
* [dzero](/stdlib-reference/types/array-0/dzero)
* [dadd](/stdlib-reference/types/array-0/dadd)
* [dmul](/stdlib-reference/types/array-0/dmul)

## Conditional Conformances

### Conformance to IDifferentiable
`Array<T, N:int>` additionally conforms to `IDifferentiable` when the following conditions are met:

  * [T](/stdlib-reference/types/array-0/index#typeparam-T) : [IDifferentiable](/stdlib-reference/interfaces/idifferentiable-01/index)
### Conformance to IDifferentiablePtrType
`Array<T, N:int>` additionally conforms to `IDifferentiablePtrType` when the following conditions are met:

  * [T](/stdlib-reference/types/array-0/index#typeparam-T) : [IDifferentiablePtrType](/stdlib-reference/interfaces/idifferentiableptrtype-01fi/index)
