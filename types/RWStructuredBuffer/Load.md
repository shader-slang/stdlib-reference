---
layout: stdlib-reference
---

# RWStructuredBuffer\<T, L\>\.Load

## Signature 

<pre>
T <a href="/stdlib-reference/types/RWStructuredBuffer/index" class="code_type">RWStructuredBuffer</a>&lt;T, L&gt;.<a href="/stdlib-reference/types/RWStructuredBuffer/Load">Load</a>&lt;TIndex&gt;(TIndex <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> TIndex : __BuiltinIntegerType
    <span class='code_keyword'>where</span> L : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index" class="code_type">IBufferDataLayout</a>;

T <a href="/stdlib-reference/types/RWStructuredBuffer/index" class="code_type">RWStructuredBuffer</a>&lt;T, L&gt;.<a href="/stdlib-reference/types/RWStructuredBuffer/Load">Load</a>&lt;TIndex&gt;(
    TIndex <span class='code_param'>location</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> TIndex : __BuiltinIntegerType
    <span class='code_keyword'>where</span> L : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Parameters

* `TIndex`
* `location`
* `status`

