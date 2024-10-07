---
layout: stdlib-reference
---

# RasterizerOrderedStructuredBuffer\<T, L\>\.GetDimensions

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index" class="code_type">RasterizerOrderedStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/GetDimensions">GetDimensions</a>(
    out uint <span class='code_param'>numStructs</span>,
    out uint <span class='code_param'>stride</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/RasterizerOrderedStructuredBuffer/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index">IBufferDataLayout</a>;

</pre>

## Parameters

#### numStructs  : uint {#decl-numStructs}
#### stride  : uint {#decl-stride}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.



