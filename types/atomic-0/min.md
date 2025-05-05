---
layout: stdlib-reference
---

# Atomic\<T\>\.min

## Description

Atomically computes the minimum of the stored value and the given
value, storing the result and returning the original stored value.




## Signature 

<pre>
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">Atomic</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="min.html">min</a>(
    <a href="index.html#typeparam-T" class="code_type">T</a> <a href="min.html#decl-value" class="code_param">value</a>,
    <a href="../memoryorder-06/index.html" class="code_type">MemoryOrder</a> <a href="min.html#decl-order" class="code_param">order</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/iarithmeticatomicable-01b/index.html" class="code_type">IArithmeticAtomicable</a>;

</pre>

## Parameters

####  <a id="decl-value"></a>value  : [T](index#typeparam-T)
####  <a id="decl-order"></a>order  : [MemoryOrder](../memoryorder-06/index) = [MemoryOrder](../memoryorder-06/index)\.[Relaxed](../memoryorder-06/index#decl-Relaxed)

