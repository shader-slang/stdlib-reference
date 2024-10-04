---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.SampleGrad

## Signature 

<pre>
/// Requires Capability Set 1:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/SampleGrad">SampleGrad</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>gradX</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>gradY</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 1:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/SampleGrad">SampleGrad</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>gradX</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>gradY</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.dimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 2:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/SampleGrad">SampleGrad</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>gradX</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>gradY</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.dimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">float</span> <span class='code_param'>lodClamp</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 1:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/SampleGrad">SampleGrad</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>gradX</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>gradY</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 1:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/SampleGrad">SampleGrad</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>gradX</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>gradY</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.dimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 2:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/SampleGrad">SampleGrad</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>gradX</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, Shape.dimensions&gt; <span class='code_param'>gradY</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.dimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">float</span> <span class='code_param'>lodClamp</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

</pre>

## Parameters

* `location`
* `gradX`
* `gradY`
* `offset`
* `lodClamp`
* `s`

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


