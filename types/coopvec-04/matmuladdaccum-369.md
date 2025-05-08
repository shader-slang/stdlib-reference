---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.matMulAddAccum

## Description

Performs matrix multiplication and accumulation with bias: this += input * matrix + bias



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="matmuladdaccum-369.html">matMulAddAccum</a>&lt;<a href="matmuladdaccum-369.html#typeparam-U" class="code_type">U</a>, <a href="matmuladdaccum-369.html#decl-K" class="code_var">K</a>:<span class="code_keyword">int</span>&gt;(
    <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="matmuladdaccum-369.html#typeparam-U" class="code_type">U</a>, <a href="matmuladdaccum-369.html#decl-K" class="code_var">K</a>&gt; <a href="matmuladdaccum-369.html#decl-input" class="code_param">input</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmuladdaccum-369.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <a href="../rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="matmuladdaccum-369.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="matmuladdaccum-369.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmuladdaccum-369.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="matmuladdaccum-369.html#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">int</span> <a href="matmuladdaccum-369.html#decl-biasOffset" class="code_param">biasOffset</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmuladdaccum-369.html#decl-biasInterpretation" class="code_param">biasInterpretation</a>,
    <a href="../coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="matmuladdaccum-369.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="matmuladdaccum-369.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="matmuladdaccum-369.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="matmuladdaccum-369.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="matmuladdaccum-369.html">matMulAddAccum</a>&lt;<a href="matmuladdaccum-369.html#typeparam-U" class="code_type">U</a>, <a href="matmuladdaccum-369.html#decl-K" class="code_var">K</a>:<span class="code_keyword">int</span>&gt;(
    <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="matmuladdaccum-369.html#typeparam-U" class="code_type">U</a>, <a href="matmuladdaccum-369.html#decl-K" class="code_var">K</a>&gt; <a href="matmuladdaccum-369.html#decl-input" class="code_param">input</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmuladdaccum-369.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <a href="../byteaddressbuffer-04b/index.html" class="code_type">ByteAddressBuffer</a> <a href="matmuladdaccum-369.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="matmuladdaccum-369.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmuladdaccum-369.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../byteaddressbuffer-04b/index.html" class="code_type">ByteAddressBuffer</a> <a href="matmuladdaccum-369.html#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">int</span> <a href="matmuladdaccum-369.html#decl-biasOffset" class="code_param">biasOffset</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmuladdaccum-369.html#decl-biasInterpretation" class="code_param">biasInterpretation</a>,
    <a href="../coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="matmuladdaccum-369.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="matmuladdaccum-369.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="matmuladdaccum-369.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="matmuladdaccum-369.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U: [\_\_BuiltinArithmeticType](../../interfaces/0_builtinarithmetictype-029j/index.html)
####  <a id="decl-K"></a>K  : int

## Parameters

####  <a id="decl-input"></a>input  : [CoopVec](index.html)\<U, K\>
The input vector to multiply with the matrix

####  <a id="decl-inputInterpretation"></a>inputInterpretation  : [CoopVecComponentType](../coopveccomponenttype-047g/index.html)
How to interpret the input vector elements (must not be packed)

####  <a id="decl-matrix"></a>matrix  : [RWByteAddressBuffer](../rwbyteaddressbuffer-0126d/index.html)
The matrix buffer to multiply with

####  <a id="decl-matrixOffset"></a>matrixOffset  : int
Byte offset into the matrix buffer

####  <a id="decl-matrixInterpretation"></a>matrixInterpretation  : [CoopVecComponentType](../coopveccomponenttype-047g/index.html)
How to interpret the matrix elements

####  <a id="decl-bias"></a>bias  : [RWByteAddressBuffer](../rwbyteaddressbuffer-0126d/index.html)
The bias buffer to add

####  <a id="decl-biasOffset"></a>biasOffset  : int
Byte offset into the bias buffer

####  <a id="decl-biasInterpretation"></a>biasInterpretation  : [CoopVecComponentType](../coopveccomponenttype-047g/index.html)
How to interpret the bias elements

####  <a id="decl-memoryLayout"></a>memoryLayout  : [CoopVecMatrixLayout](../coopvecmatrixlayout-047d/index.html)
Memory layout of the matrix (row or column major)

####  <a id="decl-transpose"></a>transpose  : bool
Whether to transpose the matrix before multiplication

####  <a id="decl-matrixStride"></a>matrixStride  : uint
Stride between matrix rows/columns in bytes

####  <a id="decl-matrix"></a>matrix  : [ByteAddressBuffer](../byteaddressbuffer-04b/index.html)
The matrix buffer to multiply with

####  <a id="decl-bias"></a>bias  : [ByteAddressBuffer](../byteaddressbuffer-04b/index.html)
The bias buffer to add


