---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.queryFootprintCoarseGrad

## Description

Query the footprint that would be accessed by a texture sampling operation.

This operation queries the footprint that would be accessed
by a comparable call to:

t.SampleGrad(sampler, coords, dx, dy);




## Signature 

<pre>
<a href="../texturefootprint-07/index.html" class="code_type">TextureFootprint</a>&lt;<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="queryfootprintcoarsegrad-5ek.html">queryFootprintCoarseGrad</a>(
    <span class="code_keyword">uint</span> <a href="queryfootprintcoarsegrad-5ek.html#decl-granularity" class="code_param">granularity</a>,
    <a href="../samplerstate-07/index.html" class="code_type">SamplerState</a> <a href="queryfootprintcoarsegrad-5ek.html#decl-sampler" class="code_param">sampler</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="queryfootprintcoarsegrad-5ek.html#decl-coords" class="code_param">coords</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="queryfootprintcoarsegrad-5ek.html#decl-dx" class="code_param">dx</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="queryfootprintcoarsegrad-5ek.html#decl-dy" class="code_param">dy</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

</pre>

## Parameters

####  <a id="decl-granularity"></a>granularity  : uint
####  <a id="decl-sampler"></a>sampler  : [SamplerState](../samplerstate-07/index)
####  <a id="decl-coords"></a>coords  : [vector](../vector/index)\<float, Shape\.dimensions\>
####  <a id="decl-dx"></a>dx  : [vector](../vector/index)\<float, Shape\.dimensions\>
####  <a id="decl-dy"></a>dy  : [vector](../vector/index)\<float, Shape\.dimensions\>

