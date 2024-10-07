---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.GatherRed

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> == <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt;
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 4&gt; <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GatherRed">GatherRed</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset1</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset2</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset3</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset4</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

</pre>

## Parameters

#### s  : [SamplerState](/stdlib-reference/types/SamplerState/index) {#decl-s}
#### location  : [vector](/stdlib-reference/types/vector/index)\<float, isArray + Shape\.dimensions\> {#decl-location}
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



