---
layout: stdlib-reference
---

# coopVecOuterProductAccumulate

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj">coopVecOuterProductAccumulate</a>&lt;<a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-a" class="code_param">a</a>,
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-b" class="code_param">b</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-matrixStride" class="code_param">matrixStride</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj">coopVecOuterProductAccumulate</a>&lt;<a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-a" class="code_param">a</a>,
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-b" class="code_param">b</a>,
    <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-matrixStride" class="code_param">matrixStride</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj">coopVecOuterProductAccumulate</a>&lt;<a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-IgnoredBufferSize" class="code_var">IgnoredBufferSize</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-a" class="code_param">a</a>,
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-b" class="code_param">b</a>,
    <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-U" class="code_type">U</a>[<a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-IgnoredBufferSize" class="code_var">IgnoredBufferSize</a>] <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-matrix" class="code_param">matrix</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-matrixOffset" class="code_param">matrixOffset</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-matrixStride" class="code_param">matrixStride</a>,
    <a href="/stdlib-reference/types/coopvecmatrixlayout-047d/index" class="code_type">CoopVecMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-memoryLayout" class="code_param">memoryLayout</a>,
    <a href="/stdlib-reference/types/coopveccomponenttype-047g/index" class="code_type">CoopVecComponentType</a> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-matrixInterpretation" class="code_param">matrixInterpretation</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-T}
#### M  : int {#decl-M}
#### N  : int {#decl-N}
#### IgnoredBufferElementType {#typeparam-IgnoredBufferElementType}
#### U: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-U}
#### IgnoredBufferSize  : int {#decl-IgnoredBufferSize}

## Parameters

#### a  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<[T](/stdlib-reference/types/coopvec-04/index#typeparam-T), M\> {#decl-a}
#### b  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<[T](/stdlib-reference/types/coopvec-04/index#typeparam-T), [N](/stdlib-reference/types/coopvec-04/index#decl-N)\> {#decl-b}
#### matrix  : [RWByteAddressBuffer](/stdlib-reference/types/rwbyteaddressbuffer-0126d/index) {#decl-matrix}
#### matrixOffset  : int {#decl-matrixOffset}
#### matrixStride  : uint {#decl-matrixStride}
#### memoryLayout  : [CoopVecMatrixLayout](/stdlib-reference/types/coopvecmatrixlayout-047d/index) {#decl-memoryLayout}
#### matrixInterpretation  : [CoopVecComponentType](/stdlib-reference/types/coopveccomponenttype-047g/index) {#decl-matrixInterpretation}
#### matrix  : [RWStructuredBuffer](/stdlib-reference/types/rwstructuredbuffer-012c/index)\<IgnoredBufferElementType, [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index)\> {#decl-matrix}
#### matrix  : [U](/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#typeparam-U) \[ [IgnoredBufferSize](/stdlib-reference/global-decls/coopvecouterproductaccumulate-47cj#decl-IgnoredBufferSize) \] {#decl-matrix}

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


