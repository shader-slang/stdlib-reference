---
layout: stdlib-reference
---

# struct vector\<T, N:int\>

*Conforms to:* IRWArray\<T\>

*Conditionally conforms to:* [IFloat](/stdlib-reference/interfaces/IFloat/index)

## Description

An `N` component vector with elements of type `T`.

## Generic Parameters

* T
* N : int =4

## Methods

* [getCount](/stdlib-reference/types/vector/getCount)
* [lessThan](/stdlib-reference/types/vector/lessThan)
* [lessThanOrEquals](/stdlib-reference/types/vector/lessThanOrEquals)
* [equals](/stdlib-reference/types/vector/equals)
* [add](/stdlib-reference/types/vector/add)
* [sub](/stdlib-reference/types/vector/sub)
* [mul](/stdlib-reference/types/vector/mul)
* [div](/stdlib-reference/types/vector/div)
* [mod](/stdlib-reference/types/vector/mod)
* [neg](/stdlib-reference/types/vector/neg)
* [scale](/stdlib-reference/types/vector/scale)
* [toFloat](/stdlib-reference/types/vector/toFloat)
* [dzero](/stdlib-reference/types/vector/dzero)
* [dadd](/stdlib-reference/types/vector/dadd)
* [dmul](/stdlib-reference/types/vector/dmul)
* [init](/stdlib-reference/types/vector/init)

## Conditional Conformances

### Conformance to IFloat
`vector<T, N:int>` additionally conforms to `IFloat` when the following conditions are met:

  * T : [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index)
