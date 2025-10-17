---
layout: stdlib-reference
---

# Ptr\<T, Access access, AddressSpace addrSpace\>\.init

## Description





## Signature 

<pre>
<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, Access <a href="init.html#decl-access" class="code_var">access</a>, AddressSpace <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a>&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>, Access <a href="init.html#decl-accessOther" class="code_var">accessOther</a>&gt;(
    <a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>, AddressSpace.Generic&gt; <a href="init.html#decl-ptr" class="code_param">ptr</a>);

<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, Access <a href="init.html#decl-access" class="code_var">access</a>, AddressSpace <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a>&gt;.<a href="init.html">init</a>(
    uint64_t <a href="init.html#decl-val" class="code_param">val</a>);

<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, Access <a href="init.html#decl-access" class="code_var">access</a>, AddressSpace <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a>&gt;.<a href="init.html">init</a>(
    int64_t <a href="init.html#decl-val" class="code_param">val</a>);

<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, AddressSpace.Generic&gt;.<a href="init.html">init</a>(<a href="../nativestring-06/index.html" class="code_type">NativeString</a> <a href="init.html#decl-nativeStr" class="code_param">nativeStr</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">void</span>
    <span class='code_keyword'>where</span> <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a> == AddressSpace.Device;

<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, AddressSpace.Generic&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, Access <a href="init.html#decl-access" class="code_var">access</a>, AddressSpace <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a>&gt;(
    <a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, AddressSpace.Generic&gt; <a href="init.html#decl-ptr" class="code_param">ptr</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">void</span>
    <span class='code_keyword'>where</span> <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a> == AddressSpace.Device;

<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, AddressSpace.Generic&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>&gt;(NativeRef&lt;<a href="init.html#typeparam-T" class="code_type">T</a>&gt; <a href="init.html#decl-ptr" class="code_param">ptr</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">void</span>
    <span class='code_keyword'>where</span> <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a> == AddressSpace.Device;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U
####  <a id="decl-accessOther"></a>accessOther  : Access
####  <a id="typeparam-T"></a>T
####  <a id="decl-access"></a>access  : Access
####  <a id="decl-addrSpace"></a>addrSpace  : AddressSpace

## Parameters

####  <a id="decl-ptr"></a>ptr  : [Ptr](index.html)\<U, AddressSpace\.Generic\>
####  <a id="decl-val"></a>val  : uint64\_t
####  <a id="decl-val"></a>val  : int64\_t
####  <a id="decl-nativeStr"></a>nativeStr  : [NativeString](../nativestring-06/index.html)
####  <a id="decl-ptr"></a>ptr  : [Ptr](index.html)\<[T](index.html#typeparam-T), AddressSpace\.Generic\>
####  <a id="decl-ptr"></a>ptr  : NativeRef\<[T](init.html#typeparam-T)\>

