---
layout: stdlib-reference
---

# struct CoopVec\<T, int N\>

*Conforms to:* [IArray](../../interfaces/iarray-01/index.html)\<[T](../../interfaces/iarray-01/index.html#typeparam-T)\>, [IArithmetic](../../interfaces/iarithmetic-01/index.html)

*Conditionally conforms to:* [IDifferentiable](../../interfaces/idifferentiable-01/index.html), [IDifferentiableArithmetic](../../interfaces/idifferentiablearithmetic-01f/index.html)

## Description

Represents a Cooperative Vector type that is for matrix-vector multiplication that
can take an advantage of the hardware acceleration. It can be used for evaluations
of neural network in graphics and compute pipeline.

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../../interfaces/0_builtinarithmetictype-029j/index.html)
The element type of the CoopVec.

####  <a id="decl-N"></a>N  : int
The vector size.


## Methods

* [copyFrom](copyfrom-4)
* [fill](fill)
* [storeCoherent](storecoherent-5)
* [store](store)
* [storeAny](storeany-5)
* [loadCoherent](loadcoherent-4)
* [load](load)
* [loadAny](loadany-4)
* [getCount](getcount-3)
* [subscript](subscript)
* [replicate](replicate)
* [equals](equals)
* [lessThan](lessthan-4)
* [lessThanOrEquals](lessthanorequals-48a)
* [mod](mod)
* [matMulAccumPacked](matmulaccumpacked-36b)
* [matMulAccum](matmulaccum-36)
* [matMulAddAccumPacked](matmuladdaccumpacked-369e)
* [matMulAddAccum](matmuladdaccum-369)
* [dzero](dzero)
* [dadd](dadd)
* [init](init)
* [add](add)
* [sub](sub)
* [mul](mul)
* [div](div)
* [neg](neg)

## Conditional Conformances

### Conformance to IDifferentiable
`CoopVec<T, int N>` additionally conforms to `IDifferentiable` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
### Conformance to IDifferentiableArithmetic
`CoopVec<T, int N>` additionally conforms to `IDifferentiableArithmetic` when the following conditions are met:

  * [T](index.html#typeparam-T) : [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

Differential <differential-0>
add <add>
copyFrom <copyfrom-4>
dadd <dadd>
div <div>
dzero <dzero>
equals <equals>
fill <fill>
getCount <getcount-3>
init <init>
lessThan <lessthan-4>
lessThanOrEquals <lessthanorequals-48a>
load <load>
loadAny <loadany-4>
loadCoherent <loadcoherent-4>
matMulAccum <matmulaccum-36>
matMulAccumPacked <matmulaccumpacked-36b>
matMulAddAccum <matmuladdaccum-369>
matMulAddAccumPacked <matmuladdaccumpacked-369e>
mod <mod>
mul <mul>
neg <neg>
replicate <replicate>
store <store>
storeAny <storeany-5>
storeCoherent <storecoherent-5>
sub <sub>
subscript <subscript>
```
RTD-TOC-END -->
