---
layout: stdlib-reference
---

# coopVecMatMulAddPacked

## Description

Multiply a matrix with a cooperative vector and add a bias vector to the result.
Given a M-row by K-col <span class='code'><a href="coopvecmatmuladdpacked-47adg.html#decl-matrix" class="code_param">matrix</a></span>, a K-element column vector <span class='code'><a href="coopvecmatmuladdpacked-47adg.html#decl-input" class="code_param">input</a></span>, and a M-element vector <span class='code'><a href="coopvecmatmuladdpacked-47adg.html#decl-bias" class="code_param">bias</a></span>, computes <span class='code'><a href="coopvecmatmuladdpacked-47adg.html#decl-matrix" class="code_param">matrix</a>*<a href="coopvecmatmuladdpacked-47adg.html#decl-input" class="code_param">input</a>+<a href="coopvecmatmuladdpacked-47adg.html#decl-bias" class="code_param">bias</a></span>, and
returns a M-element vector.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a>, <a href="coopvecmatmuladdpacked-47adg.html#decl-M" class="code_var">M</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html">coopVecMatMulAddPacked</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-PackedK" class="code_var">PackedK</a>, <a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmuladdpacked-47adg.html#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html#decl-input" class="code_param">input</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-k" class="code_param">k</a>,
    <a href="../types/rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../types/rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-biasOffset" class="code_param">biasOffset</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-biasInterpretation" class="code_param">biasInterpretation</a>,
    <a href="../types/coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a>, <a href="coopvecmatmuladdpacked-47adg.html#decl-M" class="code_var">M</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html">coopVecMatMulAddPacked</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-PackedK" class="code_var">PackedK</a>, <a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmuladdpacked-47adg.html#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html#decl-input" class="code_param">input</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-k" class="code_param">k</a>,
    <a href="../types/byteaddressbuffer-04b/index.html" class="code_type">ByteAddressBuffer</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../types/byteaddressbuffer-04b/index.html" class="code_type">ByteAddressBuffer</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-biasOffset" class="code_param">biasOffset</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-biasInterpretation" class="code_param">biasInterpretation</a>,
    <a href="../types/coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a>, <a href="coopvecmatmuladdpacked-47adg.html#decl-M" class="code_var">M</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html">coopVecMatMulAddPacked</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-PackedK" class="code_var">PackedK</a>, <a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmuladdpacked-47adg.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmuladdpacked-47adg.html#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html#decl-input" class="code_param">input</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-k" class="code_param">k</a>,
    <a href="../types/rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="../types/defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../types/rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="../types/defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-biasOffset" class="code_param">biasOffset</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-biasInterpretation" class="code_param">biasInterpretation</a>,
    <a href="../types/coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a>, <a href="coopvecmatmuladdpacked-47adg.html#decl-M" class="code_var">M</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html">coopVecMatMulAddPacked</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-PackedK" class="code_var">PackedK</a>, <a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmuladdpacked-47adg.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmuladdpacked-47adg.html#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html#decl-input" class="code_param">input</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-k" class="code_param">k</a>,
    <a href="../types/structuredbuffer-0a/index.html" class="code_type">StructuredBuffer</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="../types/defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../types/structuredbuffer-0a/index.html" class="code_type">StructuredBuffer</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="../types/defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-biasOffset" class="code_param">biasOffset</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-biasInterpretation" class="code_param">biasInterpretation</a>,
    <a href="../types/coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a>, <a href="coopvecmatmuladdpacked-47adg.html#decl-M" class="code_var">M</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html">coopVecMatMulAddPacked</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-PackedK" class="code_var">PackedK</a>, <a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmuladdpacked-47adg.html#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="coopvecmatmuladdpacked-47adg.html#decl-input" class="code_param">input</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-k" class="code_param">k</a>,
    <a href="../types/ptr-0/index.html" class="code_type">Ptr</a>&lt;<span class="code_keyword">void</span>, Access.ReadWrite, AddressSpace.Device&gt; <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixPtr" class="code_param">matrixPtr</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../types/ptr-0/index.html" class="code_type">Ptr</a>&lt;<span class="code_keyword">void</span>, Access.ReadWrite, AddressSpace.Device&gt; <a href="coopvecmatmuladdpacked-47adg.html#decl-biasPtr" class="code_param">biasPtr</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-biasInterpretation" class="code_param">biasInterpretation</a>,
    <a href="../types/coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="coopvecmatmuladdpacked-47adg.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="coopvecmatmuladdpacked-47adg.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="coopvecmatmuladdpacked-47adg.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="coopvecmatmuladdpacked-47adg.html#typeparam-U" class="code_type">U</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)
####  <a id="decl-M"></a>M  : int
####  <a id="decl-PackedK"></a>PackedK  : int
####  <a id="typeparam-U"></a>U: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)
####  <a id="typeparam-IgnoredBufferElementType"></a>IgnoredBufferElementType

## Parameters

####  <a id="decl-input"></a>input  : [CoopVec](../types/coopvec-04/index.html)\<U, PackedK\>
The input cooperative vector to multiply with the matrix.

####  <a id="decl-inputInterpretation"></a>inputInterpretation  : [CoopVecComponentType](../types/coopveccomponenttype-047g/index.html)
Specifies how to interpret the values in the input vector (e.g. as packed values).

