---
layout: stdlib-reference
---

# struct CoopVec\<T, N:int\>

*Conforms to:* [IArray](/stdlib-reference/interfaces/iarray-01/index)\<[T](/stdlib-reference/interfaces/iarray-01/index#typeparam-T)\>, [IArithmetic](/stdlib-reference/interfaces/iarithmetic-01/index)

## Description

Represents a Cooperative Vector type that is for matrix-vector multiplication that
can take an advantage of the hardware acceleration. It can be used for evaluations
of neural network in graphics and compute pipeline.

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-T}
The element type of the CoopVec.

#### N  : int {#decl-N}
The vector size.


## Methods

* [init](/stdlib-reference/types/coopvec-04/init)
* [copyFrom](/stdlib-reference/types/coopvec-04/copyfrom-4)
* [fill](/stdlib-reference/types/coopvec-04/fill)
* [store](/stdlib-reference/types/coopvec-04/store)
* [storeAny](/stdlib-reference/types/coopvec-04/storeany-5)
* [load](/stdlib-reference/types/coopvec-04/load)
* [loadAny](/stdlib-reference/types/coopvec-04/loadany-4)
* [getCount](/stdlib-reference/types/coopvec-04/getcount-3)
* [subscript](/stdlib-reference/types/coopvec-04/subscript)
* [replicate](/stdlib-reference/types/coopvec-04/replicate)
* [equals](/stdlib-reference/types/coopvec-04/equals)
* [lessThan](/stdlib-reference/types/coopvec-04/lessthan-4)
* [lessThanOrEquals](/stdlib-reference/types/coopvec-04/lessthanorequals-48a)
* [add](/stdlib-reference/types/coopvec-04/add)
* [sub](/stdlib-reference/types/coopvec-04/sub)
* [mul](/stdlib-reference/types/coopvec-04/mul)
* [div](/stdlib-reference/types/coopvec-04/div)
* [mod](/stdlib-reference/types/coopvec-04/mod)
* [neg](/stdlib-reference/types/coopvec-04/neg)
* [matMulAccumPacked](/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b)
* [matMulAccum](/stdlib-reference/types/coopvec-04/matmulaccum-36)
* [matMulAddAccumPacked](/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e)
* [matMulAddAccum](/stdlib-reference/types/coopvec-04/matmuladdaccum-369)

