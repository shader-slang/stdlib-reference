---
layout: stdlib-reference
---

# RasterizerOrderedStructuredBuffer\<T, L\>\.IncrementCounter

## Description

Increment the object's hidden counter.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="index.html" class="code_type">RasterizerOrderedStructuredBuffer</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-L" class="code_type">L</a>&gt;.<a href="incrementcounter-09.html">IncrementCounter</a>()
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-L" class="code_type">L</a> : <a href="../../interfaces/ibufferdatalayout-017b/index.html" class="code_type">IBufferDataLayout</a>;

</pre>

## Return value
The pre-incremented counter value.

## Remarks

This function is not implemented when targeting non-HLSL.