####  <a id="decl-k"></a>k  : int
The number of columns in the matrix.

####  <a id="decl-matrix"></a>matrix  : [RWByteAddressBuffer](../types/rwbyteaddressbuffer-0126d/index.html)
The matrix buffer to multiply with.

####  <a id="decl-matrixOffset"></a>matrixOffset  : int
Byte offset into the matrix buffer.

####  <a id="decl-matrixInterpretation"></a>matrixInterpretation  : [CoopVecComponentType](../types/coopveccomponenttype-047g/index.html)
Specifies how to interpret the values in the matrix.

####  <a id="decl-bias"></a>bias  : [RWByteAddressBuffer](../types/rwbyteaddressbuffer-0126d/index.html)
The bias buffer to add after multiplication.

####  <a id="decl-biasOffset"></a>biasOffset  : int
Byte offset into the bias buffer.

####  <a id="decl-biasInterpretation"></a>biasInterpretation  : [CoopVecComponentType](../types/coopveccomponenttype-047g/index.html)
Specifies how to interpret the values in the bias vector.

####  <a id="decl-memoryLayout"></a>memoryLayout  : [CoopVecMatrixLayout](../types/coopvecmatrixlayout-047d/index.html)
Specifies the memory layout of the matrix (row-major or column-major).

####  <a id="decl-transpose"></a>transpose  : bool
Whether to transpose the matrix before multiplication.

####  <a id="decl-matrixStride"></a>matrixStride  : uint
The stride between matrix rows/columns in bytes.

####  <a id="decl-matrix"></a>matrix  : [ByteAddressBuffer](../types/byteaddressbuffer-04b/index.html)
The matrix buffer to multiply with.

####  <a id="decl-bias"></a>bias  : [ByteAddressBuffer](../types/byteaddressbuffer-04b/index.html)
The bias buffer to add after multiplication.

####  <a id="decl-matrix"></a>matrix  : [RWStructuredBuffer](../types/rwstructuredbuffer-012c/index.html)\<IgnoredBufferElementType, [DefaultDataLayout](../types/defaultdatalayout-07b/index.html)\>
The matrix buffer to multiply with.

####  <a id="decl-bias"></a>bias  : [RWStructuredBuffer](../types/rwstructuredbuffer-012c/index.html)\<IgnoredBufferElementType, [DefaultDataLayout](../types/defaultdatalayout-07b/index.html)\>
The bias buffer to add after multiplication.

####  <a id="decl-matrix"></a>matrix  : [StructuredBuffer](../types/structuredbuffer-0a/index.html)\<IgnoredBufferElementType, [DefaultDataLayout](../types/defaultdatalayout-07b/index.html)\>
The matrix buffer to multiply with.

####  <a id="decl-bias"></a>bias  : [StructuredBuffer](../types/structuredbuffer-0a/index.html)\<IgnoredBufferElementType, [DefaultDataLayout](../types/defaultdatalayout-07b/index.html)\>
The bias buffer to add after multiplication.

####  <a id="decl-matrixPtr"></a>matrixPtr  : [Ptr](../types/ptr-0/index.html)\<void, Access\.ReadWrite, AddressSpace\.Device\>
####  <a id="decl-biasPtr"></a>biasPtr  : [Ptr](../types/ptr-0/index.html)\<void, Access\.ReadWrite, AddressSpace\.Device\>

## Return value
A new cooperative vector containing the result of the matrix multiplication with added bias.

## Remarks
Unlike coopVecMatMulAdd, this function supports packed input interpretations where multiple values
can be packed into each element of the input vector. The k parameter specifies the actual number of
values to use from the packed input.

Depending on target hardware, some combinations of <span class='code'><a href="coopvecmatmuladdpacked-47adg.html#decl-inputInterpretation" class="code_param">inputInterpretation</a></span>, <span class='code'><a href="coopvecmatmuladdpacked-47adg.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a></span> and <span class='code'><a href="coopvecmatmuladdpacked-47adg.html#decl-memoryLayout" class="code_param">memoryLayout</a></span> may not be supported.
For example, CoopVecComponentType.Float32 is not widely supported. Developers should query device properties through the host graphics API to
find out which interpretations are supported.

Transposing is not supported when <span class='code'><a href="coopvecmatmuladdpacked-47adg.html#decl-memoryLayout" class="code_param">memoryLayout</a></span> is <span class='code'>RowMajor</span> or <span class='code'>ColumnMajor</span>, and <span class='code'><a href="coopvecmatmuladdpacked-47adg.html#decl-transpose" class="code_param">transpose</a></span> must be <span class='code'>false</span>.
Not all component types support transposing.
When <span class='code'><a href="coopvecmatmuladdpacked-47adg.html#decl-memoryLayout" class="code_param">memoryLayout</a></span> is <span class='code'>InferencingOptimal</span> or <span class='code'>TrainingOptimal</span>, <span class='code'><a href="coopvecmatmuladdpacked-47adg.html#decl-matrixStride" class="code_param">matrixStride</a></span> is ignored.


## Availability and Requirements

### Capability Set 1

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

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.

### Capability Set 2

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.


