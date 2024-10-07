---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.WriteSamplerFeedbackBias

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackBias">WriteSamplerFeedbackBias</a>&lt;<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackBias#typeparam-S" class="code_type">S</a>&gt;(
    <a href="/stdlib-reference/types/Texture2D" class="code_type">Texture2D</a>&lt;S&gt; <span class='code_param'>tex</span>,
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>samp</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 2&gt; <span class='code_param'>location</span>,
    float <span class='code_param'>bias</span>,
    float <span class='code_param'>clamp</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : __BuiltinSamplerFeedbackType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a> == 0;

void <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackBias">WriteSamplerFeedbackBias</a>&lt;<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackBias#typeparam-S" class="code_type">S</a>&gt;(
    <a href="/stdlib-reference/types/Texture2D" class="code_type">Texture2D</a>&lt;S&gt; <span class='code_param'>tex</span>,
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>samp</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 2&gt; <span class='code_param'>location</span>,
    float <span class='code_param'>bias</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : __BuiltinSamplerFeedbackType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a> == 0;

void <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackBias">WriteSamplerFeedbackBias</a>&lt;<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackBias#typeparam-S" class="code_type">S</a>&gt;(
    <a href="/stdlib-reference/types/Texture2DArray" class="code_type">Texture2DArray</a>&lt;S&gt; <span class='code_param'>texArray</span>,
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>samp</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 3&gt; <span class='code_param'>location</span>,
    float <span class='code_param'>bias</span>,
    float <span class='code_param'>clamp</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : __BuiltinSamplerFeedbackType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a> == 0;

void <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackBias">WriteSamplerFeedbackBias</a>&lt;<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackBias#typeparam-S" class="code_type">S</a>&gt;(
    <a href="/stdlib-reference/types/Texture2DArray" class="code_type">Texture2DArray</a>&lt;S&gt; <span class='code_param'>texArray</span>,
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>samp</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 3&gt; <span class='code_param'>location</span>,
    float <span class='code_param'>bias</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : __BuiltinSamplerFeedbackType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a> == 0;

</pre>

## Generic Parameters

#### S {#typeparam-S}

## Generic Parameters

#### S {#typeparam-S}

## Parameters

#### tex  : [Texture2D](/stdlib-reference/types/Texture2D)\<S\> {#decl-tex}
#### samp  : [SamplerState](/stdlib-reference/types/SamplerState/index) {#decl-samp}
#### location  : [vector](/stdlib-reference/types/vector/index)\<float, 2\> {#decl-location}
#### bias  : float {#decl-bias}
#### clamp  : float {#decl-clamp}
#### texArray  : [Texture2DArray](/stdlib-reference/types/Texture2DArray)\<S\> {#decl-texArray}
#### location  : [vector](/stdlib-reference/types/vector/index)\<float, 3\> {#decl-location}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### cpp
Available in all stages.



