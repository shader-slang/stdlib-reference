---
layout: stdlib-reference
---

# RWStructuredBuffer\<T, L\>\.DecrementCounter

## Description

Decrements the object's hidden counter.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-L" class="code_type">L</a>&gt;.<a href="decrementcounter-09.html">DecrementCounter</a>()
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-L" class="code_type">L</a> : <a href="../../interfaces/ibufferdatalayout-017b/index.html" class="code_type">IBufferDataLayout</a>;

</pre>

## Return value
The post-decremented counter value.

## Remarks

This function is not implemented when targeting non-HLSL.


