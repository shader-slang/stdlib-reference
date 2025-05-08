---
layout: stdlib-reference
---

# Atomic\<T\>\.or

## Description

Atomically performs a bitwise OR operation between the stored value and
the given value, storing the result and returning the original stored
value.




## Signature 

<pre>
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">Atomic</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="or.html">or</a>(
    <a href="index.html#typeparam-T" class="code_type">T</a> <a href="or.html#decl-value" class="code_param">value</a>,
    <a href="../memoryorder-06/index.html" class="code_type">MemoryOrder</a> <a href="or.html#decl-order" class="code_param">order</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/ibitatomicable-014/index.html" class="code_type">IBitAtomicable</a>;

</pre>

## Parameters

####  <a id="decl-value"></a>value  : [T](index.html#typeparam-T)
####  <a id="decl-order"></a>order  : [MemoryOrder](../memoryorder-06/index.html) = [MemoryOrder](../memoryorder-06/index.html)\.[Relaxed](../memoryorder-06/index.html#decl-Relaxed)

