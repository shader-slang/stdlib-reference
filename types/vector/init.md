---
layout: stdlib-reference
---

# vector\<T, N:int\>\.init

## Description

Initialize a vector where all elements have the same scalar <span class='code'>value</span>.




## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_type">T</span> <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>v</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>v</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>&lt;L:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, 2, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    <span class="code_type">T</span> <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> N == 2;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    <span class="code_type">T</span> <span class='code_param'>y</span>,
    <span class="code_type">T</span> <span class='code_param'>z</span>)
    <span class='code_keyword'>where</span> N == 3;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 2&gt; <span class='code_param'>xy</span>,
    <span class="code_type">T</span> <span class='code_param'>z</span>)
    <span class='code_keyword'>where</span> N == 3;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 2&gt; <span class='code_param'>yz</span>)
    <span class='code_keyword'>where</span> N == 3;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    <span class="code_type">T</span> <span class='code_param'>y</span>,
    <span class="code_type">T</span> <span class='code_param'>z</span>,
    <span class="code_type">T</span> <span class='code_param'>w</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 2&gt; <span class='code_param'>xy</span>,
    <span class="code_type">T</span> <span class='code_param'>z</span>,
    <span class="code_type">T</span> <span class='code_param'>w</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 2&gt; <span class='code_param'>yz</span>,
    <span class="code_type">T</span> <span class='code_param'>w</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    <span class="code_type">T</span> <span class='code_param'>y</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 2&gt; <span class='code_param'>zw</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 2&gt; <span class='code_param'>xy</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 2&gt; <span class='code_param'>zw</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 3&gt; <span class='code_param'>xyz</span>,
    <span class="code_type">T</span> <span class='code_param'>w</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 3&gt; <span class='code_param'>yzw</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == uintptr_t;

</pre>

## Parameters

#### L  : int
#### value  : T
#### value  : [vector](/stdlib-reference/types/vector/index)\<T, N\>
#### v  : int
#### v  : float
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), 2, 2\>
#### x  : T
#### y  : T
#### z  : T
#### xy  : [vector](/stdlib-reference/types/vector/index)\<T, 2\>
#### yz  : [vector](/stdlib-reference/types/vector/index)\<T, 2\>
#### w  : T
#### zw  : [vector](/stdlib-reference/types/vector/index)\<T, 2\>
#### xyz  : [vector](/stdlib-reference/types/vector/index)\<T, 3\>
#### yzw  : [vector](/stdlib-reference/types/vector/index)\<T, 3\>
#### value  : [vector](/stdlib-reference/types/vector/index)\<int8\_t, N\>
#### value  : int8\_t
#### value  : [vector](/stdlib-reference/types/vector/index)\<int16\_t, N\>
#### value  : int16\_t
#### value  : [vector](/stdlib-reference/types/vector/index)\<int, N\>
#### value  : int
#### value  : [vector](/stdlib-reference/types/vector/index)\<int64\_t, N\>
#### value  : int64\_t
#### value  : [vector](/stdlib-reference/types/vector/index)\<intptr\_t, N\>
#### value  : intptr\_t
#### value  : [vector](/stdlib-reference/types/vector/index)\<half, N\>
#### value  : half
#### value  : [vector](/stdlib-reference/types/vector/index)\<float, N\>
#### value  : float
#### value  : [vector](/stdlib-reference/types/vector/index)\<double, N\>
#### value  : double
#### value  : [vector](/stdlib-reference/types/vector/index)\<uint8\_t, N\>
#### value  : uint8\_t
#### value  : [vector](/stdlib-reference/types/vector/index)\<uint16\_t, N\>
#### value  : uint16\_t
#### value  : [vector](/stdlib-reference/types/vector/index)\<uint, N\>
#### value  : uint
#### value  : [vector](/stdlib-reference/types/vector/index)\<uint64\_t, N\>
#### value  : uint64\_t
#### value  : [vector](/stdlib-reference/types/vector/index)\<uintptr\_t, N\>
#### value  : uintptr\_t
#### value  : [vector](/stdlib-reference/types/vector/index)\<bool, N\>
#### value  : bool

