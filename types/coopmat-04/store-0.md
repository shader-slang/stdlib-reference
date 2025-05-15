---
layout: stdlib-reference
---

# linalg::CoopMat\<T, S:MemoryScope, M:int, N:int, R:linalg\.CoopMatMatrixUse\>\.Store

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../memoryscope-06/index.html" class="code_type">MemoryScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="store-0.html">Store</a>&lt;<a href="store-0.html#decl-matrixLayout" class="code_var">matrixLayout</a>:linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>&gt;(
    <a href="../rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="store-0.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../memoryscope-06/index.html" class="code_type">MemoryScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="store-0.html">Store</a>&lt;<a href="store-0.html#decl-matrixLayout" class="code_var">matrixLayout</a>:linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>&gt;(
    <a href="../rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="store-0.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../memoryscope-06/index.html" class="code_type">MemoryScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="store-0.html">Store</a>&lt;<a href="store-0.html#decl-matrixLayout" class="code_var">matrixLayout</a>:linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>&gt;(
    <a href="../ptr-0/index.html" class="code_type">Ptr</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt; <a href="store-0.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../memoryscope-06/index.html" class="code_type">MemoryScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="store-0.html">Store</a>&lt;<a href="store-0.html#decl-matrixLayout" class="code_var">matrixLayout</a>:linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>, V:<span class="code_keyword">int</span>&gt;(
    <a href="index.html#typeparam-T" class="code_type">T</a>[V] <a href="store-0.html#decl-data" class="code_param">data</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../memoryscope-06/index.html" class="code_type">MemoryScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="store-0.html">Store</a>&lt;<a href="store-0.html#decl-matrixLayout" class="code_var">matrixLayout</a>:linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>, U, V:<span class="code_keyword">int</span>&gt;(
    <a href="store-0.html#typeparam-U" class="code_type">U</a>[<a href="store-0.html#decl-V" class="code_var">V</a>] <a href="store-0.html#decl-data" class="code_param">data</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../memoryscope-06/index.html" class="code_type">MemoryScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="store-0.html">Store</a>&lt;<a href="store-0.html#decl-matrixLayout" class="code_var">matrixLayout</a>:linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>, U, V:<span class="code_keyword">int</span>, L:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="store-0.html#typeparam-U" class="code_type">U</a>, <a href="store-0.html#decl-L" class="code_var">L</a>&gt;[V] <a href="store-0.html#decl-data" class="code_param">data</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="decl-matrixLayout"></a>matrixLayout  : linalg\.[CoopMatMatrixLayout](../coopmatmatrixlayout-047d/index.html)
####  <a id="decl-V"></a>V  : int
####  <a id="typeparam-U"></a>U
####  <a id="decl-L"></a>L  : int

## Parameters

####  <a id="decl-buffer"></a>buffer  : [RWStructuredBuffer](../rwstructuredbuffer-012c/index.html)\<[T](../rwstructuredbuffer-012c/index.html#typeparam-T), [DefaultDataLayout](../defaultdatalayout-07b/index.html)\>
####  <a id="decl-element"></a>element  : uint
####  <a id="decl-stride"></a>stride  : uint
####  <a id="decl-buffer"></a>buffer  : [RWByteAddressBuffer](../rwbyteaddressbuffer-0126d/index.html)
####  <a id="decl-buffer"></a>buffer  : [Ptr](../ptr-0/index.html)\<[T](../ptr-0/index.html#typeparam-T)\>
####  <a id="decl-data"></a>data  : [T](index.html#typeparam-T) \[ V \]
####  <a id="decl-data"></a>data  : [U](store-0.html#typeparam-U) \[ [V](store-0.html#decl-V) \]
####  <a id="decl-data"></a>data  : [vector](../vector/index.html)\<U, L\> \[ V \]

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.


