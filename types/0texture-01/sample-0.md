---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.Sample

## Description

Samples the texture at a given location using implicit level of detail.




## Signature 

<pre>
/// Requires Capability Set 1:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="sample-0.html">Sample</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="sample-0.html#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 2:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="sample-0.html">Sample</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="sample-0.html#decl-location" class="code_param">location</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="sample-0.html#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 3:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="sample-0.html">Sample</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="sample-0.html#decl-location" class="code_param">location</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="sample-0.html#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">float</span> <a href="sample-0.html#decl-clamp" class="code_param">clamp</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 1;

<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="sample-0.html">Sample</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="sample-0.html#decl-location" class="code_param">location</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="sample-0.html#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">float</span> <a href="sample-0.html#decl-clamp" class="code_param">clamp</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="sample-0.html#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 1:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="sample-0.html">Sample</a>(
    <a href="../samplerstate-07/index.html" class="code_type">SamplerState</a> <a href="sample-0.html#decl-s" class="code_param">s</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="sample-0.html#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 2:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="sample-0.html">Sample</a>(
    <a href="../samplerstate-07/index.html" class="code_type">SamplerState</a> <a href="sample-0.html#decl-s" class="code_param">s</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="sample-0.html#decl-location" class="code_param">location</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="sample-0.html#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 4:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="sample-0.html">Sample</a>(
    <a href="../samplerstate-07/index.html" class="code_type">SamplerState</a> <a href="sample-0.html#decl-s" class="code_param">s</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="sample-0.html#decl-location" class="code_param">location</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="sample-0.html#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">float</span> <a href="sample-0.html#decl-clamp" class="code_param">clamp</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="sample-0.html">Sample</a>(
    <a href="../samplerstate-07/index.html" class="code_type">SamplerState</a> <a href="sample-0.html#decl-s" class="code_param">s</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="sample-0.html#decl-location" class="code_param">location</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="sample-0.html#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">float</span> <a href="sample-0.html#decl-clamp" class="code_param">clamp</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="sample-0.html#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

</pre>

## Parameters

####  <a id="decl-location"></a>location  : [vector](../vector/index.html)\<float, isArray + Shape\.dimensions\>
The location to sample the texture at.

####  <a id="decl-offset"></a>offset  : [vector](../vector/index.html)\<int, Shape\.planeDimensions\>
Texel offset to apply.

####  <a id="decl-clamp"></a>clamp  : float
The maximum level of detail to use.

####  <a id="decl-status"></a>status  : uint
\[out\] The result status of the operation.
This parameter is currently only used when targeting HLSL.
For other targets, the result status is always 0.

####  <a id="decl-s"></a>s  : [SamplerState](../samplerstate-07/index.html)
The <span class='code'><a href="../samplerstate-07/index.html" class="code_type">SamplerState</a></span> to use for the sampling operation. This parameter is omitted when <span class='code'>this</span> is a combined texture sampler type (<span class='code'><a href="index.html#decl-isCombined" class="code_var">isCombined</a>==0</span>).


## Return value
The sampled texture value.

<span class='code'><a href="sample-0.html#decl-location" class="code_param">location</a></span> is a vector of floats as follows:
- For 1d/2d/3d-textures, the vector is a 1d/2d/3d-vector specifying the sample location. Usually, normalized coordinates are used
such that the coordinate range <span class='code'>[0, 1]</span> denotes the full span of the texture. Depending on the sampler state and the sampled texture type,
other conventions may also be used. For example, <span class='code'>GL_TEXTURE_RECTANGLE</span> uses non-normalized texel locations.
- For cube textures, the location is a 3d-vector specifying the direction from the center of the cube at the sample. The direction
does not need to be normalized.
- For texture arrays, the location vector is appended with the array index. The array
index (float) is first rounded to the nearest integer value and then clamped to <span class='code'>[0, d-1]</span> where <span class='code'>d</span> is the number of array elements.


## Remarks

The <span class='code'><a href="sample-0.html">Sample</a></span> function is defined for all read-only texture types, including
<span class='code'><a href="../texture1d-08.html" class="code_type">Texture1D</a></span>, <span class='code'><a href="../texture2d-08.html" class="code_type">Texture2D</a></span>, <span class='code'><a href="../texture3d-08.html" class="code_type">Texture3D</a></span>, <span class='code'><a href="../texturecube-07.html" class="code_type">TextureCube</a></span>,
<span class='code'><a href="../texture1darray-089.html" class="code_type">Texture1DArray</a></span>, <span class='code'><a href="../texture2darray-089.html" class="code_type">Texture2DArray</a></span> and <span class='code'><a href="../texturecubearray-07b.html" class="code_type">TextureCubeArray</a></span>.

This function requires the implicit sampling derivatives, which are always available in the fragment stage. In other stages, the derivatives
are enabled on the target using the appropriate target extensions as necessary. It is an error to use this function when
implicit derivatives cannot be enabled. See also capability <span class='code'>GL_NV_compute_shader_derivatives</span>.

This function is not available for read-write and write-only texture types.

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

Requires capability: `spvSparseResidency`.

### Capability Set 4

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



## See Also
<span class='code'><a href="samplebias-06.html">SampleBias</a></span>, <span class='code'><a href="samplelevel-06.html">SampleLevel</a></span>, <span class='code'><a href="samplelevelzero-06b.html">SampleLevelZero</a></span>, <span class='code'><a href="samplegrad-06.html">SampleGrad</a></span>, <span class='code'><a href="samplecmp-06.html">SampleCmp</a></span>, <span class='code'><a href="samplecmplevelzero-069e.html">SampleCmpLevelZero</a></span>, <span class='code'><a href="samplecmplevel-069.html">SampleCmpLevel</a></span>, <span class='code'><a href="samplecmpbias-069.html">SampleCmpBias</a></span>, <span class='code'><a href="samplecmpgrad-069.html">SampleCmpGrad</a></span>.


