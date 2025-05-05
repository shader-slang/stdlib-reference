---
layout: stdlib-reference
---

# struct CoopVec\<T, N:int\>

*Conforms to:* [IArray](../../interfaces/iarray-01/index)\<[T](../../interfaces/iarray-01/index#typeparam-T)\>, [IArithmetic](../../interfaces/iarithmetic-01/index)

## Description

Represents a Cooperative Vector type that is for matrix-vector multiplication that
can take an advantage of the hardware acceleration. It can be used for evaluations
of neural network in graphics and compute pipeline.

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../../interfaces/0_builtinarithmetictype-029j/index)
The element type of the CoopVec.

####  <a id="decl-N"></a>N  : int
The vector size.


## Methods

* [init](init)
* [copyFrom](copyfrom-4)
* [fill](fill)
* [store](store)
* [storeAny](storeany-5)
* [load](load)
* [loadAny](loadany-4)
* [getCount](getcount-3)
* [subscript](subscript)
* [replicate](replicate)
* [equals](equals)
* [lessThan](lessthan-4)
* [lessThanOrEquals](lessthanorequals-48a)
* [add](add)
* [sub](sub)
* [mul](mul)
* [div](div)
* [mod](mod)
* [neg](neg)
* [matMulAccumPacked](matmulaccumpacked-36b)
* [matMulAccum](matmulaccum-36)
* [matMulAddAccumPacked](matmuladdaccumpacked-369e)
* [matMulAddAccum](matmuladdaccum-369)


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

add <add>
copyFrom <copyfrom-4>
div <div>
equals <equals>
fill <fill>
getCount <getcount-3>
init <init>
lessThan <lessthan-4>
lessThanOrEquals <lessthanorequals-48a>
load <load>
loadAny <loadany-4>
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
sub <sub>
subscript <subscript>
```
RTD-TOC-END -->
