---
layout: stdlib-reference
---

# Ptr\<T, addrSpace:uint64\_t\>\.init

## Description





## Signature 

<pre>
<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a>:uint64_t&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>&gt;(Addr&lt;<a href="init.html#typeparam-U" class="code_type">U</a>&gt; <a href="init.html#decl-ptr" class="code_param">ptr</a>);

<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a>:uint64_t&gt;.<a href="init.html">init</a>(uint64_t <a href="init.html#decl-val" class="code_param">val</a>);

<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a>:uint64_t&gt;.<a href="init.html">init</a>(int64_t <a href="init.html#decl-val" class="code_param">val</a>);

Addr&lt;<a href="init.html#typeparam-T" class="code_type">T</a>&gt;.<a href="init.html">init</a>(<a href="../nativestring-06/index.html" class="code_type">NativeString</a> <a href="init.html#decl-nativeStr" class="code_param">nativeStr</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">void</span>
    <span class='code_keyword'>where</span> <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a> == 4294967297;

Addr&lt;<a href="init.html#typeparam-T" class="code_type">T</a>&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a>:uint64_t&gt;(Addr&lt;<a href="init.html#typeparam-T" class="code_type">T</a>&gt; <a href="init.html#decl-ptr" class="code_param">ptr</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">void</span>
    <span class='code_keyword'>where</span> <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a> == 4294967297;

Addr&lt;<a href="init.html#typeparam-T" class="code_type">T</a>&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>&gt;(NativeRef&lt;<a href="init.html#typeparam-T" class="code_type">T</a>&gt; <a href="init.html#decl-ptr" class="code_param">ptr</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">void</span>
    <span class='code_keyword'>where</span> <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a> == 4294967297;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U
####  <a id="typeparam-T"></a>T
####  <a id="decl-addrSpace"></a>addrSpace  : uint64\_t

## Parameters

####  <a id="decl-ptr"></a>ptr  : Addr\<[U](init.html#typeparam-U)\>
####  <a id="decl-val"></a>val  : uint64\_t
####  <a id="decl-val"></a>val  : int64\_t
####  <a id="decl-nativeStr"></a>nativeStr  : [NativeString](../nativestring-06/index.html)
####  <a id="decl-ptr"></a>ptr  : Addr\<[T](init.html#typeparam-T)\>
####  <a id="decl-ptr"></a>ptr  : NativeRef\<[T](init.html#typeparam-T)\>

