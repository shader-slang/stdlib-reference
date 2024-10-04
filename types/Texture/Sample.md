---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.Sample

## Description

Samples the texture at the given location.




## Signature 

<pre>
/// Requires Capability Set 1:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Sample">Sample</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 2:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Sample">Sample</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Sample">Sample</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">float</span> <span class='code_param'>clamp</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Sample">Sample</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">float</span> <span class='code_param'>clamp</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 1;

/// Requires Capability Set 1:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Sample">Sample</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 2:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Sample">Sample</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Sample">Sample</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">float</span> <span class='code_param'>clamp</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Sample">Sample</a>(
    <a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a> <span class='code_param'>s</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">float</span> <span class='code_param'>clamp</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isCombined == 0;

</pre>

## Parameters

#### location : vector\<float,isArray+Shape\.dimensions\>
The location to sample the texture at.

#### offset : vector\<int,Shape\.planeDimensions\>
Texel offset to apply.

#### clamp : float
The max level of detail to use.

#### status : uint
\[out\] The result status of the operation.
This parameter is currently only used when targeting HLSL.
For other targets, the result status is always 0.

#### s : SamplerState
The <span class='code'><a href="/stdlib-reference/types/SamplerState/index" class="code_type">SamplerState</a></span> to use for the sampling operation. This parameter is omitted when <span class='code'>this</span> is a combined texture sampler type (<span class='code'>isCombined==0</span>).


## Return value
The sampled texture value.

## Remarks

The <span class='code'><a href="/stdlib-reference/types/Texture/Sample">Sample</a></span> function is defined for all read-only texture types, including
<span class='code'><a href="/stdlib-reference/types/Texture1D" class="code_type">Texture1D</a></span>, <span class='code'><a href="/stdlib-reference/types/Texture2D" class="code_type">Texture2D</a></span>, <span class='code'><a href="/stdlib-reference/types/Texture3D" class="code_type">Texture3D</a></span>, <span class='code'><a href="/stdlib-reference/types/TextureCube" class="code_type">TextureCube</a></span>,
<span class='code'><a href="/stdlib-reference/types/Texture1DArray" class="code_type">Texture1DArray</a></span>, <span class='code'><a href="/stdlib-reference/types/Texture2DArray" class="code_type">Texture2DArray</a></span> and <span class='code'><a href="/stdlib-reference/types/TextureCubeArray" class="code_type">TextureCubeArray</a></span>.

The function is not available for read-write texture types.

For HLSL/D3D targets, the texture element type must be a scalar or vector of float or half types.


## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
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

#### wgsl
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvImageQuery`, `spvSparseResidency`.

### Capability Set 3

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


## See Also
<span class='code'><a href="/stdlib-reference/types/Texture/SampleBias">SampleBias</a></span>, <span class='code'><a href="/stdlib-reference/types/Texture/SampleLevel">SampleLevel</a></span>, <span class='code'><a href="/stdlib-reference/types/Texture/SampleGrad">SampleGrad</a></span>, <span class='code'><a href="/stdlib-reference/types/Texture/SampleCmp">SampleCmp</a></span>, <span class='code'><a href="/stdlib-reference/types/Texture/SampleCmpLevelZero">SampleCmpLevelZero</a></span>.

