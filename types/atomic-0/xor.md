---
layout: stdlib-reference
---

# Atomic\<T\>\.xor

## Description

Atomically performs a bitwise XOR operation between the stored value
and the given value, storing the result and returning the original
stored value.




## Signature 

<pre>
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">Atomic</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="xor.html">xor</a>(
    <a href="index.html#typeparam-T" class="code_type">T</a> <a href="xor.html#decl-value" class="code_param">value</a>,
    <a href="../memoryorder-06/index.html" class="code_type">MemoryOrder</a> <a href="xor.html#decl-order" class="code_param">order</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/ibitatomicable-014/index.html" class="code_type">IBitAtomicable</a>;

</pre>

## Parameters

####  <a id="decl-value"></a>value  : [T](index.html#typeparam-T)
####  <a id="decl-order"></a>order  : [MemoryOrder](../memoryorder-06/index.html) = [MemoryOrder](../memoryorder-06/index.html)\.[Relaxed](../memoryorder-06/index.html#decl-Relaxed)

