---
layout: stdlib-reference
---

# ConsumeStructuredBuffer\<T, L\>\.Consume

## Description

Reading the element at the end of the buffer indicated by the associated atomic counter
and decrement the builtin atomic counter by 1.



## Signature 

<pre>
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">ConsumeStructuredBuffer</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-L" class="code_type">L</a>&gt;.<a href="consume-0.html">Consume</a>()
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-L" class="code_type">L</a> : <a href="../../interfaces/ibufferdatalayout-017b/index.html" class="code_type">IBufferDataLayout</a>;

</pre>

## Return value
The element read from the buffer, it can be a structure.


