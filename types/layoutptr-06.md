---
layout: stdlib-reference
---

# typealias LayoutPtr\<T, L\>

## Description

Represents a pointer with custom data layout as a shorthand for Ptr<T>.
Such pointers are almost always in the Device address space.


## Signature

<pre>
<span class='code_keyword'>typealias</span> <a href="layoutptr-06.html" class="code_type">LayoutPtr</a>&lt;T, L&gt; = <a href="ptr-0/index.html" class="code_type">Ptr</a>&lt;T, Access.ReadWrite, AddressSpace.Device, <a href="defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt;;
</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T
####  <a id="typeparam-L"></a>L: [IBufferDataLayout](../interfaces/ibufferdatalayout-017b/index.html)

