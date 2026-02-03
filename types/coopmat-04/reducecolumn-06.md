---
layout: stdlib-reference
---

# linalg::CoopMat\<T, MemoryScope S, int M, int N, linalg\.CoopMatMatrixUse R\>\.ReduceColumn

## Description

Reduces the matrix along columns using the specified combining operation.
Requires Vulkan with SPV_NV_cooperative_matrix2 extension.



## Signature 

<pre>
linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, RM, <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>.<a href="../coopmatmatrixuse-047d/index.html#decl-MatrixAccumulator" class="code_var">MatrixAccumulator</a>&gt; linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="reducecolumn-06.html">ReduceColumn</a>&lt;<span class="code_keyword">int</span> <a href="reducecolumn-06.html#decl-RM" class="code_var">RM</a>&gt;(
    (<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-T" class="code_type">T</a>)-&gt;<a href="index.html#typeparam-T" class="code_type">T</a> <a href="reducecolumn-06.html#decl-combineOp" class="code_param">combineOp</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/icoopelement-015/index.html" class="code_type">ICoopElement</a>;

</pre>

## Generic Parameters

####  <a id="decl-RM"></a>RM  : int
The number of rows in the resulting reduced matrix.


## Parameters

####  <a id="decl-combineOp"></a>combineOp  : \( [T](index.html#typeparam-T), [T](index.html#typeparam-T) \) -\> [T](index.html#typeparam-T)
The binary function used to combine elements (e.g., addition, multiplication).


## Return value
A reduced accumulator matrix with dimensions RM42949672354294967191N.


## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixReductionsNV`.


