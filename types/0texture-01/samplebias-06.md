---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.SampleBias

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="samplebias-06.html">SampleBias</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="samplebias-06.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="samplebias-06.html#decl-bias" class="code_param">bias</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 1:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="samplebias-06.html">SampleBias</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="samplebias-06.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="samplebias-06.html#decl-bias" class="code_param">bias</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="samplebias-06.html#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 2:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="samplebias-06.html">SampleBias</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="samplebias-06.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="samplebias-06.html#decl-bias" class="code_param">bias</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="samplebias-06.html#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">float</span> <a href="samplebias-06.html#decl-clamp" class="code_param">clamp</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="samplebias-06.html#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 1;

/// Requires Capability Set 1:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="samplebias-06.html">SampleBias</a>(
    <a href="../samplerstate-07/index.html" class="code_type">SamplerState</a> <a href="samplebias-06.html#decl-s" class="code_param">s</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="samplebias-06.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="samplebias-06.html#decl-bias" class="code_param">bias</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 1:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="samplebias-06.html">SampleBias</a>(
    <a href="../samplerstate-07/index.html" class="code_type">SamplerState</a> <a href="samplebias-06.html#decl-s" class="code_param">s</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="samplebias-06.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="samplebias-06.html#decl-bias" class="code_param">bias</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="samplebias-06.html#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 2:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="samplebias-06.html">SampleBias</a>(
    <a href="../samplerstate-07/index.html" class="code_type">SamplerState</a> <a href="samplebias-06.html#decl-s" class="code_param">s</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="samplebias-06.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">float</span> <a href="samplebias-06.html#decl-bias" class="code_param">bias</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="samplebias-06.html#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">float</span> <a href="samplebias-06.html#decl-clamp" class="code_param">clamp</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="samplebias-06.html#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

</pre>

## Parameters

####  <a id="decl-location"></a>location  : [vector](../vector/index)\<float, isArray + Shape\.dimensions\>
####  <a id="decl-bias"></a>bias  : float
####  <a id="decl-offset"></a>offset  : [vector](../vector/index)\<int, Shape\.planeDimensions\>
####  <a id="decl-clamp"></a>clamp  : float
####  <a id="decl-status"></a>status  : uint
####  <a id="decl-s"></a>s  : [SamplerState](../samplerstate-07/index)

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


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `SPV_KHR_non_semantic_info`, `SPV_GOOGLE_user_type`, `spvDerivativeControl`, `spvImageQuery`, `spvImageGatherExtended`, `spvSparseResidency`, `spvMinLod`, `spvFragmentFullyCoveredEXT`.


