---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.WriteSamplerFeedbackGrad

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackGrad">WriteSamplerFeedbackGrad</a>&lt;<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackGrad#typeparam-S" class="code_type">S</a>&gt;(
    <a href="/stdlib-reference/types/Texture2D" class="code_type">Texture2D</a>&lt;S&gt; <span class='code_param'>tex</span>,
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>samp</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 2&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 2&gt; <span class='code_param'>ddx</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 2&gt; <span class='code_param'>ddy</span>,
    float <span class='code_param'>clamp</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : __BuiltinSamplerFeedbackType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a> == 0;

void <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackGrad">WriteSamplerFeedbackGrad</a>&lt;<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackGrad#typeparam-S" class="code_type">S</a>&gt;(
    <a href="/stdlib-reference/types/Texture2D" class="code_type">Texture2D</a>&lt;S&gt; <span class='code_param'>tex</span>,
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>samp</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 2&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 2&gt; <span class='code_param'>ddx</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 2&gt; <span class='code_param'>ddy</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : __BuiltinSamplerFeedbackType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a> == 0;

void <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackGrad">WriteSamplerFeedbackGrad</a>&lt;<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackGrad#typeparam-S" class="code_type">S</a>&gt;(
    <a href="/stdlib-reference/types/Texture2DArray" class="code_type">Texture2DArray</a>&lt;S&gt; <span class='code_param'>texArray</span>,
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>samp</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 3&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 3&gt; <span class='code_param'>ddx</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 3&gt; <span class='code_param'>ddy</span>,
    float <span class='code_param'>clamp</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : __BuiltinSamplerFeedbackType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a> == 0;

void <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackGrad">WriteSamplerFeedbackGrad</a>&lt;<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackGrad#typeparam-S" class="code_type">S</a>&gt;(
    <a href="/stdlib-reference/types/Texture2DArray" class="code_type">Texture2DArray</a>&lt;S&gt; <span class='code_param'>texArray</span>,
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>samp</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 3&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 3&gt; <span class='code_param'>ddx</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, 3&gt; <span class='code_param'>ddy</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : __BuiltinSamplerFeedbackType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a> == 0;

</pre>

## Generic Parameters

#### S {#typeparam-S}

## Generic Parameters

#### S {#typeparam-S}

## Parameters

#### tex  : [Texture2D](/stdlib-reference/types/Texture2D)\<S\> {#decl-tex}
#### samp  : [SamplerState](/stdlib-reference/types/SamplerState/index) {#decl-samp}
#### location  : [vector](/stdlib-reference/types/vector/index)\<float, 2\> {#decl-location}
#### ddx  : [vector](/stdlib-reference/types/vector/index)\<float, 2\> {#decl-ddx}
#### ddy  : [vector](/stdlib-reference/types/vector/index)\<float, 2\> {#decl-ddy}
#### clamp  : float {#decl-clamp}
#### texArray  : [Texture2DArray](/stdlib-reference/types/Texture2DArray)\<S\> {#decl-texArray}
#### location  : [vector](/stdlib-reference/types/vector/index)\<float, 3\> {#decl-location}
#### ddx  : [vector](/stdlib-reference/types/vector/index)\<float, 3\> {#decl-ddx}
#### ddy  : [vector](/stdlib-reference/types/vector/index)\<float, 3\> {#decl-ddy}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### cpp
Available in all stages.



