---
layout: stdlib-reference
---

# struct vector\<T, N:int\>

*Conforms to:* IRWArray\<[T](/stdlib-reference/types/vector/index#typeparam-T)\>

*Conditionally conforms to:* [IFloat](/stdlib-reference/interfaces/ifloat-01/index)

## Description

An <span class='code'><a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a></span> component vector with elements of type <span class='code'><a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a></span>.


## Generic Parameters

#### T  = float {#typeparam-T}
#### N  : int = 4 {#decl-N}

## Methods

* [getCount](/stdlib-reference/types/vector/getcount-3)
* [lessThan](/stdlib-reference/types/vector/lessthan-4)
* [lessThanOrEquals](/stdlib-reference/types/vector/lessthanorequals-48a)
* [equals](/stdlib-reference/types/vector/equals)
* [add](/stdlib-reference/types/vector/add)
* [sub](/stdlib-reference/types/vector/sub)
* [mul](/stdlib-reference/types/vector/mul)
* [div](/stdlib-reference/types/vector/div)
* [mod](/stdlib-reference/types/vector/mod)
* [neg](/stdlib-reference/types/vector/neg)
* [scale](/stdlib-reference/types/vector/scale)
* [toFloat](/stdlib-reference/types/vector/tofloat-2)
* [dzero](/stdlib-reference/types/vector/dzero)
* [dadd](/stdlib-reference/types/vector/dadd)
* [dmul](/stdlib-reference/types/vector/dmul)
* [init](/stdlib-reference/types/vector/init)

## Conditional Conformances

### Conformance to IFloat
`vector<T, N:int>` additionally conforms to `IFloat` when the following conditions are met:

  * [T](/stdlib-reference/types/vector/index#typeparam-T) : [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/builtinfloatingpointtype-0129hm/index)
