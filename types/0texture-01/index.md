---
layout: stdlib-reference
---

# struct \_Texture\<T, Shape, isArray:int, isMS:int, sampleCount:int, access:int, isShadow:int, isCombined:int, format:int\>

> #### Internal Feature
> The feature described in this page is marked as an internal implementation detail, and is not intended for use by end-users.
> Users are advised to avoid using this declaration directly, as it may be removed or changed in future releases.

## Description

A parameterized type that represents all flavors of texture types supported by the Slang language.
Please note that this type is not intended to be used directly in user code, and not all combinations
of the generic arguments are valid.
Instead, use the specific texture types such as <span class='code'><a href="/stdlib-reference/types/texture1d-08" class="code_type">Texture1D</a></span>, <span class='code'><a href="/stdlib-reference/types/texture2darray-089" class="code_type">Texture2DArray</a></span> and <span class='code'><a href="/stdlib-reference/types/sampler2d-08" class="code_type">Sampler2D</a></span> etc.
This documentation is provided for reference purposes only.


## Generic Parameters

#### T {#typeparam-T}
The element type of the texture. Must be a scalar or vector type.

#### Shape: [\_\_ITextureShape](/stdlib-reference/interfaces/0_itextureshape-023a/index) {#typeparam-Shape}
The shape of the texture. Must be one of <span class='code'><a href="/stdlib-reference/types/0_shape1d-028/index" class="code_type">__Shape1D</a></span>, <span class='code'><a href="/stdlib-reference/types/0_shape2d-028/index" class="code_type">__Shape2D</a></span>, <span class='code'><a href="/stdlib-reference/types/0_shape3d-028/index" class="code_type">__Shape3D</a></span>, <span class='code'><a href="/stdlib-reference/types/0_shapecube-027/index" class="code_type">__ShapeCube</a></span> or <span class='code'><a href="/stdlib-reference/types/0_shapebuffer-027/index" class="code_type">__ShapeBuffer</a></span>.

#### isArray  : int {#decl-isArray}
Indicates whether the texture is an array texture.

#### isMS  : int {#decl-isMS}
Indicates whether the texture is a multisampled texture.

#### sampleCount  : int {#decl-sampleCount}
The number of samples of a multisampled texture.

#### access  : int {#decl-access}
The access mode of the texture. 0 for read-only, 1 for read-write, 2 for rasterizer-ordered, 3 for feedback.

#### isShadow  : int {#decl-isShadow}
Indicates whether the texture is a shadow texture (for combined texture-sampler only).

#### isCombined  : int {#decl-isCombined}
Indicates whether the texture is a combined texture-sampler.

#### format  : int {#decl-format}
The storage format of the texture. Users should specify the format using an <span class='code'>[<a href="/stdlib-reference/types/0texture-01/index#decl-format" class="code_var">format</a>(&quot;...&quot;)]</span> attribute instead.


## Methods

