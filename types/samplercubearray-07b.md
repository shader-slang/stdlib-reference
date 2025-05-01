---
layout: stdlib-reference
---

# typealias SamplerCubeArray\<T, sampleCount:int, format:int\>

## Description

Represents a handle to a read-only Cube combined texture-sampler array.

## Signature

<pre>
<span class='code_keyword'>typealias</span> <a href="samplercubearray-07b.html" class="code_type">SamplerCubeArray</a>&lt;T, sampleCount:<span class="code_keyword">int</span>, format:<span class="code_keyword">int</span>&gt; = 
    <a href="0texture-01/index.html" class="code_type">_Texture</a>&lt;T, <a href="0_shapecube-027/index.html" class="code_type">__ShapeCube</a>, 1, 0, sampleCount, 0, 0, 1, format&gt;;
</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [ITexelElement](../interfaces/itexelelement-016/index) = [vector](vector/index)\<float, 4\>
The texel type of the texture.

####  <a id="decl-sampleCount"></a>sampleCount  : int = 0
The number of samples in the texture, when the texture is multisampled.

####  <a id="decl-format"></a>format  : int = 0
The storage format of the texture.


## See also

Please refer to <span class='code'><a href="0texture-01/index.html" class="code_type">_Texture</a></span> for more information about texture types.


