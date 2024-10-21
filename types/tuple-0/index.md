---
layout: stdlib-reference
---

# struct Tuple\<each T\>

*Conditionally conforms to:* [IComparable](/stdlib-reference/interfaces/icomparable-01/index)

## Description

A variadic generic storing the product of several types.

The member names of individual values are <span class='code'>_0</span>, <span class='code'>_1</span>, <span class='code'>_2</span>, ...

New tuples can also be constructed by swizzling an existing tuple with the
concatenation of these names, for example <span class='code'>x._2_1_0</span> will return the first
three members of the tuple <span class='code'>x</span> in reverse order.

When all tuple elements conform to <span class='code'><a href="/stdlib-reference/interfaces/icomparable-01/index" class="code_type">IComparable</a></span> tuples can themselves be
compared according to a lexicographic ordering.

The number of elements in a tuple is given by the <span class='code'>countof</span> function.


## Generic Parameters

#### T {#typeparam-T}

## Methods

* [init](/stdlib-reference/types/tuple-0/init)
* [lessThan](/stdlib-reference/types/tuple-0/lessthan-4)
* [lessThanOrEquals](/stdlib-reference/types/tuple-0/lessthanorequals-48a)
* [equals](/stdlib-reference/types/tuple-0/equals)

## Conditional Conformances

### Conformance to IComparable
`Tuple<each T>` additionally conforms to `IComparable` when the following conditions are met:

  * [T](/stdlib-reference/types/tuple-0/index#typeparam-T) : [IComparable](/stdlib-reference/interfaces/icomparable-01/index)
