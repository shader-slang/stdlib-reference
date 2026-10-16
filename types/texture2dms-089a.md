---
layout: stdlib-reference
---

# typealias Texture2DMS\<T, int sampleCount\>

## Description

Represents a handle to a read-only, multisampled 2D texture.

## Signature

<pre>
<span class='code_keyword'>typealias</span> <a href="texture2dms-089a.html" class="code_type">Texture2DMS</a>&lt;T, <span class="code_keyword">int</span> sampleCount&gt; = 
    <a href="0texture-01/index.html" class="code_type">_Texture</a>&lt;T, <a href="0_shape2d-028/index.html" class="code_type">__Shape2D</a>, 0, 1, sampleCount, 0, 0, 0, T.format&gt;;
</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [ITexelElement](../interfaces/itexelelement-016/index.html) = [vector](vector/index.html)\<float, 4\>
The texel type or storage format descriptor of the texture.

####  <a id="decl-sampleCount"></a>sampleCount  : int = 0
The number of samples in the texture, when the texture is multisampled.


## See also

Please refer to <span class='code'><a href="0texture-01/index.html" class="code_type">_Texture</a></span> for more information about texture types.


