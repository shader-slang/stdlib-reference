---
layout: stdlib-reference
---

# typealias ImmutablePtr\<T, AddressSpace addrSpace, L\>

## Description

Represents a pointer to immutable data. Immutable data is known at compile time to remain unchanged during the entire
execution of the program. This knowledge allows the compiler to perform more aggressive optimizations around the memory
accesses through such pointers. If the data is changed during the program execution, the behavior is undefined and loaded
data through such pointers may be invalid.


## Signature

<pre>
<span class='code_keyword'>typealias</span> <a href="immutableptr-09.html" class="code_type">ImmutablePtr</a>&lt;T, AddressSpace addrSpace, L&gt; = 
    <a href="ptr-0/index.html" class="code_type">Ptr</a>&lt;T, Access.Immutable, AddressSpace.Generic, <a href="defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt;;
</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T
####  <a id="decl-addrSpace"></a>addrSpace  : AddressSpace = AddressSpace\.Device
####  <a id="typeparam-L"></a>L: [IBufferDataLayout](../interfaces/ibufferdatalayout-017b/index.html) = [DefaultDataLayout](defaultdatalayout-07b/index.html)

