---
layout: stdlib-reference
---

# matrix\<T, R:int, C:int, L:int\>\.init

## Description

Initialize a vector from a value of the same type




## Signature 

<pre>
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>, L:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>val</span>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>, L:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt; <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>v</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<span class="code_keyword">float</span> <span class='code_param'>v</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<span class="code_keyword">int</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 1&gt; <span class='code_param'>row0</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 1, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 1, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 1, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 1&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 1&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 1&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m01</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>row0</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 1, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 1, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m01</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m02</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>row0</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 1, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m01</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m02</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m03</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 4&gt; <span class='code_param'>row0</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 1
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m10</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 1&gt; <span class='code_param'>row0</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 1&gt; <span class='code_param'>row1</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 1&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 1&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m01</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m10</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m11</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>row0</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>row1</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m01</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m02</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m10</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m11</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m12</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>row0</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>row1</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m01</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m02</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m03</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m10</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m11</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m12</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m13</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 4&gt; <span class='code_param'>row0</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 4&gt; <span class='code_param'>row1</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 2
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m10</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m20</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 1&gt; <span class='code_param'>row0</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 1&gt; <span class='code_param'>row1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 1&gt; <span class='code_param'>row2</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 1&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 1&gt; <span class='code_param'>m</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 1&gt; <span class='code_param'>row2</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m01</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m10</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m11</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m20</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m21</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>row0</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>row1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>row2</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 2&gt; <span class='code_param'>m</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>row2</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m01</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m02</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m10</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m11</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m12</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m20</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m21</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m22</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>row0</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>row1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>row2</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 3&gt; <span class='code_param'>m</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>row2</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m01</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m02</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m03</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m10</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m11</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m12</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m13</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m20</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m21</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m22</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m23</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 4&gt; <span class='code_param'>row0</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 4&gt; <span class='code_param'>row1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 4&gt; <span class='code_param'>row2</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 2, 4&gt; <span class='code_param'>m</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 4&gt; <span class='code_param'>row2</span>)
    <span class='code_keyword'>where</span> R == 3
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m10</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m20</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m30</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 1&gt; <span class='code_param'>row0</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 1&gt; <span class='code_param'>row1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 1&gt; <span class='code_param'>row2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 1&gt; <span class='code_param'>row3</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 2&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 1&gt; <span class='code_param'>m</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 1&gt; <span class='code_param'>row3</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 1;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m01</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m10</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m11</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m20</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m21</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m30</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m31</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>row0</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>row1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>row2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>row3</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 3&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 2&gt; <span class='code_param'>m</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 2&gt; <span class='code_param'>row3</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 2;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m01</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m02</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m10</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m11</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m12</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m20</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m21</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m22</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m30</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m31</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m32</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>row0</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>row1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>row2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>row3</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 4, 4&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 3&gt; <span class='code_param'>m</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 3&gt; <span class='code_param'>row3</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 3;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m00</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m01</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m02</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m03</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m10</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m11</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m12</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m13</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m20</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m21</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m22</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m23</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m30</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m31</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m32</span>,
    <a href="/stdlib-reference/types/matrix/T">T</a> <span class='code_param'>m33</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 4&gt; <span class='code_param'>row0</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 4&gt; <span class='code_param'>row1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 4&gt; <span class='code_param'>row2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 4&gt; <span class='code_param'>row3</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, 3, 4&gt; <span class='code_param'>m</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, 4&gt; <span class='code_param'>row3</span>)
    <span class='code_keyword'>where</span> R == 4
    <span class='code_keyword'>where</span> C == 4;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">bool</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == int64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == intptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == intptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == intptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == intptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == intptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == intptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == intptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == intptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == intptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == intptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == intptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == intptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == intptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">double</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint8_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint16_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uint64_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uintptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uintptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uintptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uintptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uintptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uintptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uintptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uintptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uintptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uintptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uintptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uintptr_t;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/init">init</a>(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, R, C&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T">T</a> == uintptr_t;

</pre>

## Parameters

#### val : T
#### value : matrix\<T,R,C\>
#### v : int
#### v : float
#### value : int
#### value : vector\<T,4\>
#### m00 : T
#### row0 : vector\<T,1\>
#### value : matrix\<T,1,2\>
#### value : matrix\<T,1,3\>
#### value : matrix\<T,1,4\>
#### value : matrix\<T,2,1\>
#### value : matrix\<T,2,2\>
#### value : matrix\<T,2,3\>
#### value : matrix\<T,2,4\>
#### value : matrix\<T,3,1\>
#### value : matrix\<T,3,2\>
#### value : matrix\<T,3,3\>
#### value : matrix\<T,3,4\>
#### value : matrix\<T,4,1\>
#### value : matrix\<T,4,2\>
#### value : matrix\<T,4,3\>
#### value : matrix\<T,4,4\>
#### m01 : T
#### row0 : vector\<T,2\>
#### m02 : T
#### row0 : vector\<T,3\>
#### m03 : T
#### row0 : vector\<T,4\>
#### m10 : T
#### row1 : vector\<T,1\>
#### m11 : T
#### row1 : vector\<T,2\>
#### m12 : T
#### row1 : vector\<T,3\>
#### m13 : T
#### row1 : vector\<T,4\>
#### m20 : T
#### row2 : vector\<T,1\>
#### m : matrix\<T,2,1\>
#### m21 : T
#### row2 : vector\<T,2\>
#### m : matrix\<T,2,2\>
#### m22 : T
#### row2 : vector\<T,3\>
#### m : matrix\<T,2,3\>
#### m23 : T
#### row2 : vector\<T,4\>
#### m : matrix\<T,2,4\>
#### m30 : T
#### row3 : vector\<T,1\>
#### m : matrix\<T,3,1\>
#### m31 : T
#### row3 : vector\<T,2\>
#### m : matrix\<T,3,2\>
#### m32 : T
#### row3 : vector\<T,3\>
#### m : matrix\<T,3,3\>
#### m33 : T
#### row3 : vector\<T,4\>
#### m : matrix\<T,3,4\>
#### value : matrix\<int8\_t,R,C\>
#### value : matrix\<int16\_t,R,C\>
#### value : matrix\<int,R,C\>
#### value : matrix\<int64\_t,R,C\>
#### value : matrix\<intptr\_t,R,C\>
#### value : matrix\<half,R,C\>
#### value : matrix\<float,R,C\>
#### value : matrix\<double,R,C\>
#### value : matrix\<uint8\_t,R,C\>
#### value : matrix\<uint16\_t,R,C\>
#### value : matrix\<uint,R,C\>
#### value : matrix\<uint64\_t,R,C\>
#### value : matrix\<uintptr\_t,R,C\>
#### value : matrix\<bool,R,C\>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



