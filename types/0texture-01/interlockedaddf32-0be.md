---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.InterlockedAddF32

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="interlockedaddf32-0be.html">InterlockedAddF32</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="interlockedaddf32-0be.html#decl-coord" class="code_param">coord</a>,
    <span class="code_keyword">float</span> <a href="interlockedaddf32-0be.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="interlockedaddf32-0be.html#decl-originalValue" class="code_param">originalValue</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape1d2d3d-023agik/index.html" class="code_type">__ITextureShape1D2D3D</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

<span class="code_keyword">float</span> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="interlockedaddf32-0be.html">InterlockedAddF32</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="interlockedaddf32-0be.html#decl-coord" class="code_param">coord</a>,
    <span class="code_keyword">float</span> <a href="interlockedaddf32-0be.html#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape1d2d3d-023agik/index.html" class="code_type">__ITextureShape1D2D3D</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

</pre>

## Parameters

####  <a id="decl-coord"></a>coord  : [vector](../vector/index.html)\<uint, Shape\.dimensions\>
####  <a id="decl-value"></a>value  : float
####  <a id="decl-originalValue"></a>originalValue  : float

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvAtomicFloat32AddEXT`, `spvAtomicFloat32MinMaxEXT`.


