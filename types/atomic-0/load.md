---
layout: stdlib-reference
---

# Atomic\<T\>\.load

## Description

Atomically load the stored <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span> value




## Signature 

<pre>
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">Atomic</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="load.html">load</a>(<a href="../memoryorder-06/index.html" class="code_type">MemoryOrder</a> <a href="load.html#decl-order" class="code_param">order</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/iatomicable-01/index.html" class="code_type">IAtomicable</a>;

</pre>

## Parameters

####  <a id="decl-order"></a>order  : [MemoryOrder](../memoryorder-06/index) = [MemoryOrder](../memoryorder-06/index)\.[Relaxed](../memoryorder-06/index#decl-Relaxed)

