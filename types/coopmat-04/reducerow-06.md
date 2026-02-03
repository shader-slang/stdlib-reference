---
layout: stdlib-reference
---

# linalg::CoopMat\<T, MemoryScope S, int M, int N, linalg\.CoopMatMatrixUse R\>\.ReduceRow

## Description

Reduces the matrix along rows using the specified combining operation.
Requires Vulkan with SPV_NV_cooperative_matrix2 extension.



## Signature 

<pre>
linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, RN, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>.<a href="../coopmatmatrixuse-047d/index.html#decl-MatrixAccumulator" class="code_var">MatrixAccumulator</a>&gt; linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="reducerow-06.html">ReduceRow</a>&lt;<span class="code_keyword">int</span> <a href="reducerow-06.html#decl-RN" class="code_var">RN</a>&gt;(
    (<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-T" class="code_type">T</a>)-&gt;<a href="index.html#typeparam-T" class="code_type">T</a> <a href="reducerow-06.html#decl-combineOp" class="code_param">combineOp</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/icoopelement-015/index.html" class="code_type">ICoopElement</a>;

</pre>

## Generic Parameters

####  <a id="decl-RN"></a>RN  : int
The number of columns in the resulting reduced matrix.


## Parameters

####  <a id="decl-combineOp"></a>combineOp  : \( [T](index.html#typeparam-T), [T](index.html#typeparam-T) \) -\> [T](index.html#typeparam-T)
The binary function used to combine elements (e.g., addition, multiplication).


## Return value
A reduced accumulator matrix with dimensions M42949672354294967191RN.


## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixReductionsNV`.


