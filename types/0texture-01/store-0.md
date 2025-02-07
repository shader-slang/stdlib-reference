---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.Store

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/0texture-01/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/0texture-01/store-0">Store</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/0texture-01/index#decl-isArray" class="code_var">isArray</a>+<a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="/stdlib-reference/types/0texture-01/store-0#decl-location" class="code_param">location</a>,
    <a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/0texture-01/store-0#decl-newValue" class="code_param">newValue</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/itexelelement-016/index" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/0_itextureshape-023a/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#decl-access" class="code_var">access</a> == 1
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#decl-isCombined" class="code_var">isCombined</a> == 0;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/0texture-01/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/0texture-01/store-0">Store</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/0texture-01/index#decl-isArray" class="code_var">isArray</a>+<a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="/stdlib-reference/types/0texture-01/store-0#decl-location" class="code_param">location</a>,
    <a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/0texture-01/store-0#decl-newValue" class="code_param">newValue</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/itexelelement-016/index" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/0_itextureshape-023a/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#decl-access" class="code_var">access</a> == 2
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#decl-isCombined" class="code_var">isCombined</a> == 0;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/0texture-01/index" class="code_type">_Texture</a>&lt;<a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isArray" class="code_var">isArray</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isMS" class="code_var">isMS</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-sampleCount" class="code_var">sampleCount</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-access" class="code_var">access</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isShadow" class="code_var">isShadow</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-isCombined" class="code_var">isCombined</a>, <a href="/stdlib-reference/types/0texture-01/index#decl-format" class="code_var">format</a>&gt;.<a href="/stdlib-reference/types/0texture-01/store-0">Store</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/0texture-01/index#decl-isArray" class="code_var">isArray</a>+<a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="/stdlib-reference/types/0texture-01/store-0#decl-location" class="code_param">location</a>,
    <a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/0texture-01/store-0#decl-newValue" class="code_param">newValue</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/itexelelement-016/index" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#typeparam-Shape" class="code_type">Shape</a> : <a href="/stdlib-reference/interfaces/0_itextureshape-023a/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#decl-access" class="code_var">access</a> == 3
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/0texture-01/index#decl-isCombined" class="code_var">isCombined</a> == 0;

</pre>

## Parameters

#### location  : [vector](/stdlib-reference/types/vector/index)\<uint, isArray + Shape\.dimensions\> {#decl-location}
#### newValue  : [T](/stdlib-reference/types/0texture-01/index#typeparam-T) {#decl-newValue}

