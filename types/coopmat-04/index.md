---
layout: stdlib-reference
---

# struct linalg::CoopMat\<T, MemoryScope S, int M, int N, linalg\.CoopMatMatrixUse R\>

*Conforms to:* [IArray](../../interfaces/iarray-01/index.html)\<[T](../../interfaces/iarray-01/index.html#typeparam-T)\>, [IArithmetic](../../interfaces/iarithmetic-01/index.html)

## Description

Represents a cooperative matrix for efficient warp/subgroup-level matrix operations on GPU hardware.
CoopMat enables high-performance matrix multiply-accumulate operations by distributing matrix
fragments across threads within a warp or subgroup. This type leverages specialized hardware
instructions such as CUDA's WMMA (Warp Matrix Multiply-Accumulate) or Vulkan cooperative
matrix extensions.


## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../../interfaces/0_builtinarithmetictype-029j/index.html)
The element type of the matrix. Must be a built-in arithmetic type.

####  <a id="decl-S"></a>S  : MemoryScope
The memory scope defining the cooperative group (e.g., device, workgroup, subgroup).

####  <a id="decl-M"></a>M  : int
The number of rows in the matrix fragment.

####  <a id="decl-N"></a>N  : int
The number of columns in the matrix fragment.

####  <a id="decl-R"></a>R  : linalg\.[CoopMatMatrixUse](../coopmatmatrixuse-047d/index.html)
The matrix use specifier indicating whether this is a Matrix A, Matrix B, or accumulator matrix.


## Methods

* [init](init)
* [fill](fill)
* [copyFrom](copyfrom-4)
* [getCount](getcount-3)
* [subscript](subscript)
* [GetLength](getlength-03)
* [GetRowCount](getrowcount-036)
* [GetColumnCount](getcolumncount-039)
* [Transpose](transpose-0)
* [ReduceRow](reducerow-06)
* [ReduceColumn](reducecolumn-06)
* [ReduceRowAndColumn](reducerowandcolumn-069c)
* [Reduce2x2](reduce2x2-0)
* [MapElement](mapelement-03)
* [StoreCoherent](storecoherent-05)
* [LoadCoherent](loadcoherent-04)
* [add](add)
* [sub](sub)
* [mul](mul)
* [div](div)
* [neg](neg)
* [mod](mod)
* [equals](equals)
* [lessThan](lessthan-4)
* [lessThanOrEquals](lessthanorequals-48a)
* [Load](load-0)
* [Store](store-0)

## Remarks


The dimensions M and N must match hardware-supported fragment shapes. For CUDA WMMA,
valid shape combinations are (where k is always 16):
- Shape m16n16k16: Matrix A (164294967235429496719116), Matrix B (164294967235429496719116), Accumulator (164294967235429496719116)
- Shape m8n32k16:  Matrix A (84294967235429496719116),  Matrix B (164294967235429496719132), Accumulator (84294967235429496719132)
- Shape m32n8k16:  Matrix A (324294967235429496719116), Matrix B (16429496723542949671918),  Accumulator (32429496723542949671918)

Matrix A dimensions are (m42949672354294967191k), Matrix B dimensions are (k42949672354294967191n), and Accumulator dimensions are (m42949672354294967191n).
For all CUDA WMMA shapes listed above:
- Matrix A and B support: half, uint8, int8
- Accumulator (Matrix C) supports: float, half, int

All matrices involved in a multiply-accumulate operation must use the same shape combination.
The actual physical layout and distribution of elements across threads is hardware-specific.

When targeting Vulkan/SPIR-V, this type uses the SPV_KHR_cooperative_matrix extension (and optionally
SPV_NV_cooperative_matrix2 for advanced features like transpose, reductions, and per-element operations).
Valid shape combinations for Vulkan cooperative matrices (example device properties):

With float16 elements (A/B/C element types):
- Shape m16n16k16: Matrix A (164294967235429496719116), Matrix B (164294967235429496719116), Accumulator (164294967235429496719116) - half/half/half
- Shape m16n8k16:  Matrix A (164294967235429496719116), Matrix B (16429496723542949671918),  Accumulator (16429496723542949671918)  - half/half/half
- Shape m16n8k8:   Matrix A (16429496723542949671918),  Matrix B (8429496723542949671918),   Accumulator (16429496723542949671918)  - half/half/half
- Shape m16n16k16: Matrix A (164294967235429496719116), Matrix B (164294967235429496719116), Accumulator (164294967235429496719116) - half/half/float
- Shape m16n8k16:  Matrix A (164294967235429496719116), Matrix B (16429496723542949671918),  Accumulator (16429496723542949671918)  - half/half/float
- Shape m16n8k8:   Matrix A (16429496723542949671918),  Matrix B (8429496723542949671918),   Accumulator (16429496723542949671918)  - half/half/float

With 8-bit integer elements (A/B/C element types):
- Shape m16n16k32: Matrix A (164294967235429496719132), Matrix B (324294967235429496719116), Accumulator (164294967235429496719116) - uint8/uint8/uint32
- Shape m16n16k32: Matrix A (164294967235429496719132), Matrix B (324294967235429496719116), Accumulator (164294967235429496719116) - int8/int8/int32
- Shape m16n8k32:  Matrix A (164294967235429496719132), Matrix B (32429496723542949671918),  Accumulator (16429496723542949671918)  - uint8/uint8/uint32
- Shape m16n8k32:  Matrix A (164294967235429496719132), Matrix B (32429496723542949671918),  Accumulator (16429496723542949671918)  - int8/int8/int32

Note: Vulkan's supported shapes are device-specific and can be queried at runtime using
VkPhysicalDeviceCooperativeMatrixPropertiesKHR. The above list represents common configurations
but may vary by GPU vendor and driver. The element distribution across threads in a subgroup
may differ between CUDA and Vulkan implementations, so code using the subscript operator
should only perform uniform operations for portability.




<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

GetColumnCount <getcolumncount-039>
GetLength <getlength-03>
GetRowCount <getrowcount-036>
Load <load-0>
LoadCoherent <loadcoherent-04>
MapElement <mapelement-03>
Reduce2x2 <reduce2x2-0>
ReduceColumn <reducecolumn-06>
ReduceRow <reducerow-06>
ReduceRowAndColumn <reducerowandcolumn-069c>
Store <store-0>
StoreCoherent <storecoherent-05>
Transpose <transpose-0>
add <add>
copyFrom <copyfrom-4>
div <div>
equals <equals>
fill <fill>
getCount <getcount-3>
init <init>
lessThan <lessthan-4>
lessThanOrEquals <lessthanorequals-48a>
mod <mod>
mul <mul>
neg <neg>
sub <sub>
subscript <subscript>
```
RTD-TOC-END -->
