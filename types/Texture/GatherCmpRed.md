---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.GatherCmpRed

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/SamplerComparisonState/index" class="code_type">SamplerComparisonState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/SamplerComparisonState/index" class="code_type">SamplerComparisonState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    out uint <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/SamplerComparisonState/index" class="code_type">SamplerComparisonState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/SamplerComparisonState/index" class="code_type">SamplerComparisonState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    out uint <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/SamplerComparisonState/index" class="code_type">SamplerComparisonState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/SamplerComparisonState/index" class="code_type">SamplerComparisonState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>,
    out uint <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/SamplerComparisonState/index" class="code_type">SamplerComparisonState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/SamplerComparisonState/index" class="code_type">SamplerComparisonState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    out uint <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/SamplerComparisonState/index" class="code_type">SamplerComparisonState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/SamplerComparisonState/index" class="code_type">SamplerComparisonState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    out uint <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/SamplerComparisonState/index" class="code_type">SamplerComparisonState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/SamplerComparisonState/index" class="code_type">SamplerComparisonState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>,
    out uint <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    out uint <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    out uint <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>,
    out uint <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt;
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    out uint <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    out uint <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/GatherCmpRed">GatherCmpRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;float, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>,
    out uint <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape/index">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 1;

</pre>

## Parameters

#### s  : [SamplerComparisonState](/stdlib-reference/types/SamplerComparisonState/index) {#decl-s}
#### location  : [vector](/stdlib-reference/types/vector/index)\<float, isArray + Shape\.dimensions\> {#decl-location}
#### compareValue  : [T](/stdlib-reference/types/Texture/index#typeparam-T) {#decl-compareValue}
#### status  : uint {#decl-status}
#### offset  : [vector](/stdlib-reference/types/vector/index)\<int, Shape\.planeDimensions\> {#decl-offset}
#### offset1  : [vector](/stdlib-reference/types/vector/index)\<int, Shape\.planeDimensions\> {#decl-offset1}
#### offset2  : [vector](/stdlib-reference/types/vector/index)\<int, Shape\.planeDimensions\> {#decl-offset2}
#### offset3  : [vector](/stdlib-reference/types/vector/index)\<int, Shape\.planeDimensions\> {#decl-offset3}
#### offset4  : [vector](/stdlib-reference/types/vector/index)\<int, Shape\.planeDimensions\> {#decl-offset4}

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvImageQuery`, `spvImageGatherExtended`, `spvSparseResidency`.

### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.



