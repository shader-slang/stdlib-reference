---
layout: stdlib-reference
---

# struct vector\<T, N:int\>

*Conforms to:* [IRWArray](../../interfaces/irwarray-0123/index)\<[T](../../interfaces/irwarray-0123/index#typeparam-T)\>

*Conditionally conforms to:* [IInteger](../../interfaces/iinteger-01/index), [IFloat](../../interfaces/ifloat-01/index), [IDifferentiable](../../interfaces/idifferentiable-01/index), [ITexelElement](../../interfaces/itexelelement-016/index)

## Description

An <span class='code'><a href="index.html#decl-N" class="code_var">N</a></span> component vector with elements of type <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span>.


## Generic Parameters

####  <a id="typeparam-T"></a>T  = float
####  <a id="decl-N"></a>N  : int = 4

## Fields

####  <a id="decl-elementCount"></a>[elementCount](elementcount-7) : int = 2

## Methods

* [getCount](getcount-3)
* [shl](shl)
* [shr](shr)
* [bitAnd](bitand-3)
* [bitOr](bitor-3)
* [bitXor](bitxor-3)
* [bitNot](bitnot-3)
* [and](and)
* [or](or)
* [not](not)
* [toInt](toint-2)
* [toInt64](toint64-2)
* [toUInt](touint-23)
* [toUInt64](touint64-23)
* [lessThan](lessthan-4)
* [lessThanOrEquals](lessthanorequals-48a)
* [equals](equals)
* [add](add)
* [sub](sub)
* [mul](mul)
* [div](div)
* [mod](mod)
* [neg](neg)
* [scale](scale)
* [toFloat](tofloat-2)
* [dzero](dzero)
* [dadd](dadd)
* [dmul](dmul)
* operator$init

## Conditional Conformances

### Conformance to IInteger
`vector<T, N:int>` additionally conforms to `IInteger` when the following conditions are met:

  * [T](index#typeparam-T) : [\_\_BuiltinIntegerType](../../interfaces/0_builtinintegertype-029g/index)
### Conformance to IFloat
`vector<T, N:int>` additionally conforms to `IFloat` when the following conditions are met:

  * [T](index#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index)
### Conformance to IDifferentiable
`vector<T, N:int>` additionally conforms to `IDifferentiable` when the following conditions are met:

  * [T](index#typeparam-T) : [IDifferentiable](../../interfaces/idifferentiable-01/index)
### Conformance to ITexelElement
`vector<T, N:int>` additionally conforms to `ITexelElement` when the following conditions are met:

  * [T](index#typeparam-T) == half
### Conformance to ITexelElement
`vector<T, N:int>` additionally conforms to `ITexelElement` when the following conditions are met:

  * [T](index#typeparam-T) == float
### Conformance to ITexelElement
`vector<T, N:int>` additionally conforms to `ITexelElement` when the following conditions are met:

  * [T](index#typeparam-T) == int
### Conformance to ITexelElement
`vector<T, N:int>` additionally conforms to `ITexelElement` when the following conditions are met:

  * [T](index#typeparam-T) == uint
### Conformance to ITexelElement
`vector<T, N:int>` additionally conforms to `ITexelElement` when the following conditions are met:

  * [T](index#typeparam-T) == int8\_t
### Conformance to ITexelElement
`vector<T, N:int>` additionally conforms to `ITexelElement` when the following conditions are met:

  * [T](index#typeparam-T) == int16\_t
### Conformance to ITexelElement
`vector<T, N:int>` additionally conforms to `ITexelElement` when the following conditions are met:

  * [T](index#typeparam-T) == uint8\_t
### Conformance to ITexelElement
`vector<T, N:int>` additionally conforms to `ITexelElement` when the following conditions are met:

  * [T](index#typeparam-T) == uint16\_t
### Conformance to ITexelElement
`vector<T, N:int>` additionally conforms to `ITexelElement` when the following conditions are met:

  * [T](index#typeparam-T) == double
  * [N](index#decl-N) == 2
### Conformance to ITexelElement
`vector<T, N:int>` additionally conforms to `ITexelElement` when the following conditions are met:

  * [T](index#typeparam-T) == uint64\_t
  * [N](index#decl-N) == 2
### Conformance to ITexelElement
`vector<T, N:int>` additionally conforms to `ITexelElement` when the following conditions are met:

  * [T](index#typeparam-T) == int64\_t
  * [N](index#decl-N) == 2

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

Differential <differential-0>
Element <element-0>
add <add>
and <and>
bitAnd <bitand-3>
bitNot <bitnot-3>
bitOr <bitor-3>
bitXor <bitxor-3>
dadd <dadd>
div <div>
dmul <dmul>
dzero <dzero>
elementCount <elementcount-7>
equals <equals>
getCount <getcount-3>
init <init>
lessThan <lessthan-4>
lessThanOrEquals <lessthanorequals-48a>
mod <mod>
mul <mul>
neg <neg>
not <not>
or <or>
scale <scale>
shl <shl>
shr <shr>
sub <sub>
toFloat <tofloat-2>
toInt <toint-2>
toInt64 <toint64-2>
toUInt <touint-23>
toUInt64 <touint64-23>
```
RTD-TOC-END -->