* [CalculateLevelOfDetail](/stdlib-reference/types/0texture-01/calculatelevelofdetail-09eg)
* [CalculateLevelOfDetailUnclamped](/stdlib-reference/types/0texture-01/calculatelevelofdetailunclamped-09egm)
* [Sample](/stdlib-reference/types/0texture-01/sample-0)
* [SampleBias](/stdlib-reference/types/0texture-01/samplebias-06)
* [SampleCmp](/stdlib-reference/types/0texture-01/samplecmp-06)
* [SampleCmpLevelZero](/stdlib-reference/types/0texture-01/samplecmplevelzero-069e)
* [SampleGrad](/stdlib-reference/types/0texture-01/samplegrad-06)
* [SampleLevel](/stdlib-reference/types/0texture-01/samplelevel-06)
* [GetSamplePosition](/stdlib-reference/types/0texture-01/getsampleposition-039)
* [Gather](/stdlib-reference/types/0texture-01/gather-0)
* [GatherRed](/stdlib-reference/types/0texture-01/gatherred-06)
* [GatherGreen](/stdlib-reference/types/0texture-01/gathergreen-06)
* [GatherBlue](/stdlib-reference/types/0texture-01/gatherblue-06)
* [GatherAlpha](/stdlib-reference/types/0texture-01/gatheralpha-06)
* [GatherCmp](/stdlib-reference/types/0texture-01/gathercmp-06)
* [GatherCmpRed](/stdlib-reference/types/0texture-01/gathercmpred-069)
* [GatherCmpGreen](/stdlib-reference/types/0texture-01/gathercmpgreen-069)
* [GatherCmpBlue](/stdlib-reference/types/0texture-01/gathercmpblue-069)
* [GatherCmpAlpha](/stdlib-reference/types/0texture-01/gathercmpalpha-069)
* [Store](/stdlib-reference/types/0texture-01/store-0)
* [GetDimensions](/stdlib-reference/types/0texture-01/getdimensions-03)
* [Load](/stdlib-reference/types/0texture-01/load-0)
* [subscript](/stdlib-reference/types/0texture-01/subscript)
* [WriteSamplerFeedbackLevel](/stdlib-reference/types/0texture-01/writesamplerfeedbacklevel-05ck)
* [WriteSamplerFeedback](/stdlib-reference/types/0texture-01/writesamplerfeedback-05c)
* [WriteSamplerFeedbackBias](/stdlib-reference/types/0texture-01/writesamplerfeedbackbias-05ck)
* [WriteSamplerFeedbackGrad](/stdlib-reference/types/0texture-01/writesamplerfeedbackgrad-05ck)
* [queryFootprintCoarse](/stdlib-reference/types/0texture-01/queryfootprintcoarse-5e)
* [queryFootprintCoarseBias](/stdlib-reference/types/0texture-01/queryfootprintcoarsebias-5ek)
* [queryFootprintCoarseClamp](/stdlib-reference/types/0texture-01/queryfootprintcoarseclamp-5ek)
* [queryFootprintCoarseBiasClamp](/stdlib-reference/types/0texture-01/queryfootprintcoarsebiasclamp-5eko)
* [queryFootprintCoarseLevel](/stdlib-reference/types/0texture-01/queryfootprintcoarselevel-5ek)
* [queryFootprintCoarseGrad](/stdlib-reference/types/0texture-01/queryfootprintcoarsegrad-5ek)
* [queryFootprintCoarseGradClamp](/stdlib-reference/types/0texture-01/queryfootprintcoarsegradclamp-5eko)
* [queryFootprintFine](/stdlib-reference/types/0texture-01/queryfootprintfine-5e)
* [queryFootprintFineBias](/stdlib-reference/types/0texture-01/queryfootprintfinebias-5ei)
* [queryFootprintFineClamp](/stdlib-reference/types/0texture-01/queryfootprintfineclamp-5ei)
* [queryFootprintFineBiasClamp](/stdlib-reference/types/0texture-01/queryfootprintfinebiasclamp-5eim)
* [queryFootprintFineLevel](/stdlib-reference/types/0texture-01/queryfootprintfinelevel-5ei)
* [queryFootprintFineGrad](/stdlib-reference/types/0texture-01/queryfootprintfinegrad-5ei)
* [queryFootprintFineGradClamp](/stdlib-reference/types/0texture-01/queryfootprintfinegradclamp-5eim)
* [InterlockedAddF32](/stdlib-reference/types/0texture-01/interlockedaddf32-0be)

## Remarks


HLSL texture types are implemented as typealiases to the builtin <span class='code'><a href="/stdlib-reference/types/0texture-01/index" class="code_type">_Texture</a></span> type. Users
are advised to use the HLSL-specific texture types instead of <span class='code'><a href="/stdlib-reference/types/0texture-01/index" class="code_type">_Texture</a></span> directly.

For read-write textures, Slang will automatically infer <span class='code'><a href="/stdlib-reference/types/0texture-01/index#decl-format" class="code_var">format</a></span> from <span class='code'><a href="/stdlib-reference/types/0texture-01/index#typeparam-T" class="code_type">T</a></span>.
To explicitly specify texel storage formats for read-write textures,
use the <span class='code'>[<a href="/stdlib-reference/types/0texture-01/index#decl-format" class="code_var">format</a>(&quot;formatString&quot;)]</span> attribute on the texture parameter declaration.
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
|9  |<span class='code'>&quot;rgb10_a2&quot;</span>          | 4 channel 10/10/10/2-bit signed integer texture |
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

