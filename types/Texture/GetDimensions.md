---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.GetDimensions

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape1D/index" class="code_type">__Shape1D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape1D/index" class="code_type">__Shape1D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape1D/index" class="code_type">__Shape1D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape1D/index" class="code_type">__Shape1D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape1D/index" class="code_type">__Shape1D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape1D/index" class="code_type">__Shape1D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>elements</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape1D/index" class="code_type">__Shape1D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>elements</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape1D/index" class="code_type">__Shape1D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>elements</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape1D/index" class="code_type">__Shape1D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>elements</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape1D/index" class="code_type">__Shape1D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>elements</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape1D/index" class="code_type">__Shape1D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>elements</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape1D/index" class="code_type">__Shape1D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>height</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>height</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>height</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>sampleCount</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 1;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>sampleCount</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 1;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>sampleCount</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 1;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>elements</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>elements</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>elements</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>elements</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>elements</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>elements</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>elements</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>sampleCount</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 1;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>elements</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>sampleCount</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 1;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>elements</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>sampleCount</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 1;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>depth</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape3D/index" class="code_type">__Shape3D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>depth</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape3D/index" class="code_type">__Shape3D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>depth</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape3D/index" class="code_type">__Shape3D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>depth</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape3D/index" class="code_type">__Shape3D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>depth</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape3D/index" class="code_type">__Shape3D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>depth</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/Shape3D/index" class="code_type">__Shape3D</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>height</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeCube/index" class="code_type">__ShapeCube</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeCube/index" class="code_type">__ShapeCube</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>height</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeCube/index" class="code_type">__ShapeCube</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeCube/index" class="code_type">__ShapeCube</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>height</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeCube/index" class="code_type">__ShapeCube</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeCube/index" class="code_type">__ShapeCube</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>elements</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeCube/index" class="code_type">__ShapeCube</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>elements</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeCube/index" class="code_type">__ShapeCube</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>elements</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeCube/index" class="code_type">__ShapeCube</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>elements</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeCube/index" class="code_type">__ShapeCube</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>elements</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeCube/index" class="code_type">__ShapeCube</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>mipLevel</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>width</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>height</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>elements</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>numberOfLevels</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeCube/index" class="code_type">__ShapeCube</a>
    <span class='code_keyword'>where</span> isArray == 1
    <span class='code_keyword'>where</span> isMS == 0;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>dim</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeBuffer/index" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> sampleCount == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isShadow == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>dim</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeBuffer/index" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> sampleCount == 0
    <span class='code_keyword'>where</span> access == 1
    <span class='code_keyword'>where</span> isShadow == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;<span class="code_type">T</span>, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/GetDimensions">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>dim</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeBuffer/index" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> sampleCount == 0
    <span class='code_keyword'>where</span> access == 2
    <span class='code_keyword'>where</span> isShadow == 0
    <span class='code_keyword'>where</span> isCombined == 0;

</pre>

## Parameters

#### width  : float
#### mipLevel  : uint
#### numberOfLevels  : float
#### width  : int
#### numberOfLevels  : int
#### width  : uint
#### numberOfLevels  : uint
#### elements  : float
#### elements  : int
#### elements  : uint
#### height  : float
#### height  : int
#### height  : uint
#### sampleCount  : float
#### sampleCount  : int
#### sampleCount  : uint
#### depth  : float
#### depth  : int
#### depth  : uint
#### dim  : uint

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

#### metal
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvImageQuery`, `spvSparseResidency`.


