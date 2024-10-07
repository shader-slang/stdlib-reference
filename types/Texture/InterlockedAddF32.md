---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.InterlockedAddF32

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/InterlockedAddF32">InterlockedAddF32</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="/stdlib-reference/types/Texture/InterlockedAddF32#decl-coord" class="code_param">coord</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/Texture/InterlockedAddF32#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/types/Texture/InterlockedAddF32#decl-originalValue" class="code_param">originalValue</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape1D2D3D/index" class="code_type">__ITextureShape1D2D3D</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

<span class="code_keyword">float</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/Texture/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/Texture/InterlockedAddF32">InterlockedAddF32</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="/stdlib-reference/types/Texture/InterlockedAddF32#decl-coord" class="code_param">coord</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/Texture/InterlockedAddF32#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-T" class="code_type">T</a> == <span class="code_keyword">float</span>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/ITextureShape1D2D3D/index" class="code_type">__ITextureShape1D2D3D</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-access" class="code_var">access</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Texture/index#decl-isCombined" class="code_var">isCombined</a> == 0;

</pre>

## Parameters

#### coord  : [vector](/stdlib-reference/types/vector/index)\<uint, Shape\.dimensions\> {#decl-coord}
#### value  : float {#decl-value}
#### originalValue  : float {#decl-originalValue}

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


