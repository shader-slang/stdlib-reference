---
layout: stdlib-reference
---

# ConsumeStructuredBuffer\<T, L\>\.GetDimensions

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/ConsumeStructuredBuffer/index" class="code_type">ConsumeStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/ConsumeStructuredBuffer/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/ConsumeStructuredBuffer/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/ConsumeStructuredBuffer/GetDimensions">GetDimensions</a>(
    out uint <a href="/stdlib-reference/types/ConsumeStructuredBuffer/GetDimensions#decl-numStructs" class="code_param">numStructs</a>,
    out uint <a href="/stdlib-reference/types/ConsumeStructuredBuffer/GetDimensions#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/ConsumeStructuredBuffer/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index">IBufferDataLayout</a>;

</pre>

## Parameters

#### numStructs  : uint {#decl-numStructs}
#### stride  : uint {#decl-stride}

