---
layout: stdlib-reference
---

# linalg::CoopMat\<T, S:MemoryScope, M:int, N:int, R:linalg\.CoopMatMatrixUse\>\.MapElement

## Description





## Signature 

<pre>
linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>:<a href="../memoryscope-06/index.html" class="code_type">MemoryScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="mapelement-03.html">MapElement</a>(
    (<span class="code_keyword">uint</span>, <span class="code_keyword">uint</span>, <a href="index.html#typeparam-T" class="code_type">T</a>)-&gt;<a href="index.html#typeparam-T" class="code_type">T</a> <a href="mapelement-03.html#decl-mapOp" class="code_param">mapOp</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Parameters

####  <a id="decl-mapOp"></a>mapOp  : \( uint, uint, [T](index.html#typeparam-T) \) -\> [T](index.html#typeparam-T)

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixPerElementOperationsNV`.


