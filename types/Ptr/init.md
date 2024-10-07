---
layout: stdlib-reference
---

# Ptr\<T, addrSpace:uint64\_t\>\.init

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/Ptr/index" class="code_type">Ptr</a>&lt;<a href="/stdlib-reference/types/Ptr/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Ptr/index#decl-addrSpace" class="code_var">addrSpace</a>:uint64_t&gt;.<a href="/stdlib-reference/types/Ptr/init">init</a>&lt;<a href="/stdlib-reference/types/Ptr/init#typeparam-U" class="code_type">U</a>&gt;(Addr&lt;<a href="/stdlib-reference/types/Ptr/init#typeparam-U" class="code_type">U</a>&gt; <a href="/stdlib-reference/types/Ptr/init#decl-ptr" class="code_param">ptr</a>);

<a href="/stdlib-reference/types/Ptr/index" class="code_type">Ptr</a>&lt;<a href="/stdlib-reference/types/Ptr/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Ptr/index#decl-addrSpace" class="code_var">addrSpace</a>:uint64_t&gt;.<a href="/stdlib-reference/types/Ptr/init">init</a>(uint64_t <a href="/stdlib-reference/types/Ptr/init#decl-val" class="code_param">val</a>);

<a href="/stdlib-reference/types/Ptr/index" class="code_type">Ptr</a>&lt;<a href="/stdlib-reference/types/Ptr/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Ptr/index#decl-addrSpace" class="code_var">addrSpace</a>:uint64_t&gt;.<a href="/stdlib-reference/types/Ptr/init">init</a>(int64_t <a href="/stdlib-reference/types/Ptr/init#decl-val" class="code_param">val</a>);

Addr&lt;<a href="/stdlib-reference/types/Ptr/init#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/Ptr/init">init</a>(<a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <a href="/stdlib-reference/types/Ptr/init#decl-nativeStr" class="code_param">nativeStr</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Ptr/init#typeparam-T" class="code_type">T</a> == void
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Ptr/init#decl-addrSpace" class="code_var">addrSpace</a> == 4294967297;

Addr&lt;<a href="/stdlib-reference/types/Ptr/init#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/Ptr/init">init</a>&lt;<a href="/stdlib-reference/types/Ptr/init#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Ptr/init#decl-addrSpace" class="code_var">addrSpace</a>:uint64_t&gt;(Addr&lt;<a href="/stdlib-reference/types/Ptr/init#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/types/Ptr/init#decl-ptr" class="code_param">ptr</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Ptr/init#typeparam-T" class="code_type">T</a> == void
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Ptr/init#decl-addrSpace" class="code_var">addrSpace</a> == 4294967297;

Addr&lt;<a href="/stdlib-reference/types/Ptr/init#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/Ptr/init">init</a>&lt;<a href="/stdlib-reference/types/Ptr/init#typeparam-T" class="code_type">T</a>&gt;(NativeRef&lt;<a href="/stdlib-reference/types/Ptr/init#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/types/Ptr/init#decl-ptr" class="code_param">ptr</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Ptr/init#typeparam-T" class="code_type">T</a> == void
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Ptr/init#decl-addrSpace" class="code_var">addrSpace</a> == 4294967297;

</pre>

## Generic Parameters

#### U {#typeparam-U}

## Generic Parameters

#### U {#typeparam-U}
#### T {#typeparam-T}
#### addrSpace  : uint64\_t {#decl-addrSpace}

## Parameters

#### ptr  : Addr\<[U](/stdlib-reference/types/Ptr/init#typeparam-U)\> {#decl-ptr}
#### val  : uint64\_t {#decl-val}
#### val  : int64\_t {#decl-val}
#### nativeStr  : [NativeString](/stdlib-reference/types/NativeString/index) {#decl-nativeStr}
#### ptr  : Addr\<[T](/stdlib-reference/types/Ptr/init#typeparam-T)\> {#decl-ptr}
#### ptr  : NativeRef\<[T](/stdlib-reference/types/Ptr/init#typeparam-T)\> {#decl-ptr}

