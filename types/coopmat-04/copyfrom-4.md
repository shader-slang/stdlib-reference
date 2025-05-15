---
layout: stdlib-reference
---

# linalg::CoopMat\<T, S:MemoryScope, M:int, N:int, R:linalg\.CoopMatMatrixUse\>\.copyFrom

## Description

Copies the contents from another cooperative matrix into this matrix.



## Signature 

<pre>
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../memoryscope-06/index.html" class="code_type">MemoryScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="copyfrom-4.html">copyFrom</a>&lt;<a href="copyfrom-4.html#typeparam-U" class="code_type">U</a>&gt;(
    linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="copyfrom-4.html#typeparam-U" class="code_type">U</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="copyfrom-4.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="copyfrom-4.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U: [\_\_BuiltinArithmeticType](../../interfaces/0_builtinarithmetictype-029j/index.html)
The element type of the source cooperative matrix.


## Parameters

####  <a id="decl-other"></a>other  : linalg\.[CoopMat](index.html)\<U, [S](index.html#decl-S), [M](index.html#decl-M), [N](index.html#decl-N), [R](index.html#decl-R)\>
The source cooperative matrix to copy from.


## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixConversionsNV`.


