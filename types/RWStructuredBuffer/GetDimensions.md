---
layout: stdlib-reference
---

# RWStructuredBuffer\<T, L\>\.GetDimensions

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWStructuredBuffer/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/RWStructuredBuffer/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/RWStructuredBuffer/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/RWStructuredBuffer/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RWStructuredBuffer/GetDimensions#decl-numStructs" class="code_param">numStructs</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RWStructuredBuffer/GetDimensions#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/RWStructuredBuffer/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index">IBufferDataLayout</a>;

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



