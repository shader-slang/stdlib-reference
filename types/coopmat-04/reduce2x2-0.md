---
layout: stdlib-reference
---

# linalg::CoopMat\<T, MemoryScope S, int M, int N, linalg\.CoopMatMatrixUse R\>\.Reduce2x2

## Description





## Signature 

<pre>
linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>/2, <a href="index.html#decl-N" class="code_var">N</a>/2, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>.<a href="../coopmatmatrixuse-047d/index.html#decl-MatrixAccumulator" class="code_var">MatrixAccumulator</a>&gt; linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="../memoryscope-06/index.html" class="code_type">MemoryScope</a>S, <span class="code_keyword">int</span> M, <span class="code_keyword">int</span> N, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="reduce2x2-0.html">Reduce2x2</a>(
    (<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-T" class="code_type">T</a>)-&gt;<a href="index.html#typeparam-T" class="code_type">T</a> <a href="reduce2x2-0.html#decl-combineOp" class="code_param">combineOp</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Parameters

####  <a id="decl-combineOp"></a>combineOp  : \( [T](index.html#typeparam-T), [T](index.html#typeparam-T) \) -\> [T](index.html#typeparam-T)

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixReductionsNV`.


