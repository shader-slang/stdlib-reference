---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.Load

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions+1&gt; <a href="load-0.html#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0;

/// Requires Capability Set 2:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions+1&gt; <a href="load-0.html#decl-location" class="code_param">location</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="load-0.html#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0;

/// Requires Capability Set 3:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions+1&gt; <a href="load-0.html#decl-location" class="code_param">location</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="load-0.html#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="load-0.html#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0;

/// Requires Capability Set 2:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">int</span> <a href="load-0.html#decl-sampleIndex" class="code_param">sampleIndex</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0;

/// Requires Capability Set 2:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions+1&gt; <a href="load-0.html#decl-locationAndSampleIndex" class="code_param">locationAndSampleIndex</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0;

/// Requires Capability Set 2:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">int</span> <a href="load-0.html#decl-sampleIndex" class="code_param">sampleIndex</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="load-0.html#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0;

/// Requires Capability Set 3:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">int</span> <a href="load-0.html#decl-sampleIndex" class="code_param">sampleIndex</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>.planeDimensions&gt; <a href="load-0.html#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="load-0.html#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0;

/// Requires Capability Set 3:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 3:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-location" class="code_param">location</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-location" class="code_param">location</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="load-0.html#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 3:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">int</span> <a href="load-0.html#decl-sampleIndex" class="code_param">sampleIndex</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 3:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">int</span> <a href="load-0.html#decl-sampleIndex" class="code_param">sampleIndex</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">int</span> <a href="load-0.html#decl-sampleIndex" class="code_param">sampleIndex</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="load-0.html#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 3:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 3
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 3:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-location" class="code_param">location</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 3
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-location" class="code_param">location</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="index.html#decl-isArray" class="code_var">isArray</a>+<a href="index.html#typeparam-Shape" class="code_type">Shape</a>.dimensions&gt; <a href="load-0.html#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="load-0.html#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> : <a href="../../interfaces/0_itextureshape-023a/index.html" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 3
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 3:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <span class="code_keyword">int</span> <a href="load-0.html#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> == <a href="../0_shapebuffer-027/index.html" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 4:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <span class="code_keyword">int</span> <a href="load-0.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="load-0.html#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> == <a href="../0_shapebuffer-027/index.html" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 3:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <span class="code_keyword">int</span> <a href="load-0.html#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> == <a href="../0_shapebuffer-027/index.html" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 4:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <span class="code_keyword">int</span> <a href="load-0.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="load-0.html#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> == <a href="../0_shapebuffer-027/index.html" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 3:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <span class="code_keyword">int</span> <a href="load-0.html#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> == <a href="../0_shapebuffer-027/index.html" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 2
    <span class='code_keyword'>where</span> <a href="index.html#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

/// Requires Capability Set 4:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">_Texture</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-Shape" class="code_type">Shape</a>, <a href="index.html#decl-isArray" class="code_var">isArray</a>, <a href="index.html#decl-isMS" class="code_var">isMS</a>, <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a>, <a href="index.html#decl-access" class="code_var">access</a>, <a href="index.html#decl-isShadow" class="code_var">isShadow</a>, <a href="index.html#decl-isCombined" class="code_var">isCombined</a>, <a href="index.html#decl-format" class="code_var">format</a>&gt;.<a href="load-0.html">Load</a>(
    <span class="code_keyword">int</span> <a href="load-0.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="load-0.html#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-Shape" class="code_type">Shape</a> == <a href="../0_shapebuffer-027/index.html" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> <a href="index.html#decl-isArray" class="code_var">isArray</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isMS" class="code_var">isMS</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-sampleCount" class="code_var">sampleCount</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-access" class="code_var">access</a> == 2
    <span class='code_keyword'>where</span> <a href="index.html#decl-isShadow" class="code_var">isShadow</a> == 0
    <span class='code_keyword'>where</span> <a href="index.html#decl-isCombined" class="code_var">isCombined</a> == 0;

</pre>

## Parameters

####  <a id="decl-location"></a>location  : [vector](../vector/index)\<int, isArray + Shape\.dimensions + 1\>
####  <a id="decl-offset"></a>offset  : [vector](../vector/index)\<int, Shape\.planeDimensions\>
####  <a id="decl-status"></a>status  : uint
####  <a id="decl-location"></a>location  : [vector](../vector/index)\<int, isArray + Shape\.dimensions\>
####  <a id="decl-sampleIndex"></a>sampleIndex  : int
####  <a id="decl-locationAndSampleIndex"></a>locationAndSampleIndex  : [vector](../vector/index)\<int, isArray + Shape\.dimensions + 1\>
####  <a id="decl-offset"></a>offset  : [vector](../vector/index)\<int, isArray + Shape\.dimensions\>
####  <a id="decl-location"></a>location  : int

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

#### spirv
Available in all stages.


### Capability Set 3

Defined for the following targets:

#### hlsl
Available in all stages.

#### spirv
Available in all stages.


### Capability Set 4

Defined for the following targets:

#### hlsl
Available in all stages.



