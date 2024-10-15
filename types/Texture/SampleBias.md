---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.SampleBias

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/SampleBias">SampleBias</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>+<a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="/stdlib-reference/types/Texture/SampleBias#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/Texture/SampleBias#decl-bias" class="code_param">bias</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/SampleBias">SampleBias</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>+<a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="/stdlib-reference/types/Texture/SampleBias#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/Texture/SampleBias#decl-bias" class="code_param">bias</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="/stdlib-reference/types/Texture/SampleBias#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/SampleBias">SampleBias</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <a href="/stdlib-reference/types/Texture/SampleBias#decl-s" class="code_param">s</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>+<a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="/stdlib-reference/types/Texture/SampleBias#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/Texture/SampleBias#decl-bias" class="code_param">bias</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/SampleBias">SampleBias</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <a href="/stdlib-reference/types/Texture/SampleBias#decl-s" class="code_param">s</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>+<a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="/stdlib-reference/types/Texture/SampleBias#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/Texture/SampleBias#decl-bias" class="code_param">bias</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="/stdlib-reference/types/Texture/SampleBias#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

</pre>

## Parameters

#### location  : [vector](/stdlib-reference/types/vector/index)\<float, isArray + Shape\.dimensions\> {#decl-location}
#### bias  : float {#decl-bias}
#### offset  : [vector](/stdlib-reference/types/vector/index)\<int, Shape\.planeDimensions\> {#decl-offset}
#### s  : [SamplerState](/stdlib-reference/types/SamplerState/index) {#decl-s}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvImageQuery`, `spvSparseResidency`.


