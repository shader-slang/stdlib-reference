---
layout: stdlib-reference
---

# typealias WTexture1DArray\<T, sampleCount:int, format:int\>

## Description

Represents a handle to a write-only 1D texture array.

## Signature

<pre>
<span class='code_keyword'>typealias</span> <a href="/stdlib-reference/types/wtexture1darray-019a" class="code_type">WTexture1DArray</a>&lt;T, sampleCount:<span class="code_keyword">int</span>, format:<span class="code_keyword">int</span>&gt; = 
    <a href="/stdlib-reference/types/0texture-01/index" class="code_type">_Texture</a>&lt;T, <a href="/stdlib-reference/types/0_shape1d-028/index" class="code_type">__Shape1D</a>, 1, 0, sampleCount, 2, 0, 0, format&gt;;
</pre>

## Generic Parameters

#### T: [ITexelElement](/stdlib-reference/interfaces/itexelelement-016/index) = [vector](/stdlib-reference/types/vector/index)\<float, 4\> {#typeparam-T}
The texel type of the texture.

#### sampleCount  : int = 0 {#decl-sampleCount}
The number of samples in the texture, when the texture is multisampled.

#### format  : int = 0 {#decl-format}
The storage format of the texture.


## See also

Please refer to <span class='code'><a href="/stdlib-reference/types/0texture-01/index" class="code_type">_Texture</a></span> for more information about texture types.


