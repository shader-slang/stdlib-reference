---
layout: stdlib-reference
---

# vector\<T, N:int\>\.init

## Description

Initialize a vector where all elements have the same scalar <span class='code'>value</span>.




## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(T <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>v</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>v</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>&lt;L:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, 2, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    T <span class='code_param'>x</span>,
    T <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> N == 2;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    T <span class='code_param'>x</span>,
    T <span class='code_param'>y</span>,
    T <span class='code_param'>z</span>)
    <span class='code_keyword'>where</span> N == 3;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>xy</span>,
    T <span class='code_param'>z</span>)
    <span class='code_keyword'>where</span> N == 3;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    T <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>yz</span>)
    <span class='code_keyword'>where</span> N == 3;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    T <span class='code_param'>x</span>,
    T <span class='code_param'>y</span>,
    T <span class='code_param'>z</span>,
    T <span class='code_param'>w</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>xy</span>,
    T <span class='code_param'>z</span>,
    T <span class='code_param'>w</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    T <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>yz</span>,
    T <span class='code_param'>w</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    T <span class='code_param'>x</span>,
    T <span class='code_param'>y</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>zw</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>xy</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>zw</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>xyz</span>,
    T <span class='code_param'>w</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    T <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>yzw</span>)
    <span class='code_keyword'>where</span> N == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">bool</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == uintptr_t;

</pre>

## Parameters

#### L : int
#### value : T
#### value : vector\<T,N\>
#### v : int
#### v : float
#### value : matrix\<T,2,2\>
#### x : T
#### y : T
#### z : T
#### xy : vector\<T,2\>
#### yz : vector\<T,2\>
#### w : T
#### zw : vector\<T,2\>
#### xyz : vector\<T,3\>
#### yzw : vector\<T,3\>
#### value : vector\<int8\_t,N\>
#### value : int8\_t
#### value : vector\<int16\_t,N\>
#### value : int16\_t
#### value : vector\<int,N\>
#### value : int
#### value : vector\<int64\_t,N\>
#### value : int64\_t
#### value : vector\<intptr\_t,N\>
#### value : intptr\_t
#### value : vector\<half,N\>
#### value : half
#### value : vector\<float,N\>
#### value : float
#### value : vector\<double,N\>
#### value : double
#### value : vector\<uint8\_t,N\>
#### value : uint8\_t
#### value : vector\<uint16\_t,N\>
#### value : uint16\_t
#### value : vector\<uint,N\>
#### value : uint
#### value : vector\<uint64\_t,N\>
#### value : uint64\_t
#### value : vector\<uintptr\_t,N\>
#### value : uintptr\_t
#### value : vector\<bool,N\>
#### value : bool

