---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.WriteSamplerFeedbackLevel

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/WriteSamplerFeedbackLevel">WriteSamplerFeedbackLevel</a>&lt;S&gt;(
    <a href="/stdlib-reference/types/Texture2D" class="code_type">Texture2D</a>&lt;S&gt; <span class='code_param'>tex</span>,
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
    <a href="/stdlib-reference/types/Texture2DArray" class="code_type">Texture2DArray</a>&lt;S&gt; <span class='code_param'>texArray</span>,
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

#### S
#### tex : Texture2D\<S\>
#### samp : SamplerState
#### location : vector\<float,2\>
#### lod : float
#### texArray : Texture2DArray\<S\>
#### location : vector\<float,3\>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### cpp
Available in all stages.



