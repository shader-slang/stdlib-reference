---
layout: stdlib-reference
---

# struct Ptr\<T, Access access, AddressSpace addrSpace\>

## Description

Represents a pointer type.

## Generic Parameters

####  <a id="typeparam-T"></a>T
The type of the value pointed to.

####  <a id="decl-access"></a>access  : Access = Access\.ReadWrite
####  <a id="decl-addrSpace"></a>addrSpace  : AddressSpace = AddressSpace\.Device

## Methods

* [subscript](subscript)
* [init](init)

## Remarks

<span class='code'><a href="index.html#typeparam-T" class="code_type">T</a>*val</span> is equivalent to <span class='code'><a href="index.html" class="code_type">Ptr</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;val</span>.



<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

init <init>
subscript <subscript>
```
RTD-TOC-END -->
