---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.InterlockedAddF32

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/InterlockedAddF32">InterlockedAddF32</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, Shape.dimensions&gt; <span class='code_param'>coord</span>,
    <span class="code_keyword">float</span> <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>originalValue</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape1D2D3D/index" class="code_type">__ITextureShape1D2D3D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> sampleCount == 0
    <span class='code_keyword'>where</span> access == 1
    <span class='code_keyword'>where</span> isShadow == 0
    <span class='code_keyword'>where</span> isCombined == 0;

<span class="code_keyword">float</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/InterlockedAddF32">InterlockedAddF32</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, Shape.dimensions&gt; <span class='code_param'>coord</span>,
    <span class="code_keyword">float</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T == <span class="code_keyword">float</span>
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape1D2D3D/index" class="code_type">__ITextureShape1D2D3D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> sampleCount == 0
    <span class='code_keyword'>where</span> access == 1
    <span class='code_keyword'>where</span> isShadow == 0
    <span class='code_keyword'>where</span> isCombined == 0;

</pre>

## Parameters

* `coord`
* `value`
* `originalValue`

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


