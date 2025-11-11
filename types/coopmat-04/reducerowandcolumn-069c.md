---
layout: stdlib-reference
---

# linalg::CoopMat\<T, MemoryScope S, int M, int N, linalg\.CoopMatMatrixUse R\>\.ReduceRowAndColumn

## Description

Reduces the matrix along both rows and columns using the specified combining operation.
Requires Vulkan with SPV_NV_cooperative_matrix2 extension.



## Signature 

<pre>
linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, RM, RN, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>.<a href="../coopmatmatrixuse-047d/index.html#decl-MatrixAccumulator" class="code_var">MatrixAccumulator</a>&gt; linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="reducerowandcolumn-069c.html">ReduceRowAndColumn</a>&lt;<span class="code_keyword">int</span> <a href="reducerowandcolumn-069c.html#decl-RM" class="code_var">RM</a>, <span class="code_keyword">int</span> <a href="reducerowandcolumn-069c.html#decl-RN" class="code_var">RN</a>&gt;(
    (<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-T" class="code_type">T</a>)-&gt;<a href="index.html#typeparam-T" class="code_type">T</a> <a href="reducerowandcolumn-069c.html#decl-combineOp" class="code_param">combineOp</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="decl-RM"></a>RM  : int
The number of rows in the resulting reduced matrix.

####  <a id="decl-RN"></a>RN  : int
The number of columns in the resulting reduced matrix.


## Parameters

####  <a id="decl-combineOp"></a>combineOp  : \( [T](index.html#typeparam-T), [T](index.html#typeparam-T) \) -\> [T](index.html#typeparam-T)
The binary function used to combine elements (e.g., addition, multiplication).


## Return value
A reduced accumulator matrix with dimensions RM42949672354294967191RN.


## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixReductionsNV`.


