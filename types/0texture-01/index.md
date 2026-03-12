---
layout: stdlib-reference
---

# struct \_Texture\<T, Shape, int isArray, int isMS, int sampleCount, int access, int isShadow, int isCombined, int format\>

*Conditionally conforms to:* \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>

> #### Internal Feature
> The feature described in this page is marked as an internal implementation detail, and is not intended for use by end-users.
> Users are advised to avoid using this declaration directly, as it may be removed or changed in future releases.

## Description

A parameterized type that represents all flavors of texture types supported by the Slang language.
Please note that this type is not intended to be used directly in user code, and not all combinations
of the generic arguments are valid.
Instead, use the specific texture types such as <span class='code'><a href="../texture1d-08.html" class="code_type">Texture1D</a></span>, <span class='code'><a href="../texture2darray-089.html" class="code_type">Texture2DArray</a></span> and <span class='code'><a href="../sampler2d-08.html" class="code_type">Sampler2D</a></span> etc.
This documentation is provided for reference purposes only.


## Generic Parameters

####  <a id="typeparam-T"></a>T: [ITexelElement](../../interfaces/itexelelement-016/index.html)
The element type of the texture. Must be a scalar or vector type.

####  <a id="typeparam-Shape"></a>Shape: [\_\_ITextureShape](../../interfaces/0_itextureshape-023a/index.html)
The shape of the texture. Must be one of <span class='code'><a href="../0_shape1d-028/index.html" class="code_type">__Shape1D</a></span>, <span class='code'><a href="../0_shape2d-028/index.html" class="code_type">__Shape2D</a></span>, <span class='code'><a href="../0_shape3d-028/index.html" class="code_type">__Shape3D</a></span>, <span class='code'><a href="../0_shapecube-027/index.html" class="code_type">__ShapeCube</a></span> or <span class='code'><a href="../0_shapebuffer-027/index.html" class="code_type">__ShapeBuffer</a></span>.

####  <a id="decl-isArray"></a>isArray  : int
Indicates whether the texture is an array texture.

####  <a id="decl-isMS"></a>isMS  : int
Indicates whether the texture is a multisampled texture.

####  <a id="decl-sampleCount"></a>sampleCount  : int
The number of samples of a multisampled texture.

####  <a id="decl-access"></a>access  : int
The access mode of the texture. 0 for read-only, 1 for read-write, 2 for write-only, 3 for rasterizer-ordered, 4 for feedback.

####  <a id="decl-isShadow"></a>isShadow  : int
Indicates whether the texture is a depth texture (<span class='code'><a href="index.html#decl-isCombined" class="code_var">isCombined</a>==0</span>) or a shadow texture (<span class='code'><a href="index.html#decl-isCombined" class="code_var">isCombined</a>==1</span>).

####  <a id="decl-isCombined"></a>isCombined  : int
Indicates whether the texture is a combined texture-sampler.

####  <a id="decl-format"></a>format  : int
The storage format of the texture. Users should specify the format using an <span class='code'>[<a href="index.html#decl-format" class="code_var">format</a>(&quot;...&quot;)]</span> attribute instead.


## Fields

####  <a id="decl-descriptorAccess"></a>[descriptorAccess](descriptoraccess-a.html) : [DescriptorAccess](../descriptoraccess-0a/index.html) = access
####  <a id="decl-kind"></a>[kind](kind.html) : [DescriptorKind](../descriptorkind-0a/index.html) =\.\.\.

## Methods

