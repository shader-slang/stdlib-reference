---
layout: stdlib-reference
---

# Atomic\<T\>\.increment

## Description

Atomically increments the stored value and returns the original stored
value.




## Signature 

<pre>
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">Atomic</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="increment.html">increment</a>(<a href="../memoryorder-06/index.html" class="code_type">MemoryOrder</a> <a href="increment.html#decl-order" class="code_param">order</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/ibitatomicable-014/index.html" class="code_type">IBitAtomicable</a>;

</pre>

## Parameters

####  <a id="decl-order"></a>order  : [MemoryOrder](../memoryorder-06/index.html) = [MemoryOrder](../memoryorder-06/index.html)\.[Relaxed](../memoryorder-06/index.html#decl-Relaxed)

