---
layout: stdlib-reference
---

# RWStructuredBuffer\<T, L\>\.GetDimensions

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWStructuredBuffer/index" class="code_type">RWStructuredBuffer</a>&lt;T, L&gt;.<a href="/stdlib-reference/types/RWStructuredBuffer/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>numStructs</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>stride</span>)
    <span class='code_keyword'>where</span> L : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Parameters

* `numStructs`
* `stride`

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



