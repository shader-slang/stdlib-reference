---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.queryFootprintFineBiasClamp

## Description

Query the footprint that would be accessed by a texture sampling operation.

This operation queries the footprint that would be accessed
by a comparable call to:

t.SampleBiasClamp(sampler, coords, lodBias, lodClamp);




## Signature 

<pre>
<a href="/stdlib-reference/types/TextureFootprint/index" class="code_type">TextureFootprint</a>&lt;Shape.dimensions&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/queryFootprintFineBiasClamp">queryFootprintFineBiasClamp</a>(
    uint <span class='code_param'>granularity</span>,
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>sampler</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>coords</span>,
    float <span class='code_param'>lodBias</span>,
    float <span class='code_param'>lodClamp</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a> == 0;

</pre>

## Parameters

#### granularity  : uint {#decl-granularity}
#### sampler  : [SamplerState](/stdlib-reference/types/SamplerState/index) {#decl-sampler}
#### coords  : [vector](/stdlib-reference/types/vector/index)\<float, Shape\.dimensions\> {#decl-coords}
#### lodBias  : float {#decl-lodBias}
#### lodClamp  : float {#decl-lodClamp}

