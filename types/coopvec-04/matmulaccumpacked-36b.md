---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.matMulAccumPacked

## Description

Multiply the given input Cooperative vector with the given matrix and accumulate the result into this vector.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b">matMulAccumPacked</a>&lt;<a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-PackedK" class="code_var">PackedK</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-k" class="code_param">k</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b">matMulAccumPacked</a>&lt;<a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-PackedK" class="code_var">PackedK</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-k" class="code_param">k</a>,
    <a href="/stdlib-reference/types/byteaddressbuffer-04b/index" class="code_type">ByteAddressBuffer</a> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/matmulaccumpacked-36b#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### U: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-U}
#### PackedK  : int {#decl-PackedK}

## Parameters

#### input  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<U, PackedK\> {#decl-input}
The input Cooperative vector to multiply with the matrix.

#### inputInterpretation  : [CoopVecComponentType](/stdlib-reference/types/coopveccomponenttype-047g/index) {#decl-inputInterpretation}
Specifies how to interpret the values in the input vector (e.g. as packed values).

#### k  : int {#decl-k}
The number of columns in the matrix.

#### matrix  : [RWByteAddressBuffer](/stdlib-reference/types/rwbyteaddressbuffer-0126d/index) {#decl-matrix}
The matrix buffer to multiply with.

#### matrixOffset  : int {#decl-matrixOffset}
Byte offset into the matrix buffer.

#### matrixInterpretation  : [CoopVecComponentType](/stdlib-reference/types/coopveccomponenttype-047g/index) {#decl-matrixInterpretation}
Specifies how to interpret the values in the matrix.

#### memoryLayout  : [CoopVecMatrixLayout](/stdlib-reference/types/coopvecmatrixlayout-047d/index) {#decl-memoryLayout}
Specifies the memory layout of the matrix (row-major or column-major).

#### transpose  : bool {#decl-transpose}
Whether to transpose the matrix before multiplication.

#### matrixStride  : uint {#decl-matrixStride}
The stride between matrix rows/columns in bytes.

#### matrix  : [ByteAddressBuffer](/stdlib-reference/types/byteaddressbuffer-04b/index) {#decl-matrix}
The matrix buffer to multiply with.


## Remarks
Unlike matMulAccum, this function supports packed input interpretations where multiple values
can be packed into each element of the input vector. The k parameter specifies the actual number of
values to use from the packed input.


