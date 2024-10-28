---
layout: stdlib-reference
---

# RasterizerOrderedStructuredBuffer\<T, L\>\.IncrementCounter

## Description

Increment the object's hidden counter.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/index" class="code_type">RasterizerOrderedStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/incrementcounter-09">IncrementCounter</a>()
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/ibufferdatalayout-017b/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Return value
The pre-incremented counter value.

## Remarks

This function is not implemented when targeting non-HLSL.


