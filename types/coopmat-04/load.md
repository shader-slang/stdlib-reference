---
layout: stdlib-reference
---

# CoopMat\<T, S:CoopMatScope, M:int, N:int, R:CoopMatMatrixUse\>\.load

## Description





## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../coopmatscope-047/index.html" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="load.html">load</a>(
    <a href="../byteaddressbuffer-04b/index.html" class="code_type">ByteAddressBuffer</a> <a href="load.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="load.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="load.html#decl-stride" class="code_param">stride</a>,
    <a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a> <a href="load.html#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../coopmatscope-047/index.html" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="load.html">load</a>(
    <a href="../rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="load.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="load.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="load.html#decl-stride" class="code_param">stride</a>,
    <a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a> <a href="load.html#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../coopmatscope-047/index.html" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="load.html">load</a>(
    <a href="../structuredbuffer-0a/index.html" class="code_type">StructuredBuffer</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="load.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="load.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="load.html#decl-stride" class="code_param">stride</a>,
    <a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a> <a href="load.html#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../coopmatscope-047/index.html" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="load.html">load</a>(
    <a href="../rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="load.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="load.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="load.html#decl-stride" class="code_param">stride</a>,
    <a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a> <a href="load.html#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../coopmatscope-047/index.html" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="load.html">load</a>(
    <a href="../ptr-0/index.html" class="code_type">Ptr</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt; <a href="load.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="load.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="load.html#decl-stride" class="code_param">stride</a>,
    <a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a> <a href="load.html#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../coopmatscope-047/index.html" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="load.html">load</a>&lt;<a href="load.html#decl-U" class="code_var">U</a>:<span class="code_keyword">int</span>&gt;(
    <a href="index.html#typeparam-T" class="code_type">T</a>[U] <a href="load.html#decl-data" class="code_param">data</a>,
    <span class="code_keyword">uint</span> <a href="load.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="load.html#decl-stride" class="code_param">stride</a>,
    <a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a> <a href="load.html#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="decl-U"></a>U  : int

## Parameters

####  <a id="decl-buffer"></a>buffer  : [ByteAddressBuffer](../byteaddressbuffer-04b/index.html)
####  <a id="decl-element"></a>element  : uint
####  <a id="decl-stride"></a>stride  : uint
####  <a id="decl-matrixLayout"></a>matrixLayout  : [CoopMatMatrixLayout](../coopmatmatrixlayout-047d/index.html)
####  <a id="decl-buffer"></a>buffer  : [RWByteAddressBuffer](../rwbyteaddressbuffer-0126d/index.html)
####  <a id="decl-buffer"></a>buffer  : [StructuredBuffer](../structuredbuffer-0a/index.html)\<[T](../structuredbuffer-0a/index.html#typeparam-T), [DefaultDataLayout](../defaultdatalayout-07b/index.html)\>
####  <a id="decl-buffer"></a>buffer  : [RWStructuredBuffer](../rwstructuredbuffer-012c/index.html)\<[T](../rwstructuredbuffer-012c/index.html#typeparam-T), [DefaultDataLayout](../defaultdatalayout-07b/index.html)\>
####  <a id="decl-buffer"></a>buffer  : [Ptr](../ptr-0/index.html)\<[T](../ptr-0/index.html#typeparam-T)\>
####  <a id="decl-data"></a>data  : [T](index.html#typeparam-T) \[ U \]

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.


