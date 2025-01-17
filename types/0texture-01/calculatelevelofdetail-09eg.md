---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.CalculateLevelOfDetail

## Description





## Signature 

<pre>
<span class="code_keyword">float</span> <a href="/stdlib-reference/types/0texture-01/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/0texture-01/calculatelevelofdetail-09eg">CalculateLevelOfDetail</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="/stdlib-reference/types/0texture-01/calculatelevelofdetail-09eg#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/itexelelement-016/index" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/0_itextureshape-023a/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#decl-isCombined" class="code_var">isCombined</a> == 1;

<span class="code_keyword">float</span> <a href="/stdlib-reference/types/0texture-01/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/0texture-01/calculatelevelofdetail-09eg">CalculateLevelOfDetail</a>(
    <a href="/stdlib-reference/types/samplerstate-07/index" class="code_type">SamplerState</a> <a href="/stdlib-reference/types/0texture-01/calculatelevelofdetail-09eg#decl-s" class="code_param">s</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="/stdlib-reference/types/0texture-01/calculatelevelofdetail-09eg#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/itexelelement-016/index" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/0_itextureshape-023a/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#decl-isCombined" class="code_var">isCombined</a> == 0;

<span class="code_keyword">float</span> <a href="/stdlib-reference/types/0texture-01/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/0texture-01/calculatelevelofdetail-09eg">CalculateLevelOfDetail</a>(
    <a href="/stdlib-reference/types/samplercomparisonstate-07h/index" class="code_type">SamplerComparisonState</a> <a href="/stdlib-reference/types/0texture-01/calculatelevelofdetail-09eg#decl-s" class="code_param">s</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="/stdlib-reference/types/0texture-01/calculatelevelofdetail-09eg#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/itexelelement-016/index" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/0_itextureshape-023a/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#decl-isCombined" class="code_var">isCombined</a> == 0;

</pre>

## Parameters

#### location  : [vector](/stdlib-reference/types/vector/index)\<float, Shape\.dimensions\> {#decl-location}
#### s  : [SamplerState](/stdlib-reference/types/samplerstate-07/index) {#decl-s}
#### s  : [SamplerComparisonState](/stdlib-reference/types/samplercomparisonstate-07h/index) {#decl-s}

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

Requires capability: `spvImageQuery`.