* [SampleLevelZero](samplelevelzero-06b)
* [CalculateLevelOfDetail](calculatelevelofdetail-09eg)
* [CalculateLevelOfDetailUnclamped](calculatelevelofdetailunclamped-09egm)
* [Sample](sample-0)
* [SampleBias](samplebias-06)
* [SampleCmp](samplecmp-06)
* [SampleCmpLevelZero](samplecmplevelzero-069e)
* [SampleCmpLevel](samplecmplevel-069)
* [SampleCmpGrad](samplecmpgrad-069)
* [SampleCmpBias](samplecmpbias-069)
* [SampleGrad](samplegrad-06)
* [SampleLevel](samplelevel-06)
* [GetSamplePosition](getsampleposition-039)
* [Gather](gather-0)
* [GatherRed](gatherred-06)
* [GatherGreen](gathergreen-06)
* [GatherBlue](gatherblue-06)
* [GatherAlpha](gatheralpha-06)
* [GatherCmp](gathercmp-06)
* [GatherCmpRed](gathercmpred-069)
* [GatherCmpGreen](gathercmpgreen-069)
* [GatherCmpBlue](gathercmpblue-069)
* [GatherCmpAlpha](gathercmpalpha-069)
* [Store](store-0)
* [GetDimensions](getdimensions-03)
* [Load](load-0)
* [subscript](subscript)
* [WriteSamplerFeedbackLevel](writesamplerfeedbacklevel-05ck)
* [WriteSamplerFeedback](writesamplerfeedback-05c)
* [WriteSamplerFeedbackBias](writesamplerfeedbackbias-05ck)
* [WriteSamplerFeedbackGrad](writesamplerfeedbackgrad-05ck)
* [queryFootprintCoarse](queryfootprintcoarse-5e)
* [queryFootprintCoarseBias](queryfootprintcoarsebias-5ek)
* [queryFootprintCoarseClamp](queryfootprintcoarseclamp-5ek)
* [queryFootprintCoarseBiasClamp](queryfootprintcoarsebiasclamp-5eko)
* [queryFootprintCoarseLevel](queryfootprintcoarselevel-5ek)
* [queryFootprintCoarseGrad](queryfootprintcoarsegrad-5ek)
* [queryFootprintCoarseGradClamp](queryfootprintcoarsegradclamp-5eko)
* [queryFootprintFine](queryfootprintfine-5e)
* [queryFootprintFineBias](queryfootprintfinebias-5ei)
* [queryFootprintFineClamp](queryfootprintfineclamp-5ei)
* [queryFootprintFineBiasClamp](queryfootprintfinebiasclamp-5eim)
* [queryFootprintFineLevel](queryfootprintfinelevel-5ei)
* [queryFootprintFineGrad](queryfootprintfinegrad-5ei)
* [queryFootprintFineGradClamp](queryfootprintfinegradclamp-5eim)
* [InterlockedAddF32](interlockedaddf32-0be)
* [init](init)

## Conditional Conformances

