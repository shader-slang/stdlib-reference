---
layout: stdlib-reference
---

# coopVecMatMulPacked

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a>, <a href="coopvecmatmulpacked-47ad.html#decl-M" class="code_var">M</a>&gt; <a href="coopvecmatmulpacked-47ad.html">coopVecMatMulPacked</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-PackedK" class="code_var">PackedK</a>, <a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmulpacked-47ad.html#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="coopvecmatmulpacked-47ad.html#decl-input" class="code_param">input</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmulpacked-47ad.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-k" class="code_param">k</a>,
    <a href="../types/rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="coopvecmatmulpacked-47ad.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmulpacked-47ad.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../types/coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="coopvecmatmulpacked-47ad.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="coopvecmatmulpacked-47ad.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="coopvecmatmulpacked-47ad.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a>, <a href="coopvecmatmulpacked-47ad.html#decl-M" class="code_var">M</a>&gt; <a href="coopvecmatmulpacked-47ad.html">coopVecMatMulPacked</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-PackedK" class="code_var">PackedK</a>, <a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmulpacked-47ad.html#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="coopvecmatmulpacked-47ad.html#decl-input" class="code_param">input</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmulpacked-47ad.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-k" class="code_param">k</a>,
    <a href="../types/byteaddressbuffer-04b/index.html" class="code_type">ByteAddressBuffer</a> <a href="coopvecmatmulpacked-47ad.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmulpacked-47ad.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../types/coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="coopvecmatmulpacked-47ad.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="coopvecmatmulpacked-47ad.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="coopvecmatmulpacked-47ad.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a>, <a href="coopvecmatmulpacked-47ad.html#decl-M" class="code_var">M</a>&gt; <a href="coopvecmatmulpacked-47ad.html">coopVecMatMulPacked</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-PackedK" class="code_var">PackedK</a>, <a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmulpacked-47ad.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmulpacked-47ad.html#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="coopvecmatmulpacked-47ad.html#decl-input" class="code_param">input</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmulpacked-47ad.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-k" class="code_param">k</a>,
    <a href="../types/rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="../types/defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="coopvecmatmulpacked-47ad.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmulpacked-47ad.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../types/coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="coopvecmatmulpacked-47ad.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="coopvecmatmulpacked-47ad.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="coopvecmatmulpacked-47ad.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a>, <a href="coopvecmatmulpacked-47ad.html#decl-M" class="code_var">M</a>&gt; <a href="coopvecmatmulpacked-47ad.html">coopVecMatMulPacked</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-PackedK" class="code_var">PackedK</a>, <a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmulpacked-47ad.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmulpacked-47ad.html#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="coopvecmatmulpacked-47ad.html#decl-input" class="code_param">input</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmulpacked-47ad.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-k" class="code_param">k</a>,
    <a href="../types/structuredbuffer-0a/index.html" class="code_type">StructuredBuffer</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="../types/defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="coopvecmatmulpacked-47ad.html#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmulpacked-47ad.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../types/coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="coopvecmatmulpacked-47ad.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="coopvecmatmulpacked-47ad.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="coopvecmatmulpacked-47ad.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 3:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a>, <a href="coopvecmatmulpacked-47ad.html#decl-M" class="code_var">M</a>&gt; <a href="coopvecmatmulpacked-47ad.html">coopVecMatMulPacked</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-PackedK" class="code_var">PackedK</a>, <a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a>, <a href="coopvecmatmulpacked-47ad.html#decl-PackedK" class="code_var">PackedK</a>&gt; <a href="coopvecmatmulpacked-47ad.html#decl-input" class="code_param">input</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmulpacked-47ad.html#decl-inputInterpretation" class="code_param">inputInterpretation</a>,
    <span class="code_keyword">int</span> <a href="coopvecmatmulpacked-47ad.html#decl-k" class="code_param">k</a>,
    <a href="../types/ptr-0/index.html" class="code_type">Ptr</a>&lt;<span class="code_keyword">void</span>, Access.ReadWrite, AddressSpace.Device, <a href="../types/defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="coopvecmatmulpacked-47ad.html#decl-matrixPtr" class="code_param">matrixPtr</a>,
    <a href="../types/coopveccomponenttype-047g/index.html" class="code_type">CoopVecComponentType</a> <a href="coopvecmatmulpacked-47ad.html#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>,
    <a href="../types/coopvecmatrixlayout-047d/index.html" class="code_type">CoopVecMatrixLayout</a> <a href="coopvecmatmulpacked-47ad.html#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <span class="code_keyword">bool</span> <a href="coopvecmatmulpacked-47ad.html#decl-transpose" class="code_param">transpose</a>,
    <span class="code_keyword">uint</span> <a href="coopvecmatmulpacked-47ad.html#decl-matrixStride" class="code_param">matrixStride</a>)
    <span class='code_keyword'>where</span> <a href="coopvecmatmulpacked-47ad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="coopvecmatmulpacked-47ad.html#typeparam-U" class="code_type">U</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)
####  <a id="decl-M"></a>M  : int
####  <a id="decl-PackedK"></a>PackedK  : int
####  <a id="typeparam-U"></a>U: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)
####  <a id="typeparam-IgnoredBufferElementType"></a>IgnoredBufferElementType

## Parameters

####  <a id="decl-input"></a>input  : [CoopVec](../types/coopvec-04/index.html)\<U, PackedK\>
####  <a id="decl-inputInterpretation"></a>inputInterpretation  : [CoopVecComponentType](../types/coopveccomponenttype-047g/index.html)
####  <a id="decl-k"></a>k  : int
####  <a id="decl-matrix"></a>matrix  : [RWByteAddressBuffer](../types/rwbyteaddressbuffer-0126d/index.html)
####  <a id="decl-matrixOffset"></a>matrixOffset  : int
####  <a id="decl-matrixInterpretation"></a>matrixInterpretation  : [CoopVecComponentType](../types/coopveccomponenttype-047g/index.html)
####  <a id="decl-memoryLayout"></a>memoryLayout  : [CoopVecMatrixLayout](../types/coopvecmatrixlayout-047d/index.html)
####  <a id="decl-transpose"></a>transpose  : bool
####  <a id="decl-matrixStride"></a>matrixStride  : uint
####  <a id="decl-matrix"></a>matrix  : [ByteAddressBuffer](../types/byteaddressbuffer-04b/index.html)
####  <a id="decl-matrix"></a>matrix  : [RWStructuredBuffer](../types/rwstructuredbuffer-012c/index.html)\<IgnoredBufferElementType, [DefaultDataLayout](../types/defaultdatalayout-07b/index.html)\>
####  <a id="decl-matrix"></a>matrix  : [StructuredBuffer](../types/structuredbuffer-0a/index.html)\<IgnoredBufferElementType, [DefaultDataLayout](../types/defaultdatalayout-07b/index.html)\>
####  <a id="decl-matrixPtr"></a>matrixPtr  : [Ptr](../types/ptr-0/index.html)\<void, Access\.ReadWrite, AddressSpace\.Device, [DefaultDataLayout](../types/defaultdatalayout-07b/index.html)\>

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

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

### Capability Set 2

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.
#### cuda
Available in all stages.

Requires capability: `optix_coopvec`.

### Capability Set 3

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.


