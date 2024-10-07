---
layout: stdlib-reference
---

# RWStructuredBuffer\<T, L\>\.Load

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/RWStructuredBuffer/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/RWStructuredBuffer/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/RWStructuredBuffer/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/RWStructuredBuffer/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/RWStructuredBuffer/Load">Load</a>&lt;<a href="/stdlib-reference/types/RWStructuredBuffer/Load#typeparam-TIndex" class="code_type">TIndex</a>&gt;(<a href="/stdlib-reference/types/RWStructuredBuffer/Load#typeparam-TIndex" class="code_type">TIndex</a> <a href="/stdlib-reference/types/RWStructuredBuffer/Load#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/RWStructuredBuffer/Load#typeparam-TIndex" class="code_type">TIndex</a> : __BuiltinIntegerType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/RWStructuredBuffer/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index">IBufferDataLayout</a>;

<a href="/stdlib-reference/types/RWStructuredBuffer/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/RWStructuredBuffer/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/RWStructuredBuffer/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/RWStructuredBuffer/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/RWStructuredBuffer/Load">Load</a>&lt;<a href="/stdlib-reference/types/RWStructuredBuffer/Load#typeparam-TIndex" class="code_type">TIndex</a>&gt;(
    <a href="/stdlib-reference/types/RWStructuredBuffer/Load#typeparam-TIndex" class="code_type">TIndex</a> <a href="/stdlib-reference/types/RWStructuredBuffer/Load#decl-location" class="code_param">location</a>,
    out uint <a href="/stdlib-reference/types/RWStructuredBuffer/Load#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/RWStructuredBuffer/Load#typeparam-TIndex" class="code_type">TIndex</a> : __BuiltinIntegerType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/RWStructuredBuffer/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index">IBufferDataLayout</a>;

</pre>

## Generic Parameters

#### TIndex: \_\_BuiltinIntegerType {#typeparam-TIndex}

## Generic Parameters

#### TIndex: \_\_BuiltinIntegerType {#typeparam-TIndex}

## Parameters

#### location  : [TIndex](/stdlib-reference/types/RWStructuredBuffer/Load#typeparam-TIndex) {#decl-location}
#### status  : uint {#decl-status}