### Conformance to \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>
`_Texture<T, Shape, int isArray, int isMS, int sampleCount, int access, int isShadow, int isCombined, int format>` additionally conforms to `__IDynamicResourceCastable<__DynamicResourceKind.General>` when the following conditions are met:

  * [T](index.html#typeparam-T) : [ITexelElement](../../interfaces/itexelelement-016/index.html)
  * [Shape](index.html#typeparam-Shape) : [\_\_ITextureShape](../../interfaces/0_itextureshape-023a/index.html)
## Remarks


HLSL texture types are implemented as typealiases to the builtin <span class='code'><a href="index.html" class="code_type">_Texture</a></span> type. Users
are advised to use the HLSL-specific texture types instead of <span class='code'><a href="index.html" class="code_type">_Texture</a></span> directly.

For read-write textures, Slang will automatically infer <span class='code'><a href="index.html#decl-format" class="code_var">format</a></span> from <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span>.
To explicitly specify texel storage formats for read-write textures,
use the <span class='code'>[<a href="index.html#decl-format" class="code_var">format</a>(&quot;formatString&quot;)]</span> attribute on the texture parameter declaration.
Allowed <span class='code'>formatString</span> values are:

|id | Format string        | Meaning           |
|:--|:---------------------|:------------------|
|1  |<span class='code'>&quot;rgba32f&quot;</span>           | 4 channel 32-bit floating point texture |
|2  |<span class='code'>&quot;rgba16f&quot;</span>           | 4 channel 16-bit floating point texture |
|3  |<span class='code'>&quot;rg32f&quot;</span>             | 2 channel 32-bit floating point texture |
|4  |<span class='code'>&quot;rg16f&quot;</span>             | 2 channel 16-bit floating point texture |
|5  |<span class='code'>&quot;r11f_g11f_b10f&quot;</span>    | 3 channel 11/11/10-bit floating point texture |
|6  |<span class='code'>&quot;r32f&quot;</span>              | 1 channel 32-bit floating point texture |
|7  |<span class='code'>&quot;r16f&quot;</span>              | 1 channel 16-bit floating point texture |
|8  |<span class='code'>&quot;rgba16&quot;</span>            | 4 channel 16-bit normalized unsigned integer texture |
|9  |<span class='code'>&quot;rgb10_a2&quot;</span>          | 4 channel 10/10/10/2-bit normalized unsigned integer texture |
|10 |<span class='code'>&quot;rgba8&quot;</span>             | 4 channel 8-bit normalized unsigned integer texture |
|11 |<span class='code'>&quot;rg16&quot;</span>              | 2 channel 16-bit normalized unsigned integer texture |
|12 |<span class='code'>&quot;rg8&quot;</span>               | 2 channel 8-bit normalized unsigned integer texture |
|13 |<span class='code'>&quot;r16&quot;</span>               | 1 channel 16-bit normalized unsigned integer texture |
|14 |<span class='code'>&quot;r8&quot;</span>                | 1 channel 8-bit normalized unsigned integer texture |
|15 |<span class='code'>&quot;rgba16_snorm&quot;</span>      | 4 channel 16-bit normalized signed integer texture |
|16 |<span class='code'>&quot;rgba8_snorm&quot;</span>       | 4 channel 8-bit normalized signed integer texture |
|17 |<span class='code'>&quot;rg16_snorm&quot;</span>        | 2 channel 16-bit normalized signed integer texture |
|18 |<span class='code'>&quot;rg8_snorm&quot;</span>         | 2 channel 8-bit normalized signed integer texture |
|19 |<span class='code'>&quot;r16_snorm&quot;</span>         | 1 channel 16-bit normalized signed integer texture |
|20 |<span class='code'>&quot;r8_snorm&quot;</span>          | 1 channel 8-bit normalized signed integer texture |
|21 |<span class='code'>&quot;rgba32i&quot;</span>           | 4 channel 32-bit signed integer texture |
|22 |<span class='code'>&quot;rgba16i&quot;</span>           | 4 channel 16-bit signed integer texture |
|23 |<span class='code'>&quot;rgba8i&quot;</span>            | 4 channel 8-bit signed integer texture |
|24 |<span class='code'>&quot;rg32i&quot;</span>             | 2 channel 32-bit signed integer texture |
|25 |<span class='code'>&quot;rg16i&quot;</span>             | 2 channel 16-bit signed integer texture |
|26 |<span class='code'>&quot;rg8i&quot;</span>              | 2 channel 8-bit signed integer texture |
|27 |<span class='code'>&quot;r32i&quot;</span>              | 1 channel 32-bit signed integer texture |
|28 |<span class='code'>&quot;r16i&quot;</span>              | 1 channel 16-bit signed integer texture |
|29 |<span class='code'>&quot;r8i&quot;</span>               | 1 channel 8-bit signed integer texture |
|30 |<span class='code'>&quot;rgba32ui&quot;</span>          | 4 channel 32-bit unsigned integer texture |
|31 |<span class='code'>&quot;rgba16ui&quot;</span>          | 4 channel 16-bit unsigned integer texture |
|32 |<span class='code'>&quot;rgb10_a2ui&quot;</span>        | 4 channel 10/10/10/2-bit unsigned integer texture |
|33 |<span class='code'>&quot;rgba8ui&quot;</span>           | 4 channel 8-bit unsigned integer texture |
|34 |<span class='code'>&quot;rg32ui&quot;</span>            | 2 channel 32-bit unsigned integer texture |
|35 |<span class='code'>&quot;rg16ui&quot;</span>            | 2 channel 16-bit unsigned integer texture |
|36 |<span class='code'>&quot;rg8ui&quot;</span>             | 2 channel 8-bit unsigned integer texture |
|37 |<span class='code'>&quot;r32ui&quot;</span>             | 1 channel 32-bit unsigned integer texture |
|38 |<span class='code'>&quot;r16ui&quot;</span>             | 1 channel 16-bit unsigned integer texture |
|39 |<span class='code'>&quot;r8ui&quot;</span>              | 1 channel 8-bit unsigned integer texture |
|40 |<span class='code'>&quot;r64ui&quot;</span>             | 1 channel 64-bit unsigned integer texture |
|41 |<span class='code'>&quot;r64i&quot;</span>              | 1 channel 64-bit signed integer texture |

When targeting Vulkan, a combined-texture-sampler type (<span class='code'><a href="index.html#decl-isCombined" class="code_var">isCombined</a>==1</span>) translates to a <span class='code'>OpTypeSampledImage</span> type in SPIR-V.
For other targets, the combined-texture-sampler type is translated to a pair of a <span class='code'>Texture</span> and <span class='code'><a href="../samplerstate-07/index.html" class="code_type">SamplerState</a></span>.

The defined texture types and their backend support:

| Type                              | Cuda | GLSL core version / extension         | HLSL   | Metal/macOS | SPIR-V | WGSL |
|:----------------------------------|:-----|:--------------------------------------|:-------|:------------|:-------|:-----|
| <span class='code'><a href="../depthtexture1d-05d.html" class="code_type">DepthTexture1D</a></span>                  |      | 110                                   | SM 4.0 | -           |        | -    |
| <span class='code'><a href="../depthtexture1darray-05de.html" class="code_type">DepthTexture1DArray</a></span>             |      | 130 / EXT_texture_array               | SM 4.0 | -           |        | -    |
| <span class='code'><a href="../depthtexture2d-05d.html" class="code_type">DepthTexture2D</a></span>                  |      | 110                                   | SM 4.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../depthtexture2darray-05de.html" class="code_type">DepthTexture2DArray</a></span>             |      | 130 / EXT_texture_array               | SM 4.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../depthtexture2dms-05def.html" class="code_type">DepthTexture2DMS</a></span>                |      | -                                     | SM 4.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../depthtexture2dmsarray-05defg.html" class="code_type">DepthTexture2DMSArray</a></span>           |      | -                                     | SM 4.0 | 2.0         |        | -    |
| <span class='code'><a href="../depthtexture3d-05d.html" class="code_type">DepthTexture3D</a></span>                  |      | -                                     | -      | -           |        | -    |
| <span class='code'><a href="../depthtexturecube-05c.html" class="code_type">DepthTextureCube</a></span>                |      | 110                                   | SM 4.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../depthtexturecubearray-05cg.html" class="code_type">DepthTextureCubeArray</a></span>           |      | 400 / ARB_texture_cube_map_array      | SM 4.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../feedbacktexture2d-08g.html" class="code_type">FeedbackTexture2D</a></span>               |      | -                                     | SM 6.5 | -           |        | -    |
| <span class='code'><a href="../feedbacktexture2darray-08gh.html" class="code_type">FeedbackTexture2DArray</a></span>          |      | -                                     | SM 6.5 | -           |        | -    |
| <span class='code'><a href="../rwtexture1d-012a.html" class="code_type">RWTexture1D</a></span>                     |      | 420 / ARB_shader_image_load_store     | SM 5.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../rwtexture1darray-012ab.html" class="code_type">RWTexture1DArray</a></span>                |      | 420 / ARB_shader_image_load_store     | SM 5.0 | 1.0         |        | -    |
| <span class='code'><a href="../rwtexture2d-012a.html" class="code_type">RWTexture2D</a></span>                     |      | 420 / ARB_shader_image_load_store     | SM 5.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../rwtexture2darray-012ab.html" class="code_type">RWTexture2DArray</a></span>                |      | 420 / ARB_shader_image_load_store     | SM 5.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../rwtexture2dms-012abc.html" class="code_type">RWTexture2DMS</a></span>                   |      | 420 / ARB_shader_image_load_store     | SM 6.7 | -           |        | -    |
| <span class='code'><a href="../rwtexture2dmsarray-012abcd.html" class="code_type">RWTexture2DMSArray</a></span>              |      | 420 / ARB_shader_image_load_store     | SM 6.7 | -           |        | -    |
| <span class='code'><a href="../rwtexture3d-012a.html" class="code_type">RWTexture3D</a></span>                     |      | 420 / ARB_shader_image_load_store     | SM 5.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../rasterizerorderedtexture1d-0ahp.html" class="code_type">RasterizerOrderedTexture1D</a></span>      |      | none / ARB_fragment_shader_interlock  | SM 5.1 | 2.0         |        | -    |
| <span class='code'><a href="../rasterizerorderedtexture1darray-0ahpq.html" class="code_type">RasterizerOrderedTexture1DArray</a></span> |      | none / ARB_fragment_shader_interlock  | SM 5.1 | 2.0         |        | -    |
| <span class='code'><a href="../rasterizerorderedtexture2d-0ahp.html" class="code_type">RasterizerOrderedTexture2D</a></span>      |      | none / ARB_fragment_shader_interlock  | SM 5.1 | 2.0         |        | -    |
| <span class='code'><a href="../rasterizerorderedtexture2darray-0ahpq.html" class="code_type">RasterizerOrderedTexture2DArray</a></span> |      | none / ARB_fragment_shader_interlock  | SM 5.1 | 2.0         |        | -    |
| <span class='code'><a href="../rasterizerorderedtexture3d-0ahp.html" class="code_type">RasterizerOrderedTexture3D</a></span>      |      | none / ARB_fragment_shader_interlock  | SM 5.1 | 2.0         |        | -    |
| <span class='code'><a href="../texture1d-08.html" class="code_type">Texture1D</a></span>                       |      | 110                                   | SM 4.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../texture1darray-089.html" class="code_type">Texture1DArray</a></span>                  |      | 130 / EXT_texture_array               | SM 4.0 | 1.0         |        | -    |
| <span class='code'><a href="../texture2d-08.html" class="code_type">Texture2D</a></span>                       |      | 110                                   | SM 4.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../texture2darray-089.html" class="code_type">Texture2DArray</a></span>                  |      | 130 / EXT_texture_array               | SM 4.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../texture2dms-089a.html" class="code_type">Texture2DMS</a></span>                     |      | 150(*)                                | SM 4.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../texture2dmsarray-089ab.html" class="code_type">Texture2DMSArray</a></span>                |      | 150(*)                                | SM 4.0 | 2.0         |        | -    |
| <span class='code'><a href="../texture3d-08.html" class="code_type">Texture3D</a></span>                       |      | 110                                   | SM 4.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../texturecube-07.html" class="code_type">TextureCube</a></span>                     |      | 110                                   | SM 4.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../texturecubearray-07b.html" class="code_type">TextureCubeArray</a></span>                |      | 400 / ARB_texture_cube_map_array      | SM 4.0 | 1.0         |        | 1.0  |
| <span class='code'><a href="../wtexture1d-019.html" class="code_type">WTexture1D</a></span>                      |      | 420 / ARB_shader_image_load_store     | -      | 1.0         |        | 1.0  |
| <span class='code'><a href="../wtexture1darray-019a.html" class="code_type">WTexture1DArray</a></span>                 |      | 420 / ARB_shader_image_load_store     | -      | 1.0         |        | -    |
| <span class='code'><a href="../wtexture2d-019.html" class="code_type">WTexture2D</a></span>                      |      | 420 / ARB_shader_image_load_store     | -      | 1.0         |        | 1.0  |
| <span class='code'><a href="../wtexture2darray-019a.html" class="code_type">WTexture2DArray</a></span>                 |      | 420 / ARB_shader_image_load_store     | -      | 1.0         |        | 1.0  |
| <span class='code'><a href="../wtexture3d-019.html" class="code_type">WTexture3D</a></span>                      |      | 420 / ARB_shader_image_load_store     | -      | 1.0         |        | 1.0  |

(*) Usable only via combined texture-sampler types.

The combined texture-sampler types and their backend support:

| Type                              | Cuda | GLSL | HLSL   | Metal/macOS | SPIR-V | WGSL |
|:----------------------------------|:-----|:-----|:-------|:------------|:-------|:-----|
| <span class='code'><a href="../sampler1dshadow-089.html" class="code_type">Sampler1DShadow</a></span>                 |      |      |        |             |        |      |
| <span class='code'><a href="../sampler1darrayshadow-089e.html" class="code_type">Sampler1DArrayShadow</a></span>            |      |      |        |             |        |      |
| <span class='code'><a href="../sampler2dshadow-089.html" class="code_type">Sampler2DShadow</a></span>                 |      |      |        |             |        |      |
| <span class='code'><a href="../sampler2darrayshadow-089e.html" class="code_type">Sampler2DArrayShadow</a></span>            |      |      |        |             |        |      |
| <span class='code'><a href="../sampler2dmsshadow-089ab.html" class="code_type">Sampler2DMSShadow</a></span>               |      |      |        |             |        |      |
| <span class='code'><a href="../sampler2dmsarrayshadow-089abg.html" class="code_type">Sampler2DMSArrayShadow</a></span>          |      |      |        |             |        |      |
| <span class='code'><a href="../sampler3dshadow-089.html" class="code_type">Sampler3DShadow</a></span>                 |      |      |        |             |        |      |
| <span class='code'><a href="../samplercubeshadow-07b.html" class="code_type">SamplerCubeShadow</a></span>               |      |      |        |             |        |      |
| <span class='code'><a href="../samplercubearrayshadow-07bg.html" class="code_type">SamplerCubeArrayShadow</a></span>          |      |      |        |             |        |      |
| <span class='code'><a href="../rwsampler1d-012a.html" class="code_type">RWSampler1D</a></span>                     |      |      |        |             |        |      |
| <span class='code'><a href="../rwsampler1darray-012ab.html" class="code_type">RWSampler1DArray</a></span>                |      |      |        |             |        |      |
| <span class='code'><a href="../rwsampler2d-012a.html" class="code_type">RWSampler2D</a></span>                     |      |      |        |             |        |      |
| <span class='code'><a href="../rwsampler2darray-012ab.html" class="code_type">RWSampler2DArray</a></span>                |      |      |        |             |        |      |
| <span class='code'><a href="../rwsampler2dms-012abc.html" class="code_type">RWSampler2DMS</a></span>                   |      |      |        |             |        |      |
| <span class='code'><a href="../rwsampler2dmsarray-012abcd.html" class="code_type">RWSampler2DMSArray</a></span>              |      |      |        |             |        |      |
| <span class='code'><a href="../rwsampler3d-012a.html" class="code_type">RWSampler3D</a></span>                     |      |      |        |             |        |      |
| <span class='code'><a href="../rasterizerorderedsampler1d-0ahp.html" class="code_type">RasterizerOrderedSampler1D</a></span>      |      |      |        |             |        |      |
| <span class='code'><a href="../rasterizerorderedsampler1darray-0ahpq.html" class="code_type">RasterizerOrderedSampler1DArray</a></span> |      |      |        |             |        |      |
| <span class='code'><a href="../rasterizerorderedsampler2d-0ahp.html" class="code_type">RasterizerOrderedSampler2D</a></span>      |      |      |        |             |        |      |
| <span class='code'><a href="../rasterizerorderedsampler2darray-0ahpq.html" class="code_type">RasterizerOrderedSampler2DArray</a></span> |      |      |        |             |        |      |
| <span class='code'><a href="../rasterizerorderedsampler3d-0ahp.html" class="code_type">RasterizerOrderedSampler3D</a></span>      |      |      |        |             |        |      |
| <span class='code'><a href="../sampler1d-08.html" class="code_type">Sampler1D</a></span>                       |      |      |        |             |        |      |
| <span class='code'><a href="../sampler1darray-089.html" class="code_type">Sampler1DArray</a></span>                  |      |      |        |             |        |      |
| <span class='code'><a href="../sampler2d-08.html" class="code_type">Sampler2D</a></span>                       |      |      |        |             |        |      |
| <span class='code'><a href="../sampler2darray-089.html" class="code_type">Sampler2DArray</a></span>                  |      |      |        |             |        |      |
| <span class='code'><a href="../sampler2dms-089a.html" class="code_type">Sampler2DMS</a></span>                     |      |      |        |             |        |      |
| <span class='code'><a href="../sampler2dmsarray-089ab.html" class="code_type">Sampler2DMSArray</a></span>                |      |      |        |             |        |      |
| <span class='code'><a href="../sampler3d-08.html" class="code_type">Sampler3D</a></span>                       |      |      |        |             |        |      |
| <span class='code'><a href="../samplercube-07.html" class="code_type">SamplerCube</a></span>                     |      |      |        |             |        |      |
| <span class='code'><a href="../samplercubearray-07b.html" class="code_type">SamplerCubeArray</a></span>                |      |      |        |             |        |      |
| <span class='code'><a href="../wsampler1d-019.html" class="code_type">WSampler1D</a></span>                      |      |      |        |             |        |      |
| <span class='code'><a href="../wsampler1darray-019a.html" class="code_type">WSampler1DArray</a></span>                 |      |      |        |             |        |      |
| <span class='code'><a href="../wsampler2d-019.html" class="code_type">WSampler2D</a></span>                      |      |      |        |             |        |      |
| <span class='code'><a href="../wsampler2darray-019a.html" class="code_type">WSampler2DArray</a></span>                 |      |      |        |             |        |      |
| <span class='code'><a href="../wsampler3d-019.html" class="code_type">WSampler3D</a></span>                      |      |      |        |             |        |      |


## See also

<span class='code'><a href="../texture1d-08.html" class="code_type">Texture1D</a></span>, <span class='code'><a href="../texture2d-08.html" class="code_type">Texture2D</a></span>, <span class='code'><a href="../texture3d-08.html" class="code_type">Texture3D</a></span>, <span class='code'><a href="../texturecube-07.html" class="code_type">TextureCube</a></span>, <span class='code'><a href="../texture1darray-089.html" class="code_type">Texture1DArray</a></span>,
<span class='code'><a href="../texture2darray-089.html" class="code_type">Texture2DArray</a></span>, <span class='code'><a href="../texturecubearray-07b.html" class="code_type">TextureCubeArray</a></span>, <span class='code'><a href="../sampler1d-08.html" class="code_type">Sampler1D</a></span>, <span class='code'><a href="../sampler2d-08.html" class="code_type">Sampler2D</a></span>, <span class='code'><a href="../sampler3d-08.html" class="code_type">Sampler3D</a></span>, <span class='code'><a href="../samplercube-07.html" class="code_type">SamplerCube</a></span>, <span class='code'><a href="../sampler1darray-089.html" class="code_type">Sampler1DArray</a></span>, <span class='code'><a href="../sampler2darray-089.html" class="code_type">Sampler2DArray</a></span>, <span class='code'><a href="../samplercubearray-07b.html" class="code_type">SamplerCubeArray</a></span>,
<span class='code'><a href="../texture2dms-089a.html" class="code_type">Texture2DMS</a></span>, <span class='code'><a href="../texture2dmsarray-089ab.html" class="code_type">Texture2DMSArray</a></span>, <span class='code'><a href="../rwtexture1d-012a.html" class="code_type">RWTexture1D</a></span>, <span class='code'><a href="../rwtexture2d-012a.html" class="code_type">RWTexture2D</a></span>, <span class='code'><a href="../rwtexture3d-012a.html" class="code_type">RWTexture3D</a></span>, <span class='code'><a href="../rwtexture1darray-012ab.html" class="code_type">RWTexture1DArray</a></span>, <span class='code'><a href="../rwtexture2darray-012ab.html" class="code_type">RWTexture2DArray</a></span>,
<span class='code'><a href="../rwtexture2dms-012abc.html" class="code_type">RWTexture2DMS</a></span>, <span class='code'><a href="../rwtexture2dmsarray-012abcd.html" class="code_type">RWTexture2DMSArray</a></span>, <span class='code'><a href="../buffer-0.html" class="code_type">Buffer</a></span>, <span class='code'><a href="../rwbuffer-012.html" class="code_type">RWBuffer</a></span>, <span class='code'><a href="../feedbacktexture2d-08g.html" class="code_type">FeedbackTexture2D</a></span>, <span class='code'><a href="../feedbacktexture2darray-08gh.html" class="code_type">FeedbackTexture2DArray</a></span>.


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

CalculateLevelOfDetail <calculatelevelofdetail-09eg>
CalculateLevelOfDetailUnclamped <calculatelevelofdetailunclamped-09egm>
Coords <coords-0>
Footprint <footprint-0>
FootprintGranularity <footprintgranularity-09>
Gather <gather-0>
GatherAlpha <gatheralpha-06>
GatherBlue <gatherblue-06>
GatherCmp <gathercmp-06>
GatherCmpAlpha <gathercmpalpha-069>
GatherCmpBlue <gathercmpblue-069>
GatherCmpGreen <gathercmpgreen-069>
GatherCmpRed <gathercmpred-069>
GatherGreen <gathergreen-06>
GatherRed <gatherred-06>
GetDimensions <getdimensions-03>
GetSamplePosition <getsampleposition-039>
Handle <handle-0>
InterlockedAddF32 <interlockedaddf32-0be>
Load <load-0>
Sample <sample-0>
SampleBias <samplebias-06>
SampleCmp <samplecmp-06>
SampleCmpBias <samplecmpbias-069>
SampleCmpGrad <samplecmpgrad-069>
SampleCmpLevel <samplecmplevel-069>
SampleCmpLevelZero <samplecmplevelzero-069e>
SampleGrad <samplegrad-06>
SampleLevel <samplelevel-06>
SampleLevelZero <samplelevelzero-06b>
Store <store-0>
TextureCoord <texturecoord-07>
WriteSamplerFeedback <writesamplerfeedback-05c>
WriteSamplerFeedbackBias <writesamplerfeedbackbias-05ck>
WriteSamplerFeedbackGrad <writesamplerfeedbackgrad-05ck>
WriteSamplerFeedbackLevel <writesamplerfeedbacklevel-05ck>
descriptorAccess <descriptoraccess-a>
init <init>
kind <kind>
queryFootprintCoarse <queryfootprintcoarse-5e>
queryFootprintCoarseBias <queryfootprintcoarsebias-5ek>
queryFootprintCoarseBiasClamp <queryfootprintcoarsebiasclamp-5eko>
queryFootprintCoarseClamp <queryfootprintcoarseclamp-5ek>
queryFootprintCoarseGrad <queryfootprintcoarsegrad-5ek>
queryFootprintCoarseGradClamp <queryfootprintcoarsegradclamp-5eko>
queryFootprintCoarseLevel <queryfootprintcoarselevel-5ek>
queryFootprintFine <queryfootprintfine-5e>
queryFootprintFineBias <queryfootprintfinebias-5ei>
queryFootprintFineBiasClamp <queryfootprintfinebiasclamp-5eim>
queryFootprintFineClamp <queryfootprintfineclamp-5ei>
queryFootprintFineGrad <queryfootprintfinegrad-5ei>
queryFootprintFineGradClamp <queryfootprintfinegradclamp-5eim>
queryFootprintFineLevel <queryfootprintfinelevel-5ei>
subscript <subscript>
```
RTD-TOC-END -->
