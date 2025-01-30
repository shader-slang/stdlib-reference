---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.matMulAddAccumPacked

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e">matMulAddAccumPacked</a>&lt;<a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-PackedK" class="code_var">PackedK</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-k" class="code_param">k</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-biasOffset" class="code_param">biasOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-biasInterpretation" class="code_param">biasInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e">matMulAddAccumPacked</a>&lt;<a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-PackedK" class="code_var">PackedK</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-input" class="code_param">input</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-k" class="code_param">k</a>,
    <a href="/stdlib-reference/types/byteaddressbuffer-04b/index" class="code_type">ByteAddressBuffer</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="/stdlib-reference/types/byteaddressbuffer-04b/index" class="code_type">ByteAddressBuffer</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-biasOffset" class="code_param">biasOffset</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-biasInterpretation" class="code_param">biasInterpretation</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/matmuladdaccumpacked-369e#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### U: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-U}
#### PackedK  : int {#decl-PackedK}

## Parameters

#### input  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<U, PackedK\> {#decl-input}
#### inputInterpretation  : [CoopVecComponentType](/stdlib-reference/types/coopveccomponenttype-047g/index) {#decl-inputInterpretation}
#### k  : int {#decl-k}
#### matrix  : [RWByteAddressBuffer](/stdlib-reference/types/rwbyteaddressbuffer-0126d/index) {#decl-matrix}
#### matrixOffset  : int {#decl-matrixOffset}
#### matrixInterpretation  : [CoopVecComponentType](/stdlib-reference/types/coopveccomponenttype-047g/index) {#decl-matrixInterpretation}
#### bias  : [RWByteAddressBuffer](/stdlib-reference/types/rwbyteaddressbuffer-0126d/index) {#decl-bias}
#### biasOffset  : int {#decl-biasOffset}
#### biasInterpretation  : [CoopVecComponentType](/stdlib-reference/types/coopveccomponenttype-047g/index) {#decl-biasInterpretation}
#### memoryLayout  : [CoopVecMatrixLayout](/stdlib-reference/types/coopvecmatrixlayout-047d/index) {#decl-memoryLayout}
#### transpose  : bool {#decl-transpose}
#### matrixStride  : uint {#decl-matrixStride}
#### matrix  : [ByteAddressBuffer](/stdlib-reference/types/byteaddressbuffer-04b/index) {#decl-matrix}
#### bias  : [ByteAddressBuffer](/stdlib-reference/types/byteaddressbuffer-04b/index) {#decl-bias}

