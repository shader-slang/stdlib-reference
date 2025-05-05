---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.WriteSamplerFeedbackBias

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="writesamplerfeedbackbias-05ck.html">WriteSamplerFeedbackBias</a>&lt;<a href="writesamplerfeedbackbias-05ck.html#typeparam-S" class="code_type">S</a>&gt;(
    <a href="../texture2d-08.html" class="code_type">Texture2D</a>&lt;<a href="writesamplerfeedbackbias-05ck.html#typeparam-S" class="code_type">S</a>&gt; <a href="writesamplerfeedbackbias-05ck.html#decl-tex" class="code_param">tex</a>,
    <a href="../samplerstate-07/index.html" class="code_type">SamplerState</a> <a href="writesamplerfeedbackbias-05ck.html#decl-samp" class="code_param">samp</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <a href="writesamplerfeedbackbias-05ck.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="writesamplerfeedbackbias-05ck.html#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">float</span> <a href="writesamplerfeedbackbias-05ck.html#decl-clamp" class="code_param">clamp</a>)
    <span class='code_keyword'>where</span> <a href="writesamplerfeedbackbias-05ck.html#typeparam-S" class="code_type">S</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> == <a href="../0_shape2d-028/index.html" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 4
    <span class='code_keyword'>where</span> <a href="index.html#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-format" class="code_var">format</a> == 0;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="writesamplerfeedbackbias-05ck.html">WriteSamplerFeedbackBias</a>&lt;<a href="writesamplerfeedbackbias-05ck.html#typeparam-S" class="code_type">S</a>&gt;(
    <a href="../texture2d-08.html" class="code_type">Texture2D</a>&lt;<a href="writesamplerfeedbackbias-05ck.html#typeparam-S" class="code_type">S</a>&gt; <a href="writesamplerfeedbackbias-05ck.html#decl-tex" class="code_param">tex</a>,
    <a href="../samplerstate-07/index.html" class="code_type">SamplerState</a> <a href="writesamplerfeedbackbias-05ck.html#decl-samp" class="code_param">samp</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <a href="writesamplerfeedbackbias-05ck.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="writesamplerfeedbackbias-05ck.html#decl-bias" class="code_param">bias</a>)
    <span class='code_keyword'>where</span> <a href="writesamplerfeedbackbias-05ck.html#typeparam-S" class="code_type">S</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> == <a href="../0_shape2d-028/index.html" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 4
    <span class='code_keyword'>where</span> <a href="index.html#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-format" class="code_var">format</a> == 0;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="writesamplerfeedbackbias-05ck.html">WriteSamplerFeedbackBias</a>&lt;<a href="writesamplerfeedbackbias-05ck.html#typeparam-S" class="code_type">S</a>&gt;(
    <a href="../texture2darray-089.html" class="code_type">Texture2DArray</a>&lt;<a href="writesamplerfeedbackbias-05ck.html#typeparam-S" class="code_type">S</a>&gt; <a href="writesamplerfeedbackbias-05ck.html#decl-texArray" class="code_param">texArray</a>,
    <a href="../samplerstate-07/index.html" class="code_type">SamplerState</a> <a href="writesamplerfeedbackbias-05ck.html#decl-samp" class="code_param">samp</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="writesamplerfeedbackbias-05ck.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="writesamplerfeedbackbias-05ck.html#decl-bias" class="code_param">bias</a>,
    <span class="code_keyword">float</span> <a href="writesamplerfeedbackbias-05ck.html#decl-clamp" class="code_param">clamp</a>)
    <span class='code_keyword'>where</span> <a href="writesamplerfeedbackbias-05ck.html#typeparam-S" class="code_type">S</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : __BuiltinSamplerFeedbackType
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> == <a href="../0_shape2d-028/index.html" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isArray" class="code_var">isArray</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 4
    <span class='code_keyword'>where</span> <a href="index.html#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-format" class="code_var">format</a> == 0;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="writesamplerfeedbackbias-05ck.html">WriteSamplerFeedbackBias</a>&lt;<a href="writesamplerfeedbackbias-05ck.html#typeparam-S" class="code_type">S</a>&gt;(
    <a href="../texture2darray-089.html" class="code_type">Texture2DArray</a>&lt;<a href="writesamplerfeedbackbias-05ck.html#typeparam-S" class="code_type">S</a>&gt; <a href="writesamplerfeedbackbias-05ck.html#decl-texArray" class="code_param">texArray</a>,
    <a href="../samplerstate-07/index.html" class="code_type">SamplerState</a> <a href="writesamplerfeedbackbias-05ck.html#decl-samp" class="code_param">samp</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="writesamplerfeedbackbias-05ck.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="writesamplerfeedbackbias-05ck.html#decl-bias" class="code_param">bias</a>)
    <span class='code_keyword'>where</span> <a href="writesamplerfeedbackbias-05ck.html#typeparam-S" class="code_type">S</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : __BuiltinSamplerFeedbackType
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> == <a href="../0_shape2d-028/index.html" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isArray" class="code_var">isArray</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 4
    <span class='code_keyword'>where</span> <a href="index.html#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-format" class="code_var">format</a> == 0;

</pre>

## Generic Parameters

####  <a id="typeparam-S"></a>S: [ITexelElement](../../interfaces/itexelelement-016/index)

## Parameters

####  <a id="decl-tex"></a>tex  : [Texture2D](../texture2d-08)\<S\>
####  <a id="decl-samp"></a>samp  : [SamplerState](../samplerstate-07/index)
####  <a id="decl-location"></a>location  : [vector](../vector/index)\<float, 2\>
####  <a id="decl-bias"></a>bias  : float
####  <a id="decl-clamp"></a>clamp  : float
####  <a id="decl-texArray"></a>texArray  : [Texture2DArray](../texture2darray-089)\<S\>
####  <a id="decl-location"></a>location  : [vector](../vector/index)\<float, 3\>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### cpp
Available in all stages.



