---
layout: stdlib-reference
---

# Ptr\<T, Access access, AddressSpace addrSpace, L\>\.init

## Description





## Signature 

<pre>
<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, Access <a href="init.html#decl-access" class="code_var">access</a>, AddressSpace <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a>, <a href="init.html#typeparam-L" class="code_type">L</a>&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>, Access <a href="init.html#decl-accessOther" class="code_var">accessOther</a>&gt;(
    <a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>, AddressSpace.Generic, <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="init.html#decl-ptr" class="code_param">ptr</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-L" class="code_type">L</a> : <a href="../../interfaces/ibufferdatalayout-017b/index.html" class="code_type">IBufferDataLayout</a>;

<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, Access <a href="init.html#decl-access" class="code_var">access</a>, AddressSpace <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a>, <a href="init.html#typeparam-L" class="code_type">L</a>&gt;.<a href="init.html">init</a>(
    uint64_t <a href="init.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-L" class="code_type">L</a> : <a href="../../interfaces/ibufferdatalayout-017b/index.html" class="code_type">IBufferDataLayout</a>;

<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, Access <a href="init.html#decl-access" class="code_var">access</a>, AddressSpace <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a>, <a href="init.html#typeparam-L" class="code_type">L</a>&gt;.<a href="init.html">init</a>(
    int64_t <a href="init.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-L" class="code_type">L</a> : <a href="../../interfaces/ibufferdatalayout-017b/index.html" class="code_type">IBufferDataLayout</a>;

<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, AddressSpace.Generic, <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt;.<a href="init.html">init</a>(
    <a href="../nativestring-06/index.html" class="code_type">NativeString</a> <a href="init.html#decl-nativeStr" class="code_param">nativeStr</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">void</span>
    <span class='code_keyword'>where</span> <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a> == AddressSpace.Device
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-L" class="code_type">L</a> == <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>;

<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, AddressSpace.Generic, <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, Access <a href="init.html#decl-access" class="code_var">access</a>, AddressSpace <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a>, <a href="init.html#typeparam-L" class="code_type">L</a>&gt;(
    <a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, AddressSpace.Generic, <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="init.html#decl-ptr" class="code_param">ptr</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-L" class="code_type">L</a> : <a href="../../interfaces/ibufferdatalayout-017b/index.html" class="code_type">IBufferDataLayout</a>
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">void</span>
    <span class='code_keyword'>where</span> <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a> == AddressSpace.Device
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-L" class="code_type">L</a> == <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>;

<a href="index.html" class="code_type">Ptr</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>, AddressSpace.Generic, <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt;.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-T" class="code_type">T</a>&gt;(
    NativeRef&lt;<a href="init.html#typeparam-T" class="code_type">T</a>&gt; <a href="init.html#decl-ptr" class="code_param">ptr</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">void</span>
    <span class='code_keyword'>where</span> <a href="init.html#decl-addrSpace" class="code_var">addrSpace</a> == AddressSpace.Device
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-L" class="code_type">L</a> == <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U
####  <a id="decl-accessOther"></a>accessOther  : Access
####  <a id="typeparam-T"></a>T
####  <a id="decl-access"></a>access  : Access
####  <a id="decl-addrSpace"></a>addrSpace  : AddressSpace
####  <a id="typeparam-L"></a>L: [IBufferDataLayout](../../interfaces/ibufferdatalayout-017b/index.html)

## Parameters

####  <a id="decl-ptr"></a>ptr  : [Ptr](index.html)\<U, AddressSpace\.Generic, [DefaultDataLayout](../defaultdatalayout-07b/index.html)\>
####  <a id="decl-val"></a>val  : uint64\_t
####  <a id="decl-val"></a>val  : int64\_t
####  <a id="decl-nativeStr"></a>nativeStr  : [NativeString](../nativestring-06/index.html)
####  <a id="decl-ptr"></a>ptr  : [Ptr](index.html)\<[T](index.html#typeparam-T), AddressSpace\.Generic, [DefaultDataLayout](../defaultdatalayout-07b/index.html)\>
####  <a id="decl-ptr"></a>ptr  : NativeRef\<[T](init.html#typeparam-T)\>

