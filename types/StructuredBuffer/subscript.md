---
layout: stdlib-reference
---

# StructuredBuffer\<T, L\>\.subscript

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/StructuredBuffer/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/StructuredBuffer/index" class="code_type">StructuredBuffer</a>&lt;<a href="/stdlib-reference/types/StructuredBuffer/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/StructuredBuffer/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/StructuredBuffer/subscript">subscript</a>&lt;<a href="/stdlib-reference/types/StructuredBuffer/subscript#typeparam-TIndex" class="code_type">TIndex</a>&gt;(
    <a href="/stdlib-reference/types/StructuredBuffer/subscript#typeparam-TIndex" class="code_type">TIndex</a> <a href="/stdlib-reference/types/StructuredBuffer/subscript#decl-index" class="code_param">index</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/StructuredBuffer/subscript#typeparam-TIndex" class="code_type">TIndex</a> : <a href="/stdlib-reference/interfaces/BuiltinIntegerType/index" class="code_type">__BuiltinIntegerType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/StructuredBuffer/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Generic Parameters

#### TIndex: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/BuiltinIntegerType/index) {#typeparam-TIndex}

## Parameters

#### index  : [TIndex](/stdlib-reference/types/StructuredBuffer/subscript#typeparam-TIndex) {#decl-index}

