---
layout: stdlib-reference
---

# Ptr\<T, addrSpace:uint64\_t\>\.init

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/Ptr/index" class="code_type">Ptr</a>&lt;<span class="code_type">T</span>, addrSpace:uint64_t&gt;.<a href="/stdlib-reference/types/Ptr/init">init</a>&lt;U&gt;(Addr&lt;U&gt; <span class='code_param'>ptr</span>);

<a href="/stdlib-reference/types/Ptr/index" class="code_type">Ptr</a>&lt;<span class="code_type">T</span>, addrSpace:uint64_t&gt;.<a href="/stdlib-reference/types/Ptr/init">init</a>(uint64_t <span class='code_param'>val</span>);

<a href="/stdlib-reference/types/Ptr/index" class="code_type">Ptr</a>&lt;<span class="code_type">T</span>, addrSpace:uint64_t&gt;.<a href="/stdlib-reference/types/Ptr/init">init</a>(int64_t <span class='code_param'>val</span>);

Addr&lt;<span class="code_type">T</span>&gt;.<a href="/stdlib-reference/types/Ptr/init">init</a>(<a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <span class='code_param'>nativeStr</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">void</span>
    <span class='code_keyword'>where</span> addrSpace == 4294967297;

Addr&lt;<span class="code_type">T</span>&gt;.<a href="/stdlib-reference/types/Ptr/init">init</a>&lt;<span class="code_type">T</span>, addrSpace:uint64_t&gt;(Addr&lt;<span class="code_type">T</span>&gt; <span class='code_param'>ptr</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">void</span>
    <span class='code_keyword'>where</span> addrSpace == 4294967297;

Addr&lt;<span class="code_type">T</span>&gt;.<a href="/stdlib-reference/types/Ptr/init">init</a>&lt;<span class="code_type">T</span>&gt;(NativeRef&lt;<span class="code_type">T</span>&gt; <span class='code_param'>ptr</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <span class="code_keyword">void</span>
    <span class='code_keyword'>where</span> addrSpace == 4294967297;

</pre>

## Generic Parameters

#### U {#typeparam-U}

## Generic Parameters

#### U {#typeparam-U}
#### T {#typeparam-T}
#### addrSpace  : uint64\_t {#decl-addrSpace}

## Parameters

#### ptr  : Addr\<U\> {#decl-ptr}
#### val  : uint64\_t {#decl-val}
#### val  : int64\_t {#decl-val}
#### nativeStr  : [NativeString](/stdlib-reference/types/NativeString/index) {#decl-nativeStr}
#### ptr  : Addr\<T\> {#decl-ptr}
#### ptr  : NativeRef\<T\> {#decl-ptr}

