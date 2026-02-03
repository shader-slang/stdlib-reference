---
layout: stdlib-reference
---

# linalg\.CoopMat\<T, S, M, N, R\>\.convertUse

## Description

Convert cooperative matrix accumulator to another cooperative matrix with a different use, such as
<span class='code'><a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>.<a href="../coopmatmatrixuse-047d/index.html#decl-MatrixA" class="code_var">MatrixA</a></span> or <span class='code'><a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>.<a href="../coopmatmatrixuse-047d/index.html#decl-MatrixB" class="code_var">MatrixB</a></span>.
Available when targeting SPIR-V only, uses the <span class='code'>SPV_NV_cooperative_matrix2</span> extension.




## Signature 

<pre>
linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, R1&gt; linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt;.<a href="convertuse-7.html">convertUse</a>&lt;linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R1&gt;()
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/icoopelement-015/index.html" class="code_type">ICoopElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-R" class="code_var">R</a> == linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>.<a href="../coopmatmatrixuse-047d/index.html#decl-MatrixAccumulator" class="code_var">MatrixAccumulator</a>;

</pre>

## Generic Parameters

####  <a id="decl-R1"></a>R1  : linalg\.[CoopMatMatrixUse](../coopmatmatrixuse-047d/index.html)
The matrix use specifier to convert to (MatrixA or MatrixB).


## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixConversionsNV`.


