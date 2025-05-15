---
layout: stdlib-reference
---

# linalg::CoopMat\<T, S:MemoryScope, M:int, N:int, R:linalg\.CoopMatMatrixUse\>\.ReduceRowAndColumn

## Description





## Signature 

<pre>
linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, RM, RN, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>.<a href="../coopmatmatrixuse-047d/index.html#decl-MatrixAccumulator" class="code_var">MatrixAccumulator</a>&gt; linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../memoryscope-06/index.html" class="code_type">MemoryScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="reducerowandcolumn-069c.html">ReduceRowAndColumn</a>&lt;<a href="reducerowandcolumn-069c.html#decl-RM" class="code_var">RM</a>:<span class="code_keyword">int</span>, <a href="reducerowandcolumn-069c.html#decl-RN" class="code_var">RN</a>:<span class="code_keyword">int</span>&gt;(
    (<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-T" class="code_type">T</a>)-&gt;<a href="index.html#typeparam-T" class="code_type">T</a> <a href="reducerowandcolumn-069c.html#decl-combineOp" class="code_param">combineOp</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="decl-RM"></a>RM  : int
####  <a id="decl-RN"></a>RN  : int

## Parameters

####  <a id="decl-combineOp"></a>combineOp  : \( [T](index.html#typeparam-T), [T](index.html#typeparam-T) \) -\> [T](index.html#typeparam-T)

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixReductionsNV`.


