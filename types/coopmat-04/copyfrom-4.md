---
layout: stdlib-reference
---

# linalg::CoopMat\<T, MemoryScope S, int M, int N, linalg\.CoopMatMatrixUse R\>\.copyFrom

## Description

Copies the contents from another cooperative matrix into this matrix.



## Signature 

<pre>
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="copyfrom-4.html">copyFrom</a>&lt;<a href="copyfrom-4.html#typeparam-U" class="code_type">U</a>&gt;(
    linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="copyfrom-4.html#typeparam-U" class="code_type">U</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="copyfrom-4.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="copyfrom-4.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/icoopelement-015/index.html" class="code_type">ICoopElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/icoopelement-015/index.html" class="code_type">ICoopElement</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U: [ICoopElement](../../interfaces/icoopelement-015/index.html)
The element type of the source cooperative matrix.


## Parameters

####  <a id="decl-other"></a>other  : linalg\.[CoopMat](index.html)\<U, [S](index.html#decl-S), [M](index.html#decl-M), [N](index.html#decl-N), [R](index.html#decl-R)\>
The source cooperative matrix to copy from.


## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixConversionsNV`.


