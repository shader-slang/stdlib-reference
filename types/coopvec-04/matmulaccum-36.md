---
layout: stdlib-reference
---

# CoopVec\<T, int N\>\.matMulAccum

## Description

Accumulate the result from a matrix multiplication between an input Cooperative vector and a matrix.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="matmulaccum-36.html">matMulAccum</a>&lt;<a href="matmulaccum-36.html#typeparam-U" class="code_type">U</a>, <span class="code_keyword">int</span> <a href="matmulaccum-36.html#decl-K" class="code_var">K</a>&gt;(
    <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="matmulaccum-36.html#typeparam-U" class="code_type">U</a>, <a href="matmulaccum-36.html#decl-K" class="code_var">K</a>&gt; <a href="matmulaccum-36.html#decl-input" class="code_param">input</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmulaccum-36.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <a href="../rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="matmulaccum-36.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="matmulaccum-36.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmulaccum-36.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="matmulaccum-36.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="matmulaccum-36.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="matmulaccum-36.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="matmulaccum-36.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="matmulaccum-36.html">matMulAccum</a>&lt;<a href="matmulaccum-36.html#typeparam-U" class="code_type">U</a>, <span class="code_keyword">int</span> <a href="matmulaccum-36.html#decl-K" class="code_var">K</a>&gt;(
    <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="matmulaccum-36.html#typeparam-U" class="code_type">U</a>, <a href="matmulaccum-36.html#decl-K" class="code_var">K</a>&gt; <a href="matmulaccum-36.html#decl-input" class="code_param">input</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmulaccum-36.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <a href="../byteaddressbuffer-04b/index.html" class="code_type">ByteAddressBuffer</a> <a href="matmulaccum-36.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="matmulaccum-36.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="matmulaccum-36.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="matmulaccum-36.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="matmulaccum-36.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="matmulaccum-36.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="matmulaccum-36.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U: [\_\_BuiltinArithmeticType](../../interfaces/0_builtinarithmetictype-029j/index.html)
####  <a id="decl-K"></a>K  : int

## Parameters

####  <a id="decl-input"></a>input  : [CoopVec](index.html)\<U, K\>
The input Cooperative vector to multiply with the matrix.

####  <a id="decl-inputInterpretation"></a>inputInterpretation  : [CoopVecComponentType](../coopveccomponenttype-047g/index.html)
Specifies how to interpret the values in the input vector (e.g. as 8-bit integers, 16-bit floats, etc).

####  <a id="decl-matrix"></a>matrix  : [RWByteAddressBuffer](../rwbyteaddressbuffer-0126d/index.html)
The matrix to multiply with the input vector.

####  <a id="decl-matrixOffset"></a>matrixOffset  : int
Byte offset into the matrix buffer.

####  <a id="decl-matrixInterpretation"></a>matrixInterpretation  : [CoopVecComponentType](../coopveccomponenttype-047g/index.html)
Specifies how to interpret the values in the matrix (e.g. as 8-bit integers, 16-bit floats, etc).

####  <a id="decl-memoryLayout"></a>memoryLayout  : [CoopVecMatrixLayout](../coopvecmatrixlayout-047d/index.html)
Specifies the memory layout of the matrix (row-major or column-major).

####  <a id="decl-transpose"></a>transpose  : bool
Whether to transpose the matrix before multiplication.

####  <a id="decl-matrixStride"></a>matrixStride  : uint
The stride in bytes between rows/columns of the matrix.

####  <a id="decl-matrix"></a>matrix  : [ByteAddressBuffer](../byteaddressbuffer-04b/index.html)
The matrix to multiply with the input vector.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

Requires capability: `hlsl_coopvec_poc`.
#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

Requires capability: `optix_coopvec`.
#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.


