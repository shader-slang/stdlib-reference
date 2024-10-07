---
layout: stdlib-reference
---

# vector\<T, N:int\>\.init

## Description

Initialize a vector where all elements have the same scalar <span class='code'><a href="/stdlib-reference/types/vector/init#decl-value" class="code_param">value</a></span>.




## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>:int&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>:int&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>v</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>v</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>&lt;L:int&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, 2, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>y</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a> == 2;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>y</span>,
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>z</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a> == 3;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 2&gt; <span class='code_param'>xy</span>,
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>z</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a> == 3;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 2&gt; <span class='code_param'>yz</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a> == 3;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>y</span>,
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>z</span>,
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>w</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 2&gt; <span class='code_param'>xy</span>,
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>z</span>,
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>w</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 2&gt; <span class='code_param'>yz</span>,
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>w</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>y</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 2&gt; <span class='code_param'>zw</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 2&gt; <span class='code_param'>xy</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 2&gt; <span class='code_param'>zw</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 3&gt; <span class='code_param'>xyz</span>,
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>w</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 3&gt; <span class='code_param'>yzw</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(half <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;double, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(double <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == bool;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(bool <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(half <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;double, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(double <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(bool <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(half <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;double, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(double <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(bool <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(half <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;double, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(double <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(bool <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(half <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;double, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(double <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == int64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(bool <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(half <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;double, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(double <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == intptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(bool <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;double, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(double <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == half;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(bool <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(half <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;double, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(double <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == float;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(bool <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(half <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == double;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(bool <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(half <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;double, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(double <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(bool <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(half <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;double, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(double <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(bool <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(half <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;double, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(double <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(bool <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(half <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;double, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(double <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uintptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uint64_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(bool <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(intptr_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(half <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(float <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;double, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(double <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a> == uintptr_t;

</pre>

## Generic Parameters

#### L  : int {#decl-L}

## Parameters

#### value  : [T](/stdlib-reference/types/vector/index#typeparam-T) {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### v  : int {#decl-v}
#### v  : float {#decl-v}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), 2, 2\> {#decl-value}
#### x  : [T](/stdlib-reference/types/vector/index#typeparam-T) {#decl-x}
#### y  : [T](/stdlib-reference/types/vector/index#typeparam-T) {#decl-y}
#### z  : [T](/stdlib-reference/types/vector/index#typeparam-T) {#decl-z}
#### xy  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 2\> {#decl-xy}
#### yz  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 2\> {#decl-yz}
#### w  : [T](/stdlib-reference/types/vector/index#typeparam-T) {#decl-w}
#### zw  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 2\> {#decl-zw}
#### xyz  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 3\> {#decl-xyz}
#### yzw  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 3\> {#decl-yzw}
#### value  : [vector](/stdlib-reference/types/vector/index)\<int8\_t, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : int8\_t {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<int16\_t, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : int16\_t {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<int, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : int {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<int64\_t, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : int64\_t {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<intptr\_t, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : intptr\_t {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<half, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : half {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<float, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : float {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<double, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : double {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<uint8\_t, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : uint8\_t {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<uint16\_t, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : uint16\_t {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : uint {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<uint64\_t, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : uint64\_t {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<uintptr\_t, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : uintptr\_t {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<bool, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-value}
#### value  : bool {#decl-value}

