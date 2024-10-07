---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.CalculateLevelOfDetailUnclamped

## Description





## Signature 

<pre>
float <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/CalculateLevelOfDetailUnclamped">CalculateLevelOfDetailUnclamped</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a> == 1;

float <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/CalculateLevelOfDetailUnclamped">CalculateLevelOfDetailUnclamped</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a> == 0;

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


