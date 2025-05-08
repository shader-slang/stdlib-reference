---
layout: stdlib-reference
---

# CoopMat\<T, S:CoopMatScope, M:int, N:int, R:CoopMatMatrixUse\>\.loadAny

## Description





## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../coopmatscope-047/index.html" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="loadany-4.html">loadAny</a>&lt;<a href="loadany-4.html#typeparam-U" class="code_type">U</a>, <a href="loadany-4.html#decl-V" class="code_var">V</a>:<span class="code_keyword">int</span>&gt;(
    <a href="loadany-4.html#typeparam-U" class="code_type">U</a>[<a href="loadany-4.html#decl-V" class="code_var">V</a>] <a href="loadany-4.html#decl-data" class="code_param">data</a>,
    <span class="code_keyword">uint</span> <a href="loadany-4.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="loadany-4.html#decl-stride" class="code_param">stride</a>,
    <a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a> <a href="loadany-4.html#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../coopmatscope-047/index.html" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="loadany-4.html">loadAny</a>&lt;<a href="loadany-4.html#typeparam-U" class="code_type">U</a>, <a href="loadany-4.html#decl-V" class="code_var">V</a>:<span class="code_keyword">int</span>, <a href="loadany-4.html#decl-L" class="code_var">L</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="loadany-4.html#typeparam-U" class="code_type">U</a>, <a href="loadany-4.html#decl-L" class="code_var">L</a>&gt;[V] <a href="loadany-4.html#decl-data" class="code_param">data</a>,
    <span class="code_keyword">uint</span> <a href="loadany-4.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="loadany-4.html#decl-stride" class="code_param">stride</a>,
    <a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a> <a href="loadany-4.html#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U
####  <a id="decl-V"></a>V  : int
####  <a id="decl-L"></a>L  : int

## Parameters

####  <a id="decl-data"></a>data  : [U](loadany-4.html#typeparam-U) \[ [V](loadany-4.html#decl-V) \]
####  <a id="decl-element"></a>element  : uint
####  <a id="decl-stride"></a>stride  : uint
####  <a id="decl-matrixLayout"></a>matrixLayout  : [CoopMatMatrixLayout](../coopmatmatrixlayout-047d/index.html)
####  <a id="decl-data"></a>data  : [vector](../vector/index.html)\<U, L\> \[ V \]

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.


