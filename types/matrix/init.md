---
layout: stdlib-reference
---

# matrix\<T, R:int, C:int, L:int\>\.init

## Description

Initialize a vector from a value of the same type




## Signature 

<pre>
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/types/matrix/index#decl-L" class="code_var">L</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-val" class="code_param">val</a>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/types/matrix/index#decl-L" class="code_var">L</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<span class="code_keyword">int</span> <a href="/stdlib-reference/types/matrix/init#decl-v" class="code_param">v</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<span class="code_keyword">float</span> <a href="/stdlib-reference/types/matrix/init#decl-v" class="code_param">v</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<span class="code_keyword">int</span> <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m01" class="code_param">m01</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m01" class="code_param">m01</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m02" class="code_param">m02</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m01" class="code_param">m01</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m02" class="code_param">m02</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m03" class="code_param">m03</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m10" class="code_param">m10</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-row1" class="code_param">row1</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m01" class="code_param">m01</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m10" class="code_param">m10</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m11" class="code_param">m11</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-row1" class="code_param">row1</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m01" class="code_param">m01</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m02" class="code_param">m02</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m10" class="code_param">m10</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m11" class="code_param">m11</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m12" class="code_param">m12</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-row1" class="code_param">row1</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m01" class="code_param">m01</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m02" class="code_param">m02</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m03" class="code_param">m03</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m10" class="code_param">m10</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m11" class="code_param">m11</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m12" class="code_param">m12</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m13" class="code_param">m13</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-row1" class="code_param">row1</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m10" class="code_param">m10</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m20" class="code_param">m20</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-row1" class="code_param">row1</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-row2" class="code_param">row2</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-m" class="code_param">m</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-row2" class="code_param">row2</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m01" class="code_param">m01</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m10" class="code_param">m10</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m11" class="code_param">m11</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m20" class="code_param">m20</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m21" class="code_param">m21</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-row1" class="code_param">row1</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-row2" class="code_param">row2</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-m" class="code_param">m</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-row2" class="code_param">row2</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m01" class="code_param">m01</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m02" class="code_param">m02</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m10" class="code_param">m10</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m11" class="code_param">m11</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m12" class="code_param">m12</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m20" class="code_param">m20</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m21" class="code_param">m21</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m22" class="code_param">m22</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-row1" class="code_param">row1</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-row2" class="code_param">row2</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-m" class="code_param">m</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-row2" class="code_param">row2</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m01" class="code_param">m01</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m02" class="code_param">m02</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m03" class="code_param">m03</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m10" class="code_param">m10</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m11" class="code_param">m11</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m12" class="code_param">m12</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m13" class="code_param">m13</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m20" class="code_param">m20</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m21" class="code_param">m21</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m22" class="code_param">m22</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m23" class="code_param">m23</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-row1" class="code_param">row1</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-row2" class="code_param">row2</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-m" class="code_param">m</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-row2" class="code_param">row2</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m10" class="code_param">m10</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m20" class="code_param">m20</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m30" class="code_param">m30</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-row1" class="code_param">row1</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-row2" class="code_param">row2</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-row3" class="code_param">row3</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-m" class="code_param">m</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 1&gt; <a href="/stdlib-reference/types/matrix/init#decl-row3" class="code_param">row3</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m01" class="code_param">m01</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m10" class="code_param">m10</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m11" class="code_param">m11</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m20" class="code_param">m20</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m21" class="code_param">m21</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m30" class="code_param">m30</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m31" class="code_param">m31</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-row1" class="code_param">row1</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-row2" class="code_param">row2</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-row3" class="code_param">row3</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-m" class="code_param">m</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/matrix/init#decl-row3" class="code_param">row3</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m01" class="code_param">m01</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m02" class="code_param">m02</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m10" class="code_param">m10</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m11" class="code_param">m11</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m12" class="code_param">m12</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m20" class="code_param">m20</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m21" class="code_param">m21</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m22" class="code_param">m22</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m30" class="code_param">m30</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m31" class="code_param">m31</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m32" class="code_param">m32</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-row1" class="code_param">row1</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-row2" class="code_param">row2</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-row3" class="code_param">row3</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-m" class="code_param">m</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/matrix/init#decl-row3" class="code_param">row3</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m00" class="code_param">m00</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m01" class="code_param">m01</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m02" class="code_param">m02</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m03" class="code_param">m03</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m10" class="code_param">m10</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m11" class="code_param">m11</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m12" class="code_param">m12</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m13" class="code_param">m13</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m20" class="code_param">m20</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m21" class="code_param">m21</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m22" class="code_param">m22</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m23" class="code_param">m23</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m30" class="code_param">m30</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m31" class="code_param">m31</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m32" class="code_param">m32</a>,
    <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> <a href="/stdlib-reference/types/matrix/init#decl-m33" class="code_param">m33</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-row0" class="code_param">row0</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-row1" class="code_param">row1</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-row2" class="code_param">row2</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-row3" class="code_param">row3</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 3, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-m" class="code_param">m</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/matrix/init#decl-row3" class="code_param">row3</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a> == 4
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a> == 4;

</pre>

## Parameters

#### val  : [T](/stdlib-reference/types/matrix/t-0) {#decl-val}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [R](/stdlib-reference/types/matrix/index#decl-R), [C](/stdlib-reference/types/matrix/index#decl-C)\> {#decl-value}
#### v  : int {#decl-v}
#### v  : float {#decl-v}
#### value  : int {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 4\> {#decl-value}
#### m00  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m00}
#### row0  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 1\> {#decl-row0}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 1, 2\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 1, 3\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 1, 4\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 2, 1\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 2, 2\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 2, 3\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 2, 4\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 3, 1\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 3, 2\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 3, 3\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 3, 4\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 4, 1\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 4, 2\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 4, 3\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 4, 4\> {#decl-value}
#### m01  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m01}
#### row0  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 2\> {#decl-row0}
#### m02  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m02}
#### row0  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 3\> {#decl-row0}
#### m03  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m03}
#### row0  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 4\> {#decl-row0}
#### m10  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m10}
#### row1  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 1\> {#decl-row1}
#### m11  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m11}
#### row1  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 2\> {#decl-row1}
#### m12  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m12}
#### row1  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 3\> {#decl-row1}
#### m13  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m13}
#### row1  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 4\> {#decl-row1}
#### m20  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m20}
#### row2  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 1\> {#decl-row2}
#### m  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 2, 1\> {#decl-m}
#### m21  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m21}
#### row2  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 2\> {#decl-row2}
#### m  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 2, 2\> {#decl-m}
#### m22  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m22}
#### row2  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 3\> {#decl-row2}
#### m  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 2, 3\> {#decl-m}
#### m23  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m23}
#### row2  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 4\> {#decl-row2}
#### m  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 2, 4\> {#decl-m}
#### m30  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m30}
#### row3  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 1\> {#decl-row3}
#### m  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 3, 1\> {#decl-m}
#### m31  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m31}
#### row3  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 2\> {#decl-row3}
#### m  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 3, 2\> {#decl-m}
#### m32  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m32}
#### row3  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 3\> {#decl-row3}
#### m  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 3, 3\> {#decl-m}
#### m33  : [T](/stdlib-reference/types/matrix/t-0) {#decl-m33}
#### row3  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 4\> {#decl-row3}
#### m  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 3, 4\> {#decl-m}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



