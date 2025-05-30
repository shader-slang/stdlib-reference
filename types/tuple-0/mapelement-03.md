---
layout: stdlib-reference
---

# Tuple\<T\>\.MapElement

## Description





## Signature 

<pre>
linalg.<a href="../coopmat-04/index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="index.html" class="code_type">Tuple</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="mapelement-03.html">MapElement</a>((<span class="code_keyword">uint</span>, <span class="code_keyword">uint</span>, <a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Ts" class="code_type">Ts</a>)-&gt;<a href="index.html#typeparam-T" class="code_type">T</a> <a href="mapelement-03.html#decl-mapOp" class="code_param">mapOp</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == linalg.<a href="../coopmat-04/index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt;, <span class="code_keyword">expand</span> linalg.<a href="../coopmat-04/index.html" class="code_type">CoopMat</a>&lt;<span class="code_keyword">each</span> <a href="index.html#typeparam-Ts" class="code_type">Ts</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt;;

linalg.<a href="../coopmat-04/index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="index.html" class="code_type">Tuple</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="mapelement-03.html">MapElement</a>&lt;<a href="mapelement-03.html#typeparam-TFunc" class="code_type">TFunc</a>&gt;(<a href="mapelement-03.html#typeparam-TFunc" class="code_type">TFunc</a> <a href="mapelement-03.html#decl-mapOp" class="code_param">mapOp</a>)
    <span class='code_keyword'>where</span> <a href="mapelement-03.html#typeparam-TFunc" class="code_type">TFunc</a> : <a href="../../interfaces/ifunc-01/index.html" class="code_type">IFunc</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">uint</span>, <span class="code_keyword">uint</span>, <a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Ts" class="code_type">Ts</a>&gt;
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == linalg.<a href="../coopmat-04/index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt;, <span class="code_keyword">expand</span> linalg.<a href="../coopmat-04/index.html" class="code_type">CoopMat</a>&lt;<span class="code_keyword">each</span> <a href="index.html#typeparam-Ts" class="code_type">Ts</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt;;

</pre>

## Generic Parameters

####  <a id="typeparam-TFunc"></a>TFunc: [IFunc](../../interfaces/ifunc-01/index.html)\<T, uint, uint, T, Ts\>

## Parameters

####  <a id="decl-mapOp"></a>mapOp  : \( uint, uint, [T](index.html#typeparam-T), [Ts](index.html#typeparam-Ts) \) -\> [T](index.html#typeparam-T)
####  <a id="decl-mapOp"></a>mapOp  : [TFunc](mapelement-03.html#typeparam-TFunc)

