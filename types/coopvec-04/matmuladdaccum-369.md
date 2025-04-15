---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.matMulAddAccum

## Description

Performs matrix multiplication and accumulation with bias: this += input * matrix + bias



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369">matMulAddAccum</a>&lt;<a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-K" class="code_var">K</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-K" class="code_var">K</a>&gt; <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-biasOffset" class="code_param">biasOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-biasInterpretation" class="code_param">biasInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369">matMulAddAccum</a>&lt;<a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-K" class="code_var">K</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-K" class="code_var">K</a>&gt; <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <a href="/stdlib-reference/types/byteaddressbuffer-04b/index" class="code_type">ByteAddressBuffer</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/byteaddressbuffer-04b/index" class="code_type">ByteAddressBuffer</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-biasOffset" class="code_param">biasOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-biasInterpretation" class="code_param">biasInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccum-369#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### U: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-U}
#### K  : int {#decl-K}

## Parameters

#### input  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<U, K\> {#decl-input}
The input vector to multiply with the matrix

#### inputInterpretation  : [CoopVecComponentType](/stdlib-reference/types/coopveccomponenttype-047g/index) {#decl-inputInterpretation}
How to interpret the input vector elements (must not be packed)

#### matrix  : [RWByteAddressBuffer](/stdlib-reference/types/rwbyteaddressbuffer-0126d/index) {#decl-matrix}
The matrix buffer to multiply with

#### matrixOffset  : int {#decl-matrixOffset}
Byte offset into the matrix buffer

#### matrixInterpretation  : [CoopVecComponentType](/stdlib-reference/types/coopveccomponenttype-047g/index) {#decl-matrixInterpretation}
How to interpret the matrix elements

#### bias  : [RWByteAddressBuffer](/stdlib-reference/types/rwbyteaddressbuffer-0126d/index) {#decl-bias}
The bias buffer to add

#### biasOffset  : int {#decl-biasOffset}
Byte offset into the bias buffer

#### biasInterpretation  : [CoopVecComponentType](/stdlib-reference/types/coopveccomponenttype-047g/index) {#decl-biasInterpretation}
How to interpret the bias elements

#### memoryLayout  : [CoopVecMatrixLayout](/stdlib-reference/types/coopvecmatrixlayout-047d/index) {#decl-memoryLayout}
Memory layout of the matrix (row or column major)

#### transpose  : bool {#decl-transpose}
Whether to transpose the matrix before multiplication

#### matrixStride  : uint {#decl-matrixStride}
Stride between matrix rows/columns in bytes

#### matrix  : [ByteAddressBuffer](/stdlib-reference/types/byteaddressbuffer-04b/index) {#decl-matrix}
The matrix buffer to multiply with

#### bias  : [ByteAddressBuffer](/stdlib-reference/types/byteaddressbuffer-04b/index) {#decl-bias}
The bias buffer to add