When targeting Vulkan, a combined-texture-sampler type (<span class='code'><a href="/stdlib-reference/types/0texture-01/index#decl-isCombined" class="code_var">isCombined</a>==1</span>) translates to a <span class='code'>OpTypeSampledImage</span> type in SPIR-V.
For other targets, the combined-texture-sampler type is translated to a pair of a <span class='code'>Texture</span> and <span class='code'><a href="/stdlib-reference/types/samplerstate-07/index" class="code_type">SamplerState</a></span>.
<span class='code'><a href="/stdlib-reference/types/0texture-01/index#decl-isShadow" class="code_var">isShadow</a></span> is only applicable to combined-texture-sampler types and must be <span class='code'>0</span> for non-combined texture types.

## See also

<span class='code'><a href="/stdlib-reference/types/texture1d-08" class="code_type">Texture1D</a></span>, <span class='code'><a href="/stdlib-reference/types/texture2d-08" class="code_type">Texture2D</a></span>, <span class='code'><a href="/stdlib-reference/types/texture3d-08" class="code_type">Texture3D</a></span>, <span class='code'><a href="/stdlib-reference/types/texturecube-07" class="code_type">TextureCube</a></span>, <span class='code'><a href="/stdlib-reference/types/texture1darray-089" class="code_type">Texture1DArray</a></span>,
<span class='code'><a href="/stdlib-reference/types/texture2darray-089" class="code_type">Texture2DArray</a></span>, <span class='code'><a href="/stdlib-reference/types/texturecubearray-07b" class="code_type">TextureCubeArray</a></span>, <span class='code'><a href="/stdlib-reference/types/sampler1d-08" class="code_type">Sampler1D</a></span>, <span class='code'><a href="/stdlib-reference/types/sampler2d-08" class="code_type">Sampler2D</a></span>, <span class='code'><a href="/stdlib-reference/types/sampler3d-08" class="code_type">Sampler3D</a></span>, <span class='code'><a href="/stdlib-reference/types/samplercube-07" class="code_type">SamplerCube</a></span>, <span class='code'><a href="/stdlib-reference/types/sampler1darray-089" class="code_type">Sampler1DArray</a></span>, <span class='code'><a href="/stdlib-reference/types/sampler2darray-089" class="code_type">Sampler2DArray</a></span>, <span class='code'><a href="/stdlib-reference/types/samplercubearray-07b" class="code_type">SamplerCubeArray</a></span>,
<span class='code'><a href="/stdlib-reference/types/texture2dms-089a" class="code_type">Texture2DMS</a></span>, <span class='code'><a href="/stdlib-reference/types/texture2dmsarray-089ab" class="code_type">Texture2DMSArray</a></span>, <span class='code'><a href="/stdlib-reference/types/rwtexture1d-012a" class="code_type">RWTexture1D</a></span>, <span class='code'><a href="/stdlib-reference/types/rwtexture2d-012a" class="code_type">RWTexture2D</a></span>, <span class='code'><a href="/stdlib-reference/types/rwtexture3d-012a" class="code_type">RWTexture3D</a></span>, <span class='code'><a href="/stdlib-reference/types/rwtexture1darray-012ab" class="code_type">RWTexture1DArray</a></span>, <span class='code'><a href="/stdlib-reference/types/rwtexture2darray-012ab" class="code_type">RWTexture2DArray</a></span>,
<span class='code'><a href="/stdlib-reference/types/rwtexture2dms-012abc" class="code_type">RWTexture2DMS</a></span>, <span class='code'><a href="/stdlib-reference/types/rwtexture2dmsarray-012abcd" class="code_type">RWTexture2DMSArray</a></span>, <span class='code'><a href="/stdlib-reference/types/buffer-0" class="code_type">Buffer</a></span>, <span class='code'><a href="/stdlib-reference/types/rwbuffer-012" class="code_type">RWBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/feedbacktexture2d-08g" class="code_type">FeedbackTexture2D</a></span>, <span class='code'><a href="/stdlib-reference/types/feedbacktexture2darray-08gh" class="code_type">FeedbackTexture2DArray</a></span>.

