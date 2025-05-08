---
layout: stdlib-reference
---

# Atomic\<T\>\.compareExchange

## Description

Atomically replace and return the stored <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span> value with a new <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span> value
only if the stored value is equal to the specified comparison value.

If the comparison value is equal to the stored value, then the
<span class='code'><a href="compareexchange-7.html#decl-successOrder" class="code_param">successOrder</a></span> <span class='code'><a href="../memoryorder-06/index.html" class="code_type">MemoryOrder</a></span> is used, otherwise the <span class='code'><a href="compareexchange-7.html#decl-failOrder" class="code_param">failOrder</a></span>
<span class='code'><a href="../memoryorder-06/index.html" class="code_type">MemoryOrder</a></span> is used.

<span class='code'><a href="compareexchange-7.html#decl-successOrder" class="code_param">successOrder</a></span> must be at least as strong as <span class='code'><a href="compareexchange-7.html#decl-failOrder" class="code_param">failOrder</a></span>

<span class='code'><a href="compareexchange-7.html#decl-failOrder" class="code_param">failOrder</a></span> must not be <span class='code'><a href="../memoryorder-06/index.html" class="code_type">MemoryOrder</a>.<a href="../memoryorder-06/index.html#decl-Release" class="code_var">Release</a></span> or <span class='code'><a href="../memoryorder-06/index.html" class="code_type">MemoryOrder</a>.<a href="../memoryorder-06/index.html#decl-AcquireRelease" class="code_var">AcquireRelease</a></span>




## Signature 

<pre>
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">Atomic</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="compareexchange-7.html">compareExchange</a>(
    <a href="index.html#typeparam-T" class="code_type">T</a> <a href="compareexchange-7.html#decl-compareValue" class="code_param">compareValue</a>,
    <a href="index.html#typeparam-T" class="code_type">T</a> <a href="compareexchange-7.html#decl-newValue" class="code_param">newValue</a>,
    <a href="../memoryorder-06/index.html" class="code_type">MemoryOrder</a> <a href="compareexchange-7.html#decl-successOrder" class="code_param">successOrder</a>,
    <a href="../memoryorder-06/index.html" class="code_type">MemoryOrder</a> <a href="compareexchange-7.html#decl-failOrder" class="code_param">failOrder</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/iatomicable-01/index.html" class="code_type">IAtomicable</a>;

</pre>

## Parameters

####  <a id="decl-compareValue"></a>compareValue  : [T](index.html#typeparam-T)
####  <a id="decl-newValue"></a>newValue  : [T](index.html#typeparam-T)
####  <a id="decl-successOrder"></a>successOrder  : [MemoryOrder](../memoryorder-06/index.html) = [MemoryOrder](../memoryorder-06/index.html)\.[Relaxed](../memoryorder-06/index.html#decl-Relaxed)
####  <a id="decl-failOrder"></a>failOrder  : [MemoryOrder](../memoryorder-06/index.html) = [MemoryOrder](../memoryorder-06/index.html)\.[Relaxed](../memoryorder-06/index.html#decl-Relaxed)

