---
layout: stdlib-reference
---

# struct Tuple\<each T\>

*Conditionally conforms to:* [IComparable](/stdlib-reference/interfaces/IComparable/index)

## Generic Parameters

#### T {#typeparam-T}

## Methods

* [init](/stdlib-reference/types/Tuple/init)
* [lessThan](/stdlib-reference/types/Tuple/lessThan)
* [lessThanOrEquals](/stdlib-reference/types/Tuple/lessThanOrEquals)
* [equals](/stdlib-reference/types/Tuple/equals)

## Conditional Conformances

### Conformance to IComparable
`Tuple<each T>` additionally conforms to `IComparable` when the following conditions are met:

  * [T](/stdlib-reference/types/Tuple/index#typeparam-T) : [IComparable](/stdlib-reference/interfaces/IComparable/index)
