---
layout: stdlib-reference
---

# struct vector\<T, N:int\>

*Conforms to:* [IRWArray](/stdlib-reference/interfaces/irwarray-0123/index)\<[T](/stdlib-reference/interfaces/irwarray-0123/index#typeparam-T)\>

*Conditionally conforms to:* [IInteger](/stdlib-reference/interfaces/iinteger-01/index), [IFloat](/stdlib-reference/interfaces/ifloat-01/index)

## Description

An <span class='code'><a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a></span> component vector with elements of type <span class='code'><a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a></span>.


## Generic Parameters

#### T  = float {#typeparam-T}
#### N  : int = 4 {#decl-N}

## Methods

* [getCount](/stdlib-reference/types/vector/getcount-3)
* [shl](/stdlib-reference/types/vector/shl)
* [shr](/stdlib-reference/types/vector/shr)
* [bitAnd](/stdlib-reference/types/vector/bitand-3)
* [bitOr](/stdlib-reference/types/vector/bitor-3)
* [bitXor](/stdlib-reference/types/vector/bitxor-3)
* [bitNot](/stdlib-reference/types/vector/bitnot-3)
* [and](/stdlib-reference/types/vector/and)
* [or](/stdlib-reference/types/vector/or)
* [not](/stdlib-reference/types/vector/not)
* [toInt](/stdlib-reference/types/vector/toint-2)
* [toInt64](/stdlib-reference/types/vector/toint64-2)
* [toUInt](/stdlib-reference/types/vector/touint-23)
* [toUInt64](/stdlib-reference/types/vector/touint64-23)
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

### Conformance to IInteger
`vector<T, N:int>` additionally conforms to `IInteger` when the following conditions are met:

  * [T](/stdlib-reference/types/vector/index#typeparam-T) : [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/0_builtinintegertype-029g/index)
### Conformance to IFloat
`vector<T, N:int>` additionally conforms to `IFloat` when the following conditions are met:

  * [T](/stdlib-reference/types/vector/index#typeparam-T) : [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index)
