---
layout: stdlib-reference
---

# struct Array\<T, N:int\>

*Conforms to:* [IRWArray](../../interfaces/irwarray-0123/index)\<[T](../../interfaces/irwarray-0123/index#typeparam-T)\>

*Conditionally conforms to:* [IDifferentiable](../../interfaces/idifferentiable-01/index), [IDifferentiablePtrType](../../interfaces/idifferentiableptrtype-01fi/index)

## Generic Parameters

####  <a id="typeparam-T"></a>T
####  <a id="decl-N"></a>N  : int

## Methods

* [getCount](getcount-3)
* [dzero](dzero)
* [dadd](dadd)
* [dmul](dmul)

## Conditional Conformances

### Conformance to IDifferentiable
`Array<T, N:int>` additionally conforms to `IDifferentiable` when the following conditions are met:

  * [T](index#typeparam-T) : [IDifferentiable](../../interfaces/idifferentiable-01/index)
### Conformance to IDifferentiablePtrType
`Array<T, N:int>` additionally conforms to `IDifferentiablePtrType` when the following conditions are met:

  * [T](index#typeparam-T) : [IDifferentiablePtrType](../../interfaces/idifferentiableptrtype-01fi/index)

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

Differential <differential-0>
dadd <dadd>
dmul <dmul>
dzero <dzero>
getCount <getcount-3>
```
RTD-TOC-END -->
