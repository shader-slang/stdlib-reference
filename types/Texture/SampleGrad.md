---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.SampleGrad

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/SampleGrad">SampleGrad</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>gradX</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>gradY</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/SampleGrad">SampleGrad</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>gradX</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>gradY</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.dimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/SampleGrad">SampleGrad</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>gradX</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>gradY</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.dimensions&gt; <span class='code_param'>offset</span>,
    float <span class='code_param'>lodClamp</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/SampleGrad">SampleGrad</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>gradX</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>gradY</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/SampleGrad">SampleGrad</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>gradX</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>gradY</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.dimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/SampleGrad">SampleGrad</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>gradX</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, Shape.dimensions&gt; <span class='code_param'>gradY</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.dimensions&gt; <span class='code_param'>offset</span>,
    float <span class='code_param'>lodClamp</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-isCombined" class="code_var">isCombined</a> == 0;

</pre>

## Parameters

#### location  : [vector](/stdlib-reference/types/vector/index)\<float, isArray + Shape\.dimensions\> {#decl-location}
#### gradX  : [vector](/stdlib-reference/types/vector/index)\<float, Shape\.dimensions\> {#decl-gradX}
#### gradY  : [vector](/stdlib-reference/types/vector/index)\<float, Shape\.dimensions\> {#decl-gradY}
#### offset  : [vector](/stdlib-reference/types/vector/index)\<int, Shape\.dimensions\> {#decl-offset}
#### lodClamp  : float {#decl-lodClamp}
#### s  : [SamplerState](/stdlib-reference/types/SamplerState/index) {#decl-s}

## Availability and Requirements

### Capability Set 1

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

### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvImageQuery`, `spvSparseResidency`.


