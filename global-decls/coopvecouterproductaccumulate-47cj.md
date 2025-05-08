---
layout: stdlib-reference
---

# coopVecOuterProductAccumulate

## Description

Accumulate the outer product of two cooperative vectors into a matrix.



## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="coopvecouterproductaccumulate-47cj.html">coopVecOuterProductAccumulate</a>&lt;<a href="coopvecouterproductaccumulate-47cj.html#typeparam-T" class="code_type">T</a>, <a href="coopvecouterproductaccumulate-47cj.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="coopvecouterproductaccumulate-47cj.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecouterproductaccumulate-47cj.html#typeparam-T" class="code_type">T</a>, <a href="coopvecouterproductaccumulate-47cj.html#decl-M" class="code_var">M</a>&gt; <a href="coopvecouterproductaccumulate-47cj.html#decl-a" class="code_param">a</a>,
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecouterproductaccumulate-47cj.html#typeparam-T" class="code_type">T</a>, <a href="coopvecouterproductaccumulate-47cj.html#decl-N" class="code_var">N</a>&gt; <a href="coopvecouterproductaccumulate-47cj.html#decl-b" class="code_param">b</a>,
    <a href="../types/rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="coopvecouterproductaccumulate-47cj.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="coopvecouterproductaccumulate-47cj.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <span class="code_keyword">uint</span> <a href="coopvecouterproductaccumulate-47cj.html#decl-matrixStride" class="code_param">matrixStride</a>,
    <a href="../types/coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="coopvecouterproductaccumulate-47cj.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecouterproductaccumulate-47cj.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>)
    <span class='code_keyword'>where</span> <a href="coopvecouterproductaccumulate-47cj.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> <a href="coopvecouterproductaccumulate-47cj.html">coopVecOuterProductAccumulate</a>&lt;<a href="coopvecouterproductaccumulate-47cj.html#typeparam-T" class="code_type">T</a>, <a href="coopvecouterproductaccumulate-47cj.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="coopvecouterproductaccumulate-47cj.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="coopvecouterproductaccumulate-47cj.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecouterproductaccumulate-47cj.html#typeparam-T" class="code_type">T</a>, <a href="coopvecouterproductaccumulate-47cj.html#decl-M" class="code_var">M</a>&gt; <a href="coopvecouterproductaccumulate-47cj.html#decl-a" class="code_param">a</a>,
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecouterproductaccumulate-47cj.html#typeparam-T" class="code_type">T</a>, <a href="coopvecouterproductaccumulate-47cj.html#decl-N" class="code_var">N</a>&gt; <a href="coopvecouterproductaccumulate-47cj.html#decl-b" class="code_param">b</a>,
    <a href="../types/rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="coopvecouterproductaccumulate-47cj.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="../types/defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="coopvecouterproductaccumulate-47cj.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="coopvecouterproductaccumulate-47cj.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <span class="code_keyword">uint</span> <a href="coopvecouterproductaccumulate-47cj.html#decl-matrixStride" class="code_param">matrixStride</a>,
    <a href="../types/coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="coopvecouterproductaccumulate-47cj.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecouterproductaccumulate-47cj.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>)
    <span class='code_keyword'>where</span> <a href="coopvecouterproductaccumulate-47cj.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> <a href="coopvecouterproductaccumulate-47cj.html">coopVecOuterProductAccumulate</a>&lt;<a href="coopvecouterproductaccumulate-47cj.html#typeparam-T" class="code_type">T</a>, <a href="coopvecouterproductaccumulate-47cj.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="coopvecouterproductaccumulate-47cj.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="coopvecouterproductaccumulate-47cj.html#typeparam-U" class="code_type">U</a>, <a href="coopvecouterproductaccumulate-47cj.html#decl-IgnoredBufferSize" class="code_var">IgnoredBufferSize</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecouterproductaccumulate-47cj.html#typeparam-T" class="code_type">T</a>, <a href="coopvecouterproductaccumulate-47cj.html#decl-M" class="code_var">M</a>&gt; <a href="coopvecouterproductaccumulate-47cj.html#decl-a" class="code_param">a</a>,
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecouterproductaccumulate-47cj.html#typeparam-T" class="code_type">T</a>, <a href="coopvecouterproductaccumulate-47cj.html#decl-N" class="code_var">N</a>&gt; <a href="coopvecouterproductaccumulate-47cj.html#decl-b" class="code_param">b</a>,
    <a href="coopvecouterproductaccumulate-47cj.html#typeparam-U" class="code_type">U</a>[<a href="coopvecouterproductaccumulate-47cj.html#decl-IgnoredBufferSize" class="code_var">IgnoredBufferSize</a>] <a href="coopvecouterproductaccumulate-47cj.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="coopvecouterproductaccumulate-47cj.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <span class="code_keyword">uint</span> <a href="coopvecouterproductaccumulate-47cj.html#decl-matrixStride" class="code_param">matrixStride</a>,
    <a href="../types/coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="coopvecouterproductaccumulate-47cj.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecouterproductaccumulate-47cj.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>)
    <span class='code_keyword'>where</span> <a href="coopvecouterproductaccumulate-47cj.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="coopvecouterproductaccumulate-47cj.html#typeparam-U" class="code_type">U</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)
####  <a id="decl-M"></a>M  : int
####  <a id="decl-N"></a>N  : int
####  <a id="typeparam-IgnoredBufferElementType"></a>IgnoredBufferElementType
####  <a id="typeparam-U"></a>U: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)
####  <a id="decl-IgnoredBufferSize"></a>IgnoredBufferSize  : int

## Parameters

####  <a id="decl-a"></a>a  : [CoopVec](../types/coopvec-04/index.html)\<[T](../types/coopvec-04/index.html#typeparam-T), M\>
The first cooperative vector.

####  <a id="decl-b"></a>b  : [CoopVec](../types/coopvec-04/index.html)\<[T](../types/coopvec-04/index.html#typeparam-T), [N](../types/coopvec-04/index.html#decl-N)\>
The second cooperative vector.

####  <a id="decl-matrix"></a>matrix  : [RWByteAddressBuffer](../types/rwbyteaddressbuffer-0126d/index.html)
The matrix buffer to accumulate the result into.

####  <a id="decl-matrixOffset"></a>matrixOffset  : int
Byte offset into the matrix buffer.

####  <a id="decl-matrixStride"></a>matrixStride  : uint
The stride between matrix rows/columns in bytes.

####  <a id="decl-memoryLayout"></a>memoryLayout  : [CoopVecMatrixLayout](../types/coopvecmatrixlayout-047d/index.html)
Specifies the memory layout of the matrix (row-major or column-major).

####  <a id="decl-matrixInterpretation"></a>matrixInterpretation  : [CoopVecComponentType](../types/coopveccomponenttype-047g/index.html)
Specifies how to interpret the values in the matrix.

####  <a id="decl-matrix"></a>matrix  : [RWStructuredBuffer](../types/rwstructuredbuffer-012c/index.html)\<IgnoredBufferElementType, [DefaultDataLayout](../types/defaultdatalayout-07b/index.html)\>
The matrix buffer to accumulate the result into.

####  <a id="decl-matrix"></a>matrix  : [U](coopvecouterproductaccumulate-47cj.html#typeparam-U) \[ [IgnoredBufferSize](coopvecouterproductaccumulate-47cj.html#decl-IgnoredBufferSize) \]
The matrix buffer to accumulate the result into.


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

Requires capability: `spvCooperativeVectorTrainingNV`.


