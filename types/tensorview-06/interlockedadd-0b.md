---
layout: stdlib-reference
---

# TensorView\<T\>\.InterlockedAdd

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedadd-0b.html">InterlockedAdd</a>(
    <span class="code_keyword">uint</span> <a href="interlockedadd-0b.html#decl-index" class="code_param">index</a>,
    <a href="index.html#typeparam-T" class="code_type">T</a> <a href="interlockedadd-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <a href="index.html#typeparam-T" class="code_type">T</a> <a href="interlockedadd-0b.html#decl-oldVal" class="code_param">oldVal</a>);

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedadd-0b.html">InterlockedAdd</a>&lt;<a href="interlockedadd-0b.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedadd-0b.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedadd-0b.html#decl-index" class="code_param">index</a>,
    <a href="index.html#typeparam-T" class="code_type">T</a> <a href="interlockedadd-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <a href="index.html#typeparam-T" class="code_type">T</a> <a href="interlockedadd-0b.html#decl-oldVal" class="code_param">oldVal</a>);

</pre>

## Generic Parameters

####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-index"></a>index  : uint
####  <a id="decl-val"></a>val  : [T](index.html#typeparam-T)
####  <a id="decl-oldVal"></a>oldVal  : [T](index.html#typeparam-T)
####  <a id="decl-index"></a>index  : [vector](../vector/index.html)\<uint, [N](../vector/index.html#decl-N)\>

## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.



