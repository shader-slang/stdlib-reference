---
layout: stdlib-reference
---

# CoopMat\<T, S:CoopMatScope, M:int, N:int, R:CoopMatMatrixUse\>\.load

## Description





## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="/stdlib-reference/types/coopmat-04/load">load</a>(
    <a href="/stdlib-reference/types/byteaddressbuffer-04b/index" class="code_type">ByteAddressBuffer</a> <a href="/stdlib-reference/types/coopmat-04/load#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/load#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/load#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/types/coopmat-04/load#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="/stdlib-reference/types/coopmat-04/load">load</a>(
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a> <a href="/stdlib-reference/types/coopmat-04/load#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/load#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/load#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/types/coopmat-04/load#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="/stdlib-reference/types/coopmat-04/load">load</a>(
    <a href="/stdlib-reference/types/structuredbuffer-0a/index" class="code_type">StructuredBuffer</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/types/coopmat-04/load#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/load#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/load#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/types/coopmat-04/load#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="/stdlib-reference/types/coopmat-04/load">load</a>(
    <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/types/coopmat-04/load#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/load#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/load#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/types/coopmat-04/load#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="/stdlib-reference/types/coopmat-04/load">load</a>(
    <a href="/stdlib-reference/types/ptr-0/index" class="code_type">Ptr</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/types/coopmat-04/load#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/load#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/load#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/types/coopmat-04/load#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="/stdlib-reference/types/coopmat-04/load">load</a>&lt;<a href="/stdlib-reference/types/coopmat-04/load#decl-U" class="code_var">U</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>[U] <a href="/stdlib-reference/types/coopmat-04/load#decl-data" class="code_param">data</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/load#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/load#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/types/coopmat-04/load#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

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
#### data  : [T](/stdlib-reference/types/coopmat-04/index#typeparam-T) \[ U \] {#decl-data}

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.


