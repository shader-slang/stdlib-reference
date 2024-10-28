---
layout: stdlib-reference
---

# RWStructuredBuffer\<T, L\>\.IncrementCounter

## Description

Increment the object's hidden counter.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/rwstructuredbuffer-012c/incrementcounter-09">IncrementCounter</a>()
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/ibufferdatalayout-017b/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Return value
The pre-incremented counter value.

## Remarks

This function is not implemented when targeting non-HLSL.


