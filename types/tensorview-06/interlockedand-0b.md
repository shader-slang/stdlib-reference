---
layout: stdlib-reference
---

# TensorView\<T\>\.InterlockedAnd

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedand-0b.html">InterlockedAnd</a>&lt;<a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="interlockedand-0b.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">int</span> <a href="interlockedand-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <a href="interlockedand-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">int</span>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedand-0b.html">InterlockedAnd</a>&lt;<a href="interlockedand-0b.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedand-0b.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedand-0b.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">int</span> <a href="interlockedand-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <a href="interlockedand-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">int</span>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedand-0b.html">InterlockedAnd</a>&lt;<a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="interlockedand-0b.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">uint</span> <a href="interlockedand-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="interlockedand-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedand-0b.html">InterlockedAnd</a>&lt;<a href="interlockedand-0b.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedand-0b.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedand-0b.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">uint</span> <a href="interlockedand-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="interlockedand-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedand-0b.html">InterlockedAnd</a>&lt;<a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="interlockedand-0b.html#decl-index" class="code_param">index</a>,
    uint64_t <a href="interlockedand-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> uint64_t <a href="interlockedand-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a> == uint64_t;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedand-0b.html">InterlockedAnd</a>&lt;<a href="interlockedand-0b.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedand-0b.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedand-0b.html#decl-index" class="code_param">index</a>,
    uint64_t <a href="interlockedand-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> uint64_t <a href="interlockedand-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a> == uint64_t;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedand-0b.html">InterlockedAnd</a>&lt;<a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="interlockedand-0b.html#decl-index" class="code_param">index</a>,
    int64_t <a href="interlockedand-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> int64_t <a href="interlockedand-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a> == int64_t;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedand-0b.html">InterlockedAnd</a>&lt;<a href="interlockedand-0b.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedand-0b.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedand-0b.html#decl-index" class="code_param">index</a>,
    int64_t <a href="interlockedand-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> int64_t <a href="interlockedand-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="interlockedand-0b.html#typeparam-T" class="code_type">T</a> == int64_t;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-index"></a>index  : uint
####  <a id="decl-val"></a>val  : int
####  <a id="decl-oldVal"></a>oldVal  : int
####  <a id="decl-index"></a>index  : [vector](../vector/index.html)\<uint, [N](../vector/index.html#decl-N)\>
####  <a id="decl-val"></a>val  : uint
####  <a id="decl-oldVal"></a>oldVal  : uint
####  <a id="decl-val"></a>val  : uint64\_t
####  <a id="decl-oldVal"></a>oldVal  : uint64\_t
####  <a id="decl-val"></a>val  : int64\_t
####  <a id="decl-oldVal"></a>oldVal  : int64\_t

## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.



