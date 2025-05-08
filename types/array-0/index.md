---
layout: stdlib-reference
---

# struct Array\<T, N:int\>

*Conforms to:* [IRWArray](../../interfaces/irwarray-0123/index.html)\<[T](../../interfaces/irwarray-0123/index.html#typeparam-T)\>

*Conditionally conforms to:* [IDifferentiable](../../interfaces/idifferentiable-01/index.html), [IDifferentiablePtrType](../../interfaces/idifferentiableptrtype-01fi/index.html)

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

  * [T](index.html#typeparam-T) : [IDifferentiable](../../interfaces/idifferentiable-01/index.html)
### Conformance to IDifferentiablePtrType
`Array<T, N:int>` additionally conforms to `IDifferentiablePtrType` when the following conditions are met:

  * [T](index.html#typeparam-T) : [IDifferentiablePtrType](../../interfaces/idifferentiableptrtype-01fi/index.html)

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
