---
layout: stdlib-reference
---

# \_Texture\<T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format\>\.Load

## Signature 

<pre>
/// Requires Capability Set 1:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions+1&gt; <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0;

/// Requires Capability Set 2:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions+1&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions+1&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 0;

/// Requires Capability Set 1:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <span class="code_keyword">int</span> <span class='code_param'>sampleIndex</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 1
    <span class='code_keyword'>where</span> access == 0;

/// Requires Capability Set 2:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions+1&gt; <span class='code_param'>locationAndSampleIndex</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 1
    <span class='code_keyword'>where</span> access == 0;

/// Requires Capability Set 2:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <span class="code_keyword">int</span> <span class='code_param'>sampleIndex</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 1
    <span class='code_keyword'>where</span> access == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <span class="code_keyword">int</span> <span class='code_param'>sampleIndex</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, Shape.planeDimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 1
    <span class='code_keyword'>where</span> access == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 1
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 1
    <span class='code_keyword'>where</span> isCombined == 0;

T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 1
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <span class="code_keyword">int</span> <span class='code_param'>sampleIndex</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 1
    <span class='code_keyword'>where</span> access == 1
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <span class="code_keyword">int</span> <span class='code_param'>sampleIndex</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 1
    <span class='code_keyword'>where</span> access == 1
    <span class='code_keyword'>where</span> isCombined == 0;

T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <span class="code_keyword">int</span> <span class='code_param'>sampleIndex</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 1
    <span class='code_keyword'>where</span> access == 1
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 2
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 2
    <span class='code_keyword'>where</span> isCombined == 0;

T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>location</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, isArray+Shape.dimensions&gt; <span class='code_param'>offset</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> Shape : <a href="/stdlib-reference/interfaces/ITextureShape/index" class="code_type">__ITextureShape</a>
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> access == 2
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <span class="code_keyword">int</span> <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeBuffer/index" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> sampleCount == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isShadow == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <span class="code_keyword">int</span> <span class='code_param'>location</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeBuffer/index" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> sampleCount == 0
    <span class='code_keyword'>where</span> access == 0
    <span class='code_keyword'>where</span> isShadow == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <span class="code_keyword">int</span> <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeBuffer/index" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> sampleCount == 0
    <span class='code_keyword'>where</span> access == 1
    <span class='code_keyword'>where</span> isShadow == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <span class="code_keyword">int</span> <span class='code_param'>location</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeBuffer/index" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> sampleCount == 0
    <span class='code_keyword'>where</span> access == 1
    <span class='code_keyword'>where</span> isShadow == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <span class="code_keyword">int</span> <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeBuffer/index" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> sampleCount == 0
    <span class='code_keyword'>where</span> access == 2
    <span class='code_keyword'>where</span> isShadow == 0
    <span class='code_keyword'>where</span> isCombined == 0;

/// Requires Capability Set 3:
T <a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a>&lt;T, Shape, isArray, isMS, sampleCount, access, isShadow, isCombined, format&gt;.<a href="/stdlib-reference/types/Texture/Load">Load</a>(
    <span class="code_keyword">int</span> <span class='code_param'>location</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> Shape == <a href="/stdlib-reference/types/ShapeBuffer/index" class="code_type">__ShapeBuffer</a>
    <span class='code_keyword'>where</span> isArray == 0
    <span class='code_keyword'>where</span> isMS == 0
    <span class='code_keyword'>where</span> sampleCount == 0
    <span class='code_keyword'>where</span> access == 2
    <span class='code_keyword'>where</span> isShadow == 0
    <span class='code_keyword'>where</span> isCombined == 0;

</pre>

## Parameters

* `location`
* `offset`
* `status`
* `sampleIndex`
* `locationAndSampleIndex`

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

#### cpp
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvImageQuery`, `spvSparseResidency`.

### Capability Set 3

Defined for the following targets:

#### hlsl
Available in all stages.



