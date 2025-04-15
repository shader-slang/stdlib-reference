---
layout: stdlib-reference
---

# coopVecMatMulPacked

## Description

Multiply a cooperative vector with a matrix and return the result.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad">coopVecMatMulPacked</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-PackedK" class="code_var">PackedK</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-U" class="code_type">U</a>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-k" class="code_param">k</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad">coopVecMatMulPacked</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-PackedK" class="code_var">PackedK</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-U" class="code_type">U</a>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-k" class="code_param">k</a>,
    <a href="/stdlib-reference/types/byteaddressbuffer-04b/index" class="code_type">ByteAddressBuffer</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad">coopVecMatMulPacked</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-PackedK" class="code_var">PackedK</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-k" class="code_param">k</a>,
    <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad">coopVecMatMulPacked</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-PackedK" class="code_var">PackedK</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-k" class="code_param">k</a>,
    <a href="/stdlib-reference/types/structuredbuffer-0a/index" class="code_type">StructuredBuffer</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmulpacked-47ad#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-T}
#### M  : int {#decl-M}
#### PackedK  : int {#decl-PackedK}
#### U: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-U}
#### IgnoredBufferElementType {#typeparam-IgnoredBufferElementType}

## Parameters

#### input  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<U, PackedK\> {#decl-input}
The input cooperative vector to multiply with the matrix.

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

#### matrix  : [RWStructuredBuffer](/stdlib-reference/types/rwstructuredbuffer-012c/index)\<IgnoredBufferElementType, [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index)\> {#decl-matrix}
The matrix buffer to multiply with.

#### matrix  : [StructuredBuffer](/stdlib-reference/types/structuredbuffer-0a/index)\<IgnoredBufferElementType, [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index)\> {#decl-matrix}
The matrix buffer to multiply with.


## Return value
A new cooperative vector containing the result of the matrix multiplication.

## Remarks
Unlike coopVecMatMul, this function supports packed input interpretations where multiple values
can be packed into each element of the input vector. The k parameter specifies the actual number of
values to use from the packed input.


## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.

### Capability Set 2

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.


