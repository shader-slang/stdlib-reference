---
layout: stdlib-reference
---

# TensorView\<T\>\.InterlockedExchange

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-index" class="code_param">index</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-va" class="code_param">va</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-oldVall" class="code_param">oldVall</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">int</span>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b">InterlockedExchange</a>&lt;<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-index" class="code_param">index</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">int</span>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-index" class="code_param">index</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-va" class="code_param">va</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-oldVall" class="code_param">oldVall</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b">InterlockedExchange</a>&lt;<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-index" class="code_param">index</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-index" class="code_param">index</a>,
    uint64_t <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-va" class="code_param">va</a>,
    <span class="code_keyword">out</span> uint64_t <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-oldVall" class="code_param">oldVall</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == uint64_t;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b">InterlockedExchange</a>&lt;<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-index" class="code_param">index</a>,
    uint64_t <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> uint64_t <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == uint64_t;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-index" class="code_param">index</a>,
    int64_t <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-va" class="code_param">va</a>,
    <span class="code_keyword">out</span> int64_t <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-oldVall" class="code_param">oldVall</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == int64_t;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b">InterlockedExchange</a>&lt;<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-index" class="code_param">index</a>,
    int64_t <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> int64_t <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == int64_t;

<span class="code_keyword">float</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-index" class="code_param">index</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>;

<span class="code_keyword">float</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b">InterlockedExchange</a>&lt;<a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-index" class="code_param">index</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/types/tensorview-06/interlockedexchange-0b#decl-oldVal" class="code_param">oldVal</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>;

</pre>

## Generic Parameters

#### N  : int {#decl-N}

## Parameters

#### index  : uint {#decl-index}
#### va  : int {#decl-va}
#### oldVall  : int {#decl-oldVall}
#### index  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-index}
#### val  : int {#decl-val}
#### oldVal  : int {#decl-oldVal}
#### va  : uint {#decl-va}
#### oldVall  : uint {#decl-oldVall}
#### val  : uint {#decl-val}
#### oldVal  : uint {#decl-oldVal}
#### va  : uint64\_t {#decl-va}
#### oldVall  : uint64\_t {#decl-oldVall}
#### val  : uint64\_t {#decl-val}
#### oldVal  : uint64\_t {#decl-oldVal}
#### va  : int64\_t {#decl-va}
#### oldVall  : int64\_t {#decl-oldVall}
#### val  : int64\_t {#decl-val}
#### oldVal  : int64\_t {#decl-oldVal}
#### val  : float {#decl-val}
#### oldVal  : float {#decl-oldVal}

## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.



