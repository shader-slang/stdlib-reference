---
layout: stdlib-reference
---

# TensorView\<T\>\.InterlockedCompareExchange

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedcompareexchange-0bi.html">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <a href="interlockedcompareexchange-0bi.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">int</span> <a href="interlockedcompareexchange-0bi.html#decl-compare" class="code_param">compare</a>,
    <span class="code_keyword">int</span> <a href="interlockedcompareexchange-0bi.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">int</span>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedcompareexchange-0bi.html">InterlockedCompareExchange</a>&lt;<a href="interlockedcompareexchange-0bi.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedcompareexchange-0bi.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedcompareexchange-0bi.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">int</span> <a href="interlockedcompareexchange-0bi.html#decl-compare" class="code_param">compare</a>,
    <span class="code_keyword">int</span> <a href="interlockedcompareexchange-0bi.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">int</span>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedcompareexchange-0bi.html">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <a href="interlockedcompareexchange-0bi.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">uint</span> <a href="interlockedcompareexchange-0bi.html#decl-compare" class="code_param">compare</a>,
    <span class="code_keyword">uint</span> <a href="interlockedcompareexchange-0bi.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedcompareexchange-0bi.html">InterlockedCompareExchange</a>&lt;<a href="interlockedcompareexchange-0bi.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedcompareexchange-0bi.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedcompareexchange-0bi.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">uint</span> <a href="interlockedcompareexchange-0bi.html#decl-compare" class="code_param">compare</a>,
    <span class="code_keyword">uint</span> <a href="interlockedcompareexchange-0bi.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedcompareexchange-0bi.html">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <a href="interlockedcompareexchange-0bi.html#decl-index" class="code_param">index</a>,
    uint64_t <a href="interlockedcompareexchange-0bi.html#decl-compare" class="code_param">compare</a>,
    uint64_t <a href="interlockedcompareexchange-0bi.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == uint64_t;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedcompareexchange-0bi.html">InterlockedCompareExchange</a>&lt;<a href="interlockedcompareexchange-0bi.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedcompareexchange-0bi.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedcompareexchange-0bi.html#decl-index" class="code_param">index</a>,
    uint64_t <a href="interlockedcompareexchange-0bi.html#decl-compare" class="code_param">compare</a>,
    uint64_t <a href="interlockedcompareexchange-0bi.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == uint64_t;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedcompareexchange-0bi.html">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <a href="interlockedcompareexchange-0bi.html#decl-index" class="code_param">index</a>,
    int64_t <a href="interlockedcompareexchange-0bi.html#decl-compare" class="code_param">compare</a>,
    int64_t <a href="interlockedcompareexchange-0bi.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == int64_t;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedcompareexchange-0bi.html">InterlockedCompareExchange</a>&lt;<a href="interlockedcompareexchange-0bi.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedcompareexchange-0bi.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedcompareexchange-0bi.html#decl-index" class="code_param">index</a>,
    int64_t <a href="interlockedcompareexchange-0bi.html#decl-compare" class="code_param">compare</a>,
    int64_t <a href="interlockedcompareexchange-0bi.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == int64_t;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedcompareexchange-0bi.html">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <a href="interlockedcompareexchange-0bi.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">float</span> <a href="interlockedcompareexchange-0bi.html#decl-compare" class="code_param">compare</a>,
    <span class="code_keyword">float</span> <a href="interlockedcompareexchange-0bi.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="interlockedcompareexchange-0bi.html">InterlockedCompareExchange</a>&lt;<a href="interlockedcompareexchange-0bi.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="interlockedcompareexchange-0bi.html#decl-N" class="code_var">N</a>&gt; <a href="interlockedcompareexchange-0bi.html#decl-index" class="code_param">index</a>,
    <span class="code_keyword">float</span> <a href="interlockedcompareexchange-0bi.html#decl-compare" class="code_param">compare</a>,
    <span class="code_keyword">float</span> <a href="interlockedcompareexchange-0bi.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>;

</pre>

## Generic Parameters

####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-index"></a>index  : uint
####  <a id="decl-compare"></a>compare  : int
####  <a id="decl-val"></a>val  : int
####  <a id="decl-index"></a>index  : [vector](../vector/index)\<uint, [N](../vector/index#decl-N)\>
####  <a id="decl-compare"></a>compare  : uint
####  <a id="decl-val"></a>val  : uint
####  <a id="decl-compare"></a>compare  : uint64\_t
####  <a id="decl-val"></a>val  : uint64\_t
####  <a id="decl-compare"></a>compare  : int64\_t
####  <a id="decl-val"></a>val  : int64\_t
####  <a id="decl-compare"></a>compare  : float
####  <a id="decl-val"></a>val  : float

## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.



