---
layout: stdlib-reference
---

# RasterizerOrderedStructuredBuffer\<T, L\>\.Load

## Description





## Signature 

<pre>
<span class="code_type">T</span> <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index" class="code_type">RasterizerOrderedStructuredBuffer</a>&lt;<span class="code_type">T</span>, L&gt;.<a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load">Load</a>&lt;TIndex&gt;(
    TIndex <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> TIndex : __BuiltinIntegerType
    <span class='code_keyword'>where</span> L : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index" class="code_type">IBufferDataLayout</a>;

<span class="code_type">T</span> <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index" class="code_type">RasterizerOrderedStructuredBuffer</a>&lt;<span class="code_type">T</span>, L&gt;.<a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load">Load</a>&lt;TIndex&gt;(
    TIndex <span class='code_param'>location</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> TIndex : __BuiltinIntegerType
    <span class='code_keyword'>where</span> L : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Parameters

#### TIndex
#### location  : TIndex
#### status  : uint

