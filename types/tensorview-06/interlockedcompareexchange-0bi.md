---
layout: stdlib-reference
---

# TensorView\<T\>\.InterlockedCompareExchange

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-index" class="code_param">index</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-compare" class="code_param">compare</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">int</span>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi">InterlockedCompareExchange</a>&lt;<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-index" class="code_param">index</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-compare" class="code_param">compare</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">int</span>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-index" class="code_param">index</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-compare" class="code_param">compare</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi">InterlockedCompareExchange</a>&lt;<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-index" class="code_param">index</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-compare" class="code_param">compare</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-index" class="code_param">index</a>,
    uint64_t <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-compare" class="code_param">compare</a>,
    uint64_t <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == uint64_t;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi">InterlockedCompareExchange</a>&lt;<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-index" class="code_param">index</a>,
    uint64_t <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-compare" class="code_param">compare</a>,
    uint64_t <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == uint64_t;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-index" class="code_param">index</a>,
    int64_t <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-compare" class="code_param">compare</a>,
    int64_t <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == int64_t;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi">InterlockedCompareExchange</a>&lt;<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-index" class="code_param">index</a>,
    int64_t <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-compare" class="code_param">compare</a>,
    int64_t <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == int64_t;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-index" class="code_param">index</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-compare" class="code_param">compare</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi">InterlockedCompareExchange</a>&lt;<a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-index" class="code_param">index</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-compare" class="code_param">compare</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/tensorview-06/interlockedcompareexchange-0bi#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>;

</pre>

## Generic Parameters

#### N  : int {#decl-N}

## Parameters

#### index  : uint {#decl-index}
#### compare  : int {#decl-compare}
#### val  : int {#decl-val}
#### index  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-index}
#### compare  : uint {#decl-compare}
#### val  : uint {#decl-val}
#### compare  : uint64\_t {#decl-compare}
#### val  : uint64\_t {#decl-val}
#### compare  : int64\_t {#decl-compare}
#### val  : int64\_t {#decl-val}
#### compare  : float {#decl-compare}
#### val  : float {#decl-val}

## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.



