---
layout: stdlib-reference
---

# Atomic\<T\>\.exchange

## Description

Atomically replace the stored <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span> value with a new <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span> value and return
replaced value




## Signature 

<pre>
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">Atomic</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="exchange.html">exchange</a>(
    <a href="index.html#typeparam-T" class="code_type">T</a> <a href="exchange.html#decl-newValue" class="code_param">newValue</a>,
    <a href="../memoryorder-06/index.html" class="code_type">MemoryOrder</a> <a href="exchange.html#decl-order" class="code_param">order</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/iatomicable-01/index.html" class="code_type">IAtomicable</a>;

</pre>

## Parameters

####  <a id="decl-newValue"></a>newValue  : [T](index.html#typeparam-T)
####  <a id="decl-order"></a>order  : [MemoryOrder](../memoryorder-06/index.html) = [MemoryOrder](../memoryorder-06/index.html)\.[Relaxed](../memoryorder-06/index.html#decl-Relaxed)

