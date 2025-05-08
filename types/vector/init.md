---
layout: stdlib-reference
---

# vector\<T, N:int\>\.init

## Description

Initialize a vector where all elements have the same scalar <span class='code'><a href="init.html#decl-value" class="code_param">value</a></span>.




## Signature 

<pre>
<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="init.html">init</a>(<a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-value" class="code_param">value</a>);

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="init.html">init</a>(<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="init.html#decl-value" class="code_param">value</a>);

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(<span class="code_keyword">int</span> <a href="init.html#decl-v" class="code_param">v</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(int64_t <a href="init.html#decl-v" class="code_param">v</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>&gt;(<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="init.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>&gt;(<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="init.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>&gt;(<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="init.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>&gt;(<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="init.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(<span class="code_keyword">int</span> <a href="init.html#decl-v" class="code_param">v</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(<span class="code_keyword">float</span> <a href="init.html#decl-v" class="code_param">v</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>&lt;<a href="init.html#decl-L" class="code_var">L</a>:<span class="code_keyword">int</span>&gt;(<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, 2, 2&gt; <a href="init.html#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 4;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-x" class="code_param">x</a>,
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 2;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-x" class="code_param">x</a>,
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-y" class="code_param">y</a>,
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-z" class="code_param">z</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 3;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(
    <a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, 2&gt; <a href="init.html#decl-xy" class="code_param">xy</a>,
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-z" class="code_param">z</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 3;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-x" class="code_param">x</a>,
    <a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, 2&gt; <a href="init.html#decl-yz" class="code_param">yz</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 3;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-x" class="code_param">x</a>,
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-y" class="code_param">y</a>,
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-z" class="code_param">z</a>,
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-w" class="code_param">w</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 4;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(
    <a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, 2&gt; <a href="init.html#decl-xy" class="code_param">xy</a>,
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-z" class="code_param">z</a>,
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-w" class="code_param">w</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 4;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-x" class="code_param">x</a>,
    <a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, 2&gt; <a href="init.html#decl-yz" class="code_param">yz</a>,
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-w" class="code_param">w</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 4;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-x" class="code_param">x</a>,
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-y" class="code_param">y</a>,
    <a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, 2&gt; <a href="init.html#decl-zw" class="code_param">zw</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 4;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(
    <a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, 2&gt; <a href="init.html#decl-xy" class="code_param">xy</a>,
    <a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, 2&gt; <a href="init.html#decl-zw" class="code_param">zw</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 4;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(
    <a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, 3&gt; <a href="init.html#decl-xyz" class="code_param">xyz</a>,
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-w" class="code_param">w</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 4;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(
    <a href="init.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-x" class="code_param">x</a>,
    <a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, 3&gt; <a href="init.html#decl-yzw" class="code_param">yzw</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 4;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(<span class="code_keyword">half</span> <a href="init.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">half</span>;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(<span class="code_keyword">float</span> <a href="init.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(<span class="code_keyword">int</span> <a href="init.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">int</span>;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(<span class="code_keyword">uint</span> <a href="init.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(int8_t <a href="init.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == int8_t;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(int16_t <a href="init.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == int16_t;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(uint8_t <a href="init.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == uint8_t;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(uint16_t <a href="init.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == uint16_t;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(<span class="code_keyword">double</span> <a href="init.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">double</span>
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 2;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(uint64_t <a href="init.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == uint64_t
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 2;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>(int64_t <a href="init.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == int64_t
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 2;

<a href="index.html" class="code_type">vector</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>&gt;(<a href="../descriptorhandle-0a/index.html" class="code_type">DescriptorHandle</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>&gt; <a href="init.html#decl-bindless" class="code_param">bindless</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/iopaquedescriptor-017/index.html" class="code_type">IOpaqueDescriptor</a>
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">uint</span>
    <span class='code_keyword'>where</span> <a href="index.html#decl-N" class="code_var">N</a> == 2;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="typeparam-U"></a>U: [\_\_BuiltinIntegerType](../../interfaces/0_builtinintegertype-029g/index.html)
####  <a id="decl-L"></a>L  : int
####  <a id="typeparam-T"></a>T: [IOpaqueDescriptor](../../interfaces/iopaquedescriptor-017/index.html)

## Parameters

####  <a id="decl-value"></a>value  : [T](init.html#typeparam-T)
####  <a id="decl-value"></a>value  : [vector](index.html)\<[T](index.html#typeparam-T), [N](index.html#decl-N)\>
####  <a id="decl-v"></a>v  : int
####  <a id="decl-v"></a>v  : int64\_t
####  <a id="decl-other"></a>other  : [vector](index.html)\<U, [N](index.html#decl-N)\>
####  <a id="decl-v"></a>v  : float
####  <a id="decl-value"></a>value  : [matrix](../matrix/index.html)\<[T](../matrix/t-0.html), 2, 2\>
####  <a id="decl-x"></a>x  : [T](init.html#typeparam-T)
####  <a id="decl-y"></a>y  : [T](init.html#typeparam-T)
####  <a id="decl-z"></a>z  : [T](init.html#typeparam-T)
####  <a id="decl-xy"></a>xy  : [vector](index.html)\<[T](index.html#typeparam-T), 2\>
####  <a id="decl-yz"></a>yz  : [vector](index.html)\<[T](index.html#typeparam-T), 2\>
####  <a id="decl-w"></a>w  : [T](init.html#typeparam-T)
####  <a id="decl-zw"></a>zw  : [vector](index.html)\<[T](index.html#typeparam-T), 2\>
####  <a id="decl-xyz"></a>xyz  : [vector](index.html)\<[T](index.html#typeparam-T), 3\>
####  <a id="decl-yzw"></a>yzw  : [vector](index.html)\<[T](index.html#typeparam-T), 3\>
####  <a id="decl-x"></a>x  : half
####  <a id="decl-x"></a>x  : float
####  <a id="decl-x"></a>x  : int
####  <a id="decl-x"></a>x  : uint
####  <a id="decl-x"></a>x  : int8\_t
####  <a id="decl-x"></a>x  : int16\_t
####  <a id="decl-x"></a>x  : uint8\_t
####  <a id="decl-x"></a>x  : uint16\_t
####  <a id="decl-x"></a>x  : double
####  <a id="decl-x"></a>x  : uint64\_t
####  <a id="decl-x"></a>x  : int64\_t
####  <a id="decl-bindless"></a>bindless  : [DescriptorHandle](../descriptorhandle-0a/index.html)\<[T](../descriptorhandle-0a/index.html#typeparam-T)\>

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



