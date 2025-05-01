---
layout: stdlib-reference
---

# DiffTensorView\<T, A\>\.store

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.<a href="store.html">store</a>(
    <span class="code_keyword">uint</span> <a href="store.html#decl-x" class="code_param">x</a>,
    <a href="index.html#typeparam-T" class="code_type">T</a> <a href="store.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.<a href="store.html">store</a>&lt;<a href="store.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="store.html#decl-N" class="code_var">N</a>&gt; <a href="store.html#decl-x" class="code_param">x</a>,
    <a href="index.html#typeparam-T" class="code_type">T</a> <a href="store.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

</pre>

## Generic Parameters

####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : uint
####  <a id="decl-val"></a>val  : [T](index#typeparam-T)
####  <a id="decl-x"></a>x  : [vector](../vector/index)\<uint, [N](../vector/index#decl-N)\>

