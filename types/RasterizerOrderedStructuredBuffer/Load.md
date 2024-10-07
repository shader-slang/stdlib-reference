---
layout: stdlib-reference
---

# RasterizerOrderedStructuredBuffer\<T, L\>\.Load

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index" class="code_type">RasterizerOrderedStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load">Load</a>&lt;<a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load#typeparam-TIndex" class="code_type">TIndex</a>&gt;(
    <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load#typeparam-TIndex" class="code_type">TIndex</a> <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load#typeparam-TIndex" class="code_type">TIndex</a> : __BuiltinIntegerType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index">IBufferDataLayout</a>;

<a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index" class="code_type">RasterizerOrderedStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load">Load</a>&lt;<a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load#typeparam-TIndex" class="code_type">TIndex</a>&gt;(
    <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load#typeparam-TIndex" class="code_type">TIndex</a> <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load#typeparam-TIndex" class="code_type">TIndex</a> : __BuiltinIntegerType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index">IBufferDataLayout</a>;

</pre>

## Generic Parameters

#### TIndex: \_\_BuiltinIntegerType {#typeparam-TIndex}

## Generic Parameters

#### TIndex: \_\_BuiltinIntegerType {#typeparam-TIndex}

## Parameters

#### location  : [TIndex](/stdlib-reference/types/RasterizerOrderedStructuredBuffer/Load#typeparam-TIndex) {#decl-location}
#### status  : uint {#decl-status}

