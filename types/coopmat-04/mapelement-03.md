---
layout: stdlib-reference
---

# linalg::CoopMat\<T, MemoryScope S, int M, int N, linalg\.CoopMatMatrixUse R\>\.MapElement

## Description

Applies a per-element operation to the cooperative matrix.
Requires Vulkan with SPV_NV_cooperative_matrix2 extension.



## Signature 

<pre>
linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="mapelement-03.html">MapElement</a>(
    (<span class="code_keyword">uint</span>, <span class="code_keyword">uint</span>, <a href="index.html#typeparam-T" class="code_type">T</a>)-&gt;<a href="index.html#typeparam-T" class="code_type">T</a> <a href="mapelement-03.html#decl-mapOp" class="code_param">mapOp</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/icoopelement-015/index.html" class="code_type">ICoopElement</a>;

linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="mapelement-03.html">MapElement</a>&lt;<a href="mapelement-03.html#typeparam-TFunc" class="code_type">TFunc</a>&gt;(
    <a href="mapelement-03.html#typeparam-TFunc" class="code_type">TFunc</a> <a href="mapelement-03.html#decl-mapOp" class="code_param">mapOp</a>)
    <span class='code_keyword'>where</span> <a href="mapelement-03.html#typeparam-TFunc" class="code_type">TFunc</a> : <a href="../../interfaces/ifunc-01/index.html" class="code_type">IFunc</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">uint</span>, <span class="code_keyword">uint</span>, <a href="index.html#typeparam-T" class="code_type">T</a>&gt;
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/icoopelement-015/index.html" class="code_type">ICoopElement</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-TFunc"></a>TFunc: [IFunc](../../interfaces/ifunc-01/index.html)\<T, uint, uint, T\>

## Parameters

####  <a id="decl-mapOp"></a>mapOp  : \( uint, uint, [T](index.html#typeparam-T) \) -\> [T](index.html#typeparam-T)
A function that takes (row, column, element) and returns a new element value.

####  <a id="decl-mapOp"></a>mapOp  : [TFunc](mapelement-03.html#typeparam-TFunc)
A function that takes (row, column, element) and returns a new element value.


## Return value
A new cooperative matrix with the operation applied to each element.


## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixPerElementOperationsNV`.


