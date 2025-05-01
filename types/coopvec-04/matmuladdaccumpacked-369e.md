---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.matMulAddAccumPacked

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="matmuladdaccumpacked-369e.html">matMulAddAccumPacked</a>&lt;<a href="matmuladdaccumpacked-369e.html#typeparam-U" class="code_type">U</a>, <a href="matmuladdaccumpacked-369e.html#decl-PackedK" class="code_var">PackedK</a>:<span class="code_keyword">int</span>&gt;(
    <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="matmuladdaccumpacked-369e.html#typeparam-U" class="code_type">U</a>, <a href="matmuladdaccumpacked-369e.html#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="matmuladdaccumpacked-369e.html#decl-input" class="code_param">input</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmuladdaccumpacked-369e.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="matmuladdaccumpacked-369e.html#decl-k" class="code_param">k</a>,
    <a href="../rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="matmuladdaccumpacked-369e.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="matmuladdaccumpacked-369e.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmuladdaccumpacked-369e.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="matmuladdaccumpacked-369e.html#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">int</span> <a href="matmuladdaccumpacked-369e.html#decl-biasOffset" class="code_param">biasOffset</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmuladdaccumpacked-369e.html#decl-biasInterpretation" class="code_param">biasInterpretation</a>,
    <a href="../coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="matmuladdaccumpacked-369e.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="matmuladdaccumpacked-369e.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="matmuladdaccumpacked-369e.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="matmuladdaccumpacked-369e.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="matmuladdaccumpacked-369e.html">matMulAddAccumPacked</a>&lt;<a href="matmuladdaccumpacked-369e.html#typeparam-U" class="code_type">U</a>, <a href="matmuladdaccumpacked-369e.html#decl-PackedK" class="code_var">PackedK</a>:<span class="code_keyword">int</span>&gt;(
    <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="matmuladdaccumpacked-369e.html#typeparam-U" class="code_type">U</a>, <a href="matmuladdaccumpacked-369e.html#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="matmuladdaccumpacked-369e.html#decl-input" class="code_param">input</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmuladdaccumpacked-369e.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="matmuladdaccumpacked-369e.html#decl-k" class="code_param">k</a>,
    <a href="../byteaddressbuffer-04b/index.html" class="code_type">ByteAddressBuffer</a> <a href="matmuladdaccumpacked-369e.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="matmuladdaccumpacked-369e.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmuladdaccumpacked-369e.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../byteaddressbuffer-04b/index.html" class="code_type">ByteAddressBuffer</a> <a href="matmuladdaccumpacked-369e.html#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">int</span> <a href="matmuladdaccumpacked-369e.html#decl-biasOffset" class="code_param">biasOffset</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmuladdaccumpacked-369e.html#decl-biasInterpretation" class="code_param">biasInterpretation</a>,
    <a href="../coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="matmuladdaccumpacked-369e.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="matmuladdaccumpacked-369e.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="matmuladdaccumpacked-369e.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="matmuladdaccumpacked-369e.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U: [\_\_BuiltinArithmeticType](../../interfaces/0_builtinarithmetictype-029j/index)
####  <a id="decl-PackedK"></a>PackedK  : int

## Parameters

####  <a id="decl-input"></a>input  : [CoopVec](index)\<U, PackedK\>
####  <a id="decl-inputInterpretation"></a>inputInterpretation  : [CoopVecComponentType](../coopveccomponenttype-047g/index)
####  <a id="decl-k"></a>k  : int
####  <a id="decl-matrix"></a>matrix  : [RWByteAddressBuffer](../rwbyteaddressbuffer-0126d/index)
####  <a id="decl-matrixOffset"></a>matrixOffset  : int
####  <a id="decl-matrixInterpretation"></a>matrixInterpretation  : [CoopVecComponentType](../coopveccomponenttype-047g/index)
####  <a id="decl-bias"></a>bias  : [RWByteAddressBuffer](../rwbyteaddressbuffer-0126d/index)
####  <a id="decl-biasOffset"></a>biasOffset  : int
####  <a id="decl-biasInterpretation"></a>biasInterpretation  : [CoopVecComponentType](../coopveccomponenttype-047g/index)
####  <a id="decl-memoryLayout"></a>memoryLayout  : [CoopVecMatrixLayout](../coopvecmatrixlayout-047d/index)
####  <a id="decl-transpose"></a>transpose  : bool
####  <a id="decl-matrixStride"></a>matrixStride  : uint
####  <a id="decl-matrix"></a>matrix  : [ByteAddressBuffer](../byteaddressbuffer-04b/index)
####  <a id="decl-bias"></a>bias  : [ByteAddressBuffer](../byteaddressbuffer-04b/index)

