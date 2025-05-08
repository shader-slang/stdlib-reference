---
layout: stdlib-reference
---

# CoopMat\<T, S:CoopMatScope, M:int, N:int, R:CoopMatMatrixUse\>\.copyFrom

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../coopmatscope-047/index.html" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="copyfrom-4.html">copyFrom</a>&lt;<a href="copyfrom-4.html#typeparam-U" class="code_type">U</a>&gt;(
    <a href="index.html" class="code_type">CoopMat</a>&lt;<a href="copyfrom-4.html#typeparam-U" class="code_type">U</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="copyfrom-4.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="copyfrom-4.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U: [\_\_BuiltinArithmeticType](../../interfaces/0_builtinarithmetictype-029j/index.html)

## Parameters

####  <a id="decl-other"></a>other  : [CoopMat](index.html)\<U, [S](index.html#decl-S), [M](index.html#decl-M), [N](index.html#decl-N), [R](index.html#decl-R)\>

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.


