---
layout: stdlib-reference
---

# Atomic\<T\>\.store

## Description

Atomically store a new <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span> value




## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">Atomic</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="store.html">store</a>(
    <a href="index.html#typeparam-T" class="code_type">T</a> <a href="store.html#decl-newValue" class="code_param">newValue</a>,
    <a href="../memoryorder-06/index.html" class="code_type">MemoryOrder</a> <a href="store.html#decl-order" class="code_param">order</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/iatomicable-01/index.html" class="code_type">IAtomicable</a>;

</pre>

## Parameters

####  <a id="decl-newValue"></a>newValue  : [T](index.html#typeparam-T)
####  <a id="decl-order"></a>order  : [MemoryOrder](../memoryorder-06/index.html) = [MemoryOrder](../memoryorder-06/index.html)\.[Relaxed](../memoryorder-06/index.html#decl-Relaxed)

