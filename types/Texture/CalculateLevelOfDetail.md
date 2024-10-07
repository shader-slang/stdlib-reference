---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.CalculateLevelOfDetail

## Description





## Signature 

<pre>
<span class="code_keyword">float</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/CalculateLevelOfDetail">CalculateLevelOfDetail</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

<span class="code_keyword">float</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/CalculateLevelOfDetail">CalculateLevelOfDetail</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isCombined == 0;

</pre>

## Parameters

#### location  : [vector](/stdlib-reference/types/vector/index)\<float, Shape\.dimensions\> {#decl-location}
#### s  : [SamplerState](/stdlib-reference/types/SamplerState/index) {#decl-s}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvImageQuery`, `spvSparseResidency`.


