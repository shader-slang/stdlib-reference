---
layout: stdlib-reference
---

# coopMatLoad

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/global-decls/coopmatload-47">coopMatLoad</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;(
    <a href="/stdlib-reference/types/byteaddressbuffer-04b/index" class="code_type">ByteAddressBuffer</a> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/global-decls/coopmatload-47">coopMatLoad</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;(
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/global-decls/coopmatload-47">coopMatLoad</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;(
    <a href="/stdlib-reference/types/structuredbuffer-0a/index" class="code_type">StructuredBuffer</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/global-decls/coopmatload-47#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/global-decls/coopmatload-47">coopMatLoad</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;(
    <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/global-decls/coopmatload-47#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/global-decls/coopmatload-47">coopMatLoad</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;(
    <a href="/stdlib-reference/types/ptr-0/index" class="code_type">Ptr</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/global-decls/coopmatload-47#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/global-decls/coopmatload-47">coopMatLoad</a>&lt;<a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatload-47#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>, U:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a>[<a href="/stdlib-reference/global-decls/coopmatload-47#decl-U" class="code_var">U</a>] <a href="/stdlib-reference/global-decls/coopmatload-47#decl-data" class="code_param">data</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/global-decls/coopmatload-47#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopmatload-47#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-T}
#### S  : [CoopMatScope](/stdlib-reference/types/coopmatscope-047/index) {#decl-S}
#### M  : int {#decl-M}
#### N  : int {#decl-N}
#### R  : [CoopMatMatrixUse](/stdlib-reference/types/coopmatmatrixuse-047d/index) {#decl-R}
#### U  : int {#decl-U}

## Parameters

#### buffer  : [ByteAddressBuffer](/stdlib-reference/types/byteaddressbuffer-04b/index) {#decl-buffer}
#### element  : uint {#decl-element}
#### stride  : uint {#decl-stride}
#### matrixLayout  : [CoopMatMatrixLayout](/stdlib-reference/types/coopmatmatrixlayout-047d/index) {#decl-matrixLayout}
#### buffer  : [RWByteAddressBuffer](/stdlib-reference/types/rwbyteaddressbuffer-0126d/index) {#decl-buffer}
#### buffer  : [StructuredBuffer](/stdlib-reference/types/structuredbuffer-0a/index)\<[T](/stdlib-reference/types/structuredbuffer-0a/index#typeparam-T), [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index)\> {#decl-buffer}
#### buffer  : [RWStructuredBuffer](/stdlib-reference/types/rwstructuredbuffer-012c/index)\<[T](/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-T), [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index)\> {#decl-buffer}
#### buffer  : [Ptr](/stdlib-reference/types/ptr-0/index)\<[T](/stdlib-reference/types/ptr-0/index#typeparam-T)\> {#decl-buffer}
#### data  : [T](/stdlib-reference/global-decls/coopmatload-47#typeparam-T) \[ [U](/stdlib-reference/global-decls/coopmatload-47#decl-U) \] {#decl-data}

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.


