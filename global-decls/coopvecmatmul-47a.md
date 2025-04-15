---
layout: stdlib-reference
---

# coopVecMatMul

## Description

Multiply a cooperative vector with a matrix.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmul-47a">coopVecMatMul</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-K" class="code_var">K</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-U" class="code_type">U</a>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-K" class="code_var">K</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmul-47a">coopVecMatMul</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-K" class="code_var">K</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-U" class="code_type">U</a>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-K" class="code_var">K</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <a href="/stdlib-reference/types/byteaddressbuffer-04b/index" class="code_type">ByteAddressBuffer</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmul-47a">coopVecMatMul</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-K" class="code_var">K</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-K" class="code_var">K</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmul-47a">coopVecMatMul</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-K" class="code_var">K</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-K" class="code_var">K</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <a href="/stdlib-reference/types/structuredbuffer-0a/index" class="code_type">StructuredBuffer</a>&lt;<a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecmatmul-47a#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-T}
#### M  : int {#decl-M}
#### K  : int {#decl-K}
#### U: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-U}
#### IgnoredBufferElementType {#typeparam-IgnoredBufferElementType}

## Parameters

#### input  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<U, K\> {#decl-input}
The input cooperative vector to multiply with the matrix.

#### inputInterpretation  : [CoopVecComponentType](/stdlib-reference/types/coopveccomponenttype-047g/index) {#decl-inputInterpretation}
Specifies how to interpret the values in the input vector (e.g. as 8-bit integers, 16-bit floats, etc).

#### matrix  : [RWByteAddressBuffer](/stdlib-reference/types/rwbyteaddressbuffer-0126d/index) {#decl-matrix}
The matrix to multiply with the input vector.

#### matrixOffset  : int {#decl-matrixOffset}
Byte offset into the matrix buffer.

#### matrixInterpretation  : [CoopVecComponentType](/stdlib-reference/types/coopveccomponenttype-047g/index) {#decl-matrixInterpretation}
Specifies how to interpret the values in the matrix (e.g. as 8-bit integers, 16-bit floats, etc).

#### memoryLayout  : [CoopVecMatrixLayout](/stdlib-reference/types/coopvecmatrixlayout-047d/index) {#decl-memoryLayout}
Specifies the memory layout of the matrix (row-major or column-major).

#### transpose  : bool {#decl-transpose}
Whether to transpose the matrix before multiplication.

#### matrixStride  : uint {#decl-matrixStride}
The stride in bytes between rows/columns of the matrix.

#### matrix  : [ByteAddressBuffer](/stdlib-reference/types/byteaddressbuffer-04b/index) {#decl-matrix}
The matrix to multiply with the input vector.

#### matrix  : [RWStructuredBuffer](/stdlib-reference/types/rwstructuredbuffer-012c/index)\<IgnoredBufferElementType, [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index)\> {#decl-matrix}
The matrix to multiply with the input vector.

#### matrix  : [StructuredBuffer](/stdlib-reference/types/structuredbuffer-0a/index)\<IgnoredBufferElementType, [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index)\> {#decl-matrix}
The matrix to multiply with the input vector.


## Return value
A new cooperative vector containing the result of the matrix multiplication.


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


