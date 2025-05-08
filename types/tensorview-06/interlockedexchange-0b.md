---
layout: stdlib-reference
---

# TensorView\<T\>\.InterlockedExchange

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedexchange-0b.html">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <a href="interlockedexchange-0b.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">int</span> <a href="interlockedexchange-0b.html#decl-va" class="code_param">va</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <a href="interlockedexchange-0b.html#decl-oldVall" class="code_param">oldVall</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">int</span>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedexchange-0b.html">InterlockedExchange</a>&lt;<a href="interlockedexchange-0b.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedexchange-0b.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedexchange-0b.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">int</span> <a href="interlockedexchange-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <a href="interlockedexchange-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">int</span>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedexchange-0b.html">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <a href="interlockedexchange-0b.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">uint</span> <a href="interlockedexchange-0b.html#decl-va" class="code_param">va</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="interlockedexchange-0b.html#decl-oldVall" class="code_param">oldVall</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedexchange-0b.html">InterlockedExchange</a>&lt;<a href="interlockedexchange-0b.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedexchange-0b.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedexchange-0b.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">uint</span> <a href="interlockedexchange-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="interlockedexchange-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedexchange-0b.html">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <a href="interlockedexchange-0b.html#decl-index" class="code_param">index</a>,
    uint64_t <a href="interlockedexchange-0b.html#decl-va" class="code_param">va</a>,
    <span class="code_keyword">out</span> uint64_t <a href="interlockedexchange-0b.html#decl-oldVall" class="code_param">oldVall</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == uint64_t;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedexchange-0b.html">InterlockedExchange</a>&lt;<a href="interlockedexchange-0b.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedexchange-0b.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedexchange-0b.html#decl-index" class="code_param">index</a>,
    uint64_t <a href="interlockedexchange-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> uint64_t <a href="interlockedexchange-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == uint64_t;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedexchange-0b.html">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <a href="interlockedexchange-0b.html#decl-index" class="code_param">index</a>,
    int64_t <a href="interlockedexchange-0b.html#decl-va" class="code_param">va</a>,
    <span class="code_keyword">out</span> int64_t <a href="interlockedexchange-0b.html#decl-oldVall" class="code_param">oldVall</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == int64_t;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedexchange-0b.html">InterlockedExchange</a>&lt;<a href="interlockedexchange-0b.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedexchange-0b.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedexchange-0b.html#decl-index" class="code_param">index</a>,
    int64_t <a href="interlockedexchange-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> int64_t <a href="interlockedexchange-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == int64_t;

<span class="code_keyword">float</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedexchange-0b.html">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <a href="interlockedexchange-0b.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">float</span> <a href="interlockedexchange-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="interlockedexchange-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>;

<span class="code_keyword">float</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedexchange-0b.html">InterlockedExchange</a>&lt;<a href="interlockedexchange-0b.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedexchange-0b.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedexchange-0b.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">float</span> <a href="interlockedexchange-0b.html#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="interlockedexchange-0b.html#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>;

</pre>

## Generic Parameters

####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-index"></a>index  : uint
####  <a id="decl-va"></a>va  : int
####  <a id="decl-oldVall"></a>oldVall  : int
####  <a id="decl-index"></a>index  : [vector](../vector/index.html)\<uint, [N](../vector/index.html#decl-N)\>
####  <a id="decl-val"></a>val  : int
####  <a id="decl-oldVal"></a>oldVal  : int
####  <a id="decl-va"></a>va  : uint
####  <a id="decl-oldVall"></a>oldVall  : uint
####  <a id="decl-val"></a>val  : uint
####  <a id="decl-oldVal"></a>oldVal  : uint
####  <a id="decl-va"></a>va  : uint64\_t
####  <a id="decl-oldVall"></a>oldVall  : uint64\_t
####  <a id="decl-val"></a>val  : uint64\_t
####  <a id="decl-oldVal"></a>oldVal  : uint64\_t
####  <a id="decl-va"></a>va  : int64\_t
####  <a id="decl-oldVall"></a>oldVall  : int64\_t
####  <a id="decl-val"></a>val  : int64\_t
####  <a id="decl-oldVal"></a>oldVal  : int64\_t
####  <a id="decl-val"></a>val  : float
####  <a id="decl-oldVal"></a>oldVal  : float

## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.



