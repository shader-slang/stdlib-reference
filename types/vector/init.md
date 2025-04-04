---
layout: stdlib-reference
---

# vector\<T, N:int\>\.init

## Description

Initialize a vector where all elements have the same scalar <span class='code'><a href="/stdlib-reference/types/vector/init#decl-value" class="code_param">value</a></span>.




## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-value" class="code_param">value</a>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/vector/init#decl-value" class="code_param">value</a>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <a href="/stdlib-reference/types/vector/init#decl-v" class="code_param">v</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <a href="/stdlib-reference/types/vector/init#decl-v" class="code_param">v</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-U" class="code_type">U</a>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/vector/init#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-U" class="code_type">U</a>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/vector/init#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-U" class="code_type">U</a>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/vector/init#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-U" class="code_type">U</a>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/vector/init#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <a href="/stdlib-reference/types/vector/init#decl-v" class="code_param">v</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <a href="/stdlib-reference/types/vector/init#decl-v" class="code_param">v</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>&lt;<a href="/stdlib-reference/types/vector/init#decl-L" class="code_var">L</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, 2, 2&gt; <a href="/stdlib-reference/types/vector/init#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 2;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-y" class="code_param">y</a>,
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-z" class="code_param">z</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 3;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/vector/init#decl-xy" class="code_param">xy</a>,
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-z" class="code_param">z</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 3;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/vector/init#decl-yz" class="code_param">yz</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 3;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-y" class="code_param">y</a>,
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-z" class="code_param">z</a>,
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-w" class="code_param">w</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/vector/init#decl-xy" class="code_param">xy</a>,
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-z" class="code_param">z</a>,
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-w" class="code_param">w</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/vector/init#decl-yz" class="code_param">yz</a>,
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-w" class="code_param">w</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-y" class="code_param">y</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/vector/init#decl-zw" class="code_param">zw</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/vector/init#decl-xy" class="code_param">xy</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, 2&gt; <a href="/stdlib-reference/types/vector/init#decl-zw" class="code_param">zw</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/vector/init#decl-xyz" class="code_param">xyz</a>,
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-w" class="code_param">w</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(
    <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/types/vector/init#decl-yzw" class="code_param">yzw</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 4;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">half</span> <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> == <span class="code_keyword">half</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">float</span> <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">int</span> <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> == <span class="code_keyword">int</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int8_t <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> == int8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int16_t <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> == int16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint8_t <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint16_t <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(<span class="code_keyword">double</span> <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> == <span class="code_keyword">double</span>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 2;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(uint64_t <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> == uint64_t
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 2;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>(int64_t <a href="/stdlib-reference/types/vector/init#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> == int64_t
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 2;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;.<a href="/stdlib-reference/types/vector/init">init</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/types/descriptorhandle-0a/index" class="code_type">DescriptorHandle</a>&lt;<a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/types/vector/init#decl-bindless" class="code_param">bindless</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/iopaquedescriptor-017/index" class="code_type">IOpaqueDescriptor</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/init#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a> == 2;

</pre>

## Generic Parameters

#### U: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-U}
#### U: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/0_builtinintegertype-029g/index) {#typeparam-U}
#### L  : int {#decl-L}
#### T: [IOpaqueDescriptor](/stdlib-reference/interfaces/iopaquedescriptor-017/index) {#typeparam-T}

## Parameters

#### value  : [T](/stdlib-reference/types/vector/init#typeparam-T) {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-value}
#### v  : int {#decl-v}
#### v  : int64\_t {#decl-v}
#### other  : [vector](/stdlib-reference/types/vector/index)\<U, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-other}
#### v  : float {#decl-v}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), 2, 2\> {#decl-value}
#### x  : [T](/stdlib-reference/types/vector/init#typeparam-T) {#decl-x}
#### y  : [T](/stdlib-reference/types/vector/init#typeparam-T) {#decl-y}
#### z  : [T](/stdlib-reference/types/vector/init#typeparam-T) {#decl-z}
#### xy  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 2\> {#decl-xy}
#### yz  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 2\> {#decl-yz}
#### w  : [T](/stdlib-reference/types/vector/init#typeparam-T) {#decl-w}
#### zw  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 2\> {#decl-zw}
#### xyz  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 3\> {#decl-xyz}
#### yzw  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 3\> {#decl-yzw}
#### x  : half {#decl-x}
#### x  : float {#decl-x}
#### x  : int {#decl-x}
#### x  : uint {#decl-x}
#### x  : int8\_t {#decl-x}
#### x  : int16\_t {#decl-x}
#### x  : uint8\_t {#decl-x}
#### x  : uint16\_t {#decl-x}
#### x  : double {#decl-x}
#### x  : uint64\_t {#decl-x}
#### x  : int64\_t {#decl-x}
#### bindless  : [DescriptorHandle](/stdlib-reference/types/descriptorhandle-0a/index)\<[T](/stdlib-reference/types/descriptorhandle-0a/index#typeparam-T)\> {#decl-bindless}

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

#### hlsl
Available in all stages.

#### wgsl
Available in all stages.



