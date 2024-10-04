---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.WriteSamplerFeedbackLevel

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackLevel">WriteSamplerFeedbackLevel</a>&lt;S&gt;(
    <a href="/stdlib-reference/types/Texture2D">Texture2D</a>&lt;S&gt; <span class='code_param'>tex</span>,
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>samp</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <span class='code_param'>location</span>,
    <span class="code_keyword">float</span> <span class='code_param'>lod</span>)
    <span class='code_keyword'>where</span> T : __BuiltinSamplerFeedbackType
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> sampleCount == 0
    <span class='code_keyword'>where</span> access == 3
    <span class='code_keyword'>where</span> isShadow == 0
    <span class='code_keyword'>where</span> isCombined == 0
    <span class='code_keyword'>where</span> format == 0;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackLevel">WriteSamplerFeedbackLevel</a>&lt;S&gt;(
    <a href="/stdlib-reference/types/Texture2DArray">Texture2DArray</a>&lt;S&gt; <span class='code_param'>texArray</span>,
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>samp</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <span class='code_param'>location</span>,
    <span class="code_keyword">float</span> <span class='code_param'>lod</span>)
    <span class='code_keyword'>where</span> T : __BuiltinSamplerFeedbackType
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> sampleCount == 0
    <span class='code_keyword'>where</span> access == 3
    <span class='code_keyword'>where</span> isShadow == 0
    <span class='code_keyword'>where</span> isCombined == 0
    <span class='code_keyword'>where</span> format == 0;

</pre>

## Parameters

* `S`
* `tex`
* `samp`
* `location`
* `lod`
* `texArray`

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### cpp
Available in all stages.



