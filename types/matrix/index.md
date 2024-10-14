---
layout: stdlib-reference
---

# struct matrix\<T, R:int, C:int, L:int\>

*Conforms to:* IRWArray\<[vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), C \>\>

*Conditionally conforms to:* [IFloat](/stdlib-reference/interfaces/ifloat-01/index)

## Description

A matrix with <span class='code'><a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a></span> rows and <span class='code'><a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a></span> columns, with elements of type <span class='code'><a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a></span>.


## Generic Parameters

#### T  = float {#typeparam-T}
#### R  : int = 4 {#decl-R}
#### C  : int = 4 {#decl-C}
#### L  : int = 0 {#decl-L}

## Methods

* [getCount](/stdlib-reference/types/matrix/getcount-3)
* [lessThan](/stdlib-reference/types/matrix/lessthan-4)
* [lessThanOrEquals](/stdlib-reference/types/matrix/lessthanorequals-48a)
* [equals](/stdlib-reference/types/matrix/equals)
* [add](/stdlib-reference/types/matrix/add)
* [sub](/stdlib-reference/types/matrix/sub)
* [mul](/stdlib-reference/types/matrix/mul)
* [div](/stdlib-reference/types/matrix/div)
* [mod](/stdlib-reference/types/matrix/mod)
* [neg](/stdlib-reference/types/matrix/neg)
* [scale](/stdlib-reference/types/matrix/scale)
* [toFloat](/stdlib-reference/types/matrix/tofloat-2)
* [dzero](/stdlib-reference/types/matrix/dzero)
* [dadd](/stdlib-reference/types/matrix/dadd)
* [dmul](/stdlib-reference/types/matrix/dmul)
* [init](/stdlib-reference/types/matrix/init)

## Conditional Conformances

### Conformance to IFloat
`matrix<T, R:int, C:int, L:int>` additionally conforms to `IFloat` when the following conditions are met:

  * [T](/stdlib-reference/types/matrix/t-0) : [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/builtinfloatingpointtype-0129hm/index)
