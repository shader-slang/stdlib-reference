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
Instead, use the specific texture types such as <span class='code'><a href="/stdlib-reference/types/Texture1D" class="code_type">Texture1D</a></span>, <span class='code'><a href="/stdlib-reference/types/Texture2DArray" class="code_type">Texture2DArray</a></span> and <span class='code'><a href="/stdlib-reference/types/Sampler2D" class="code_type">Sampler2D</a></span> etc.
This documentation is provided for reference purposes only.

## Generic Parameters

#### T
The element type of the texture. Must be a scalar or vector type.

#### Shape: [\_\_ITextureShape](/stdlib-reference/interfaces/ITextureShape/index)
The shape of the texture. Must be one of <span class='code'><a href="/stdlib-reference/types/Shape1D/index" class="code_type">__Shape1D</a></span>, <span class='code'><a href="/stdlib-reference/types/Shape2D/index" class="code_type">__Shape2D</a></span>, <span class='code'><a href="/stdlib-reference/types/Shape3D/index" class="code_type">__Shape3D</a></span>, <span class='code'><a href="/stdlib-reference/types/ShapeCube/index" class="code_type">__ShapeCube</a></span> or <span class='code'><a href="/stdlib-reference/types/ShapeBuffer/index" class="code_type">__ShapeBuffer</a></span>.

#### isArray  : int
Indicates whether the texture is an array texture.

#### isMS  : int
Indicates whether the texture is a multisampled texture.

#### sampleCount  : int
The number of samples of a multisampled texture.

#### access  : int
The access mode of the texture. 0 for read-only, 1 for read-write, 2 for rasterizer-ordered, 3 for feedback.

#### isShadow  : int
Indicates whether the texture is a shadow texture (for combined texture-sampler only).

#### isCombined  : int
Indicates whether the texture is a combined texture-sampler.

#### format  : int
The storage format of the texture. Users should specify the format using an <span class='code'>[format(...)]</span> attribute instead.


## Methods

* [CalculateLevelOfDetail](/stdlib-reference/types/Texture/CalculateLevelOfDetail)
* [CalculateLevelOfDetailUnclamped](/stdlib-reference/types/Texture/CalculateLevelOfDetailUnclamped)
* [Sample](/stdlib-reference/types/Texture/Sample)
* [SampleBias](/stdlib-reference/types/Texture/SampleBias)
* [SampleCmp](/stdlib-reference/types/Texture/SampleCmp)
* [SampleCmpLevelZero](/stdlib-reference/types/Texture/SampleCmpLevelZero)
* [SampleGrad](/stdlib-reference/types/Texture/SampleGrad)
* [SampleLevel](/stdlib-reference/types/Texture/SampleLevel)
* [GetSamplePosition](/stdlib-reference/types/Texture/GetSamplePosition)
* [Gather](/stdlib-reference/types/Texture/Gather)
* [GatherRed](/stdlib-reference/types/Texture/GatherRed)
* [GatherGreen](/stdlib-reference/types/Texture/GatherGreen)
* [GatherBlue](/stdlib-reference/types/Texture/GatherBlue)
* [GatherAlpha](/stdlib-reference/types/Texture/GatherAlpha)
* [GatherCmp](/stdlib-reference/types/Texture/GatherCmp)
* [GatherCmpRed](/stdlib-reference/types/Texture/GatherCmpRed)
* [GatherCmpGreen](/stdlib-reference/types/Texture/GatherCmpGreen)
* [GatherCmpBlue](/stdlib-reference/types/Texture/GatherCmpBlue)
* [GatherCmpAlpha](/stdlib-reference/types/Texture/GatherCmpAlpha)
* [GetDimensions](/stdlib-reference/types/Texture/GetDimensions)
* [Load](/stdlib-reference/types/Texture/Load)
* [subscript](/stdlib-reference/types/Texture/subscript)
* [WriteSamplerFeedbackLevel](/stdlib-reference/types/Texture/WriteSamplerFeedbackLevel)
* [WriteSamplerFeedback](/stdlib-reference/types/Texture/WriteSamplerFeedback)
* [WriteSamplerFeedbackBias](/stdlib-reference/types/Texture/WriteSamplerFeedbackBias)
* [WriteSamplerFeedbackGrad](/stdlib-reference/types/Texture/WriteSamplerFeedbackGrad)
* [queryFootprintCoarse](/stdlib-reference/types/Texture/queryFootprintCoarse)
* [queryFootprintCoarseBias](/stdlib-reference/types/Texture/queryFootprintCoarseBias)
* [queryFootprintCoarseClamp](/stdlib-reference/types/Texture/queryFootprintCoarseClamp)
* [queryFootprintCoarseBiasClamp](/stdlib-reference/types/Texture/queryFootprintCoarseBiasClamp)
* [queryFootprintCoarseLevel](/stdlib-reference/types/Texture/queryFootprintCoarseLevel)
* [queryFootprintCoarseGrad](/stdlib-reference/types/Texture/queryFootprintCoarseGrad)
* [queryFootprintCoarseGradClamp](/stdlib-reference/types/Texture/queryFootprintCoarseGradClamp)
* [queryFootprintFine](/stdlib-reference/types/Texture/queryFootprintFine)
* [queryFootprintFineBias](/stdlib-reference/types/Texture/queryFootprintFineBias)
* [queryFootprintFineClamp](/stdlib-reference/types/Texture/queryFootprintFineClamp)
* [queryFootprintFineBiasClamp](/stdlib-reference/types/Texture/queryFootprintFineBiasClamp)
* [queryFootprintFineLevel](/stdlib-reference/types/Texture/queryFootprintFineLevel)
* [queryFootprintFineGrad](/stdlib-reference/types/Texture/queryFootprintFineGrad)
* [queryFootprintFineGradClamp](/stdlib-reference/types/Texture/queryFootprintFineGradClamp)
* [InterlockedAddF32](/stdlib-reference/types/Texture/InterlockedAddF32)

## Remarks


HLSL texture types are implemented as typealiases to the builtin <span class='code'><a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a></span> type. Users
are advised to use the HLSL-specific texture types instead of <span class='code'><a href="/stdlib-reference/types/Texture/index" class="code_type">_Texture</a></span> directly.

For read-write textures, Slang will automatically infer <span class='code'>format</span> from <span class='code'><span class="code_type">T</span></span>.
To explicitly specify texel storage formats for read-write textures,
use the <span class='code'>[format(formatString)]</span> attribute on the texture parameter declaration.
Allowed <span class='code'>formatString</span> values are:

|id | Format string        | Meaning           |
|:--|:---------------------|:------------------|
|1  |<span class='code'>rgba32f</span>           | 4 channel 32-bit floating point texture |
|2  |<span class='code'>rgba16f</span>           | 4 channel 16-bit floating point texture |
|3  |<span class='code'>rg32f</span>             | 2 channel 32-bit floating point texture |
|4  |<span class='code'>rg16f</span>             | 2 channel 16-bit floating point texture |
|5  |<span class='code'>r11f_g11f_b10f</span>    | 3 channel 11/11/10-bit floating point texture |
|6  |<span class='code'>r32f</span>              | 1 channel 32-bit floating point texture |
|7  |<span class='code'>r16f</span>              | 1 channel 16-bit floating point texture |
|8  |<span class='code'>rgba16</span>            | 4 channel 16-bit normalized unsigned integer texture |
|9  |<span class='code'>rgb10_a2</span>          | 4 channel 10/10/10/2-bit signed integer texture |
|10 |<span class='code'>rgba8</span>             | 4 channel 8-bit normalized unsigned integer texture |
|11 |<span class='code'>rg16</span>              | 2 channel 16-bit normalized unsigned integer texture |
|12 |<span class='code'>rg8</span>               | 2 channel 8-bit normalized unsigned integer texture |
|13 |<span class='code'>r16</span>               | 1 channel 16-bit normalized unsigned integer texture |
|14 |<span class='code'>r8</span>                | 1 channel 8-bit normalized unsigned integer texture |
|15 |<span class='code'>rgba16_snorm</span>      | 4 channel 16-bit normalized signed integer texture |
|16 |<span class='code'>rgba8_snorm</span>       | 4 channel 8-bit normalized signed integer texture |
|17 |<span class='code'>rg16_snorm</span>        | 2 channel 16-bit normalized signed integer texture |
|18 |<span class='code'>rg8_snorm</span>         | 2 channel 8-bit normalized signed integer texture |
|19 |<span class='code'>r16_snorm</span>         | 1 channel 16-bit normalized signed integer texture |
|20 |<span class='code'>r8_snorm</span>          | 1 channel 8-bit normalized signed integer texture |
|21 |<span class='code'>rgba32i</span>           | 4 channel 32-bit signed integer texture |
|22 |<span class='code'>rgba16i</span>           | 4 channel 16-bit signed integer texture |
|23 |<span class='code'>rgba8i</span>            | 4 channel 8-bit signed integer texture |
|24 |<span class='code'>rg32i</span>             | 2 channel 32-bit signed integer texture |
|25 |<span class='code'>rg16i</span>             | 2 channel 16-bit signed integer texture |
|26 |<span class='code'>rg8i</span>              | 2 channel 8-bit signed integer texture |
|27 |<span class='code'>r32i</span>              | 1 channel 32-bit signed integer texture |
|28 |<span class='code'>r16i</span>              | 1 channel 16-bit signed integer texture |
|29 |<span class='code'>r8i</span>               | 1 channel 8-bit signed integer texture |
|30 |<span class='code'>rgba32ui</span>          | 4 channel 32-bit unsigned integer texture |
|31 |<span class='code'>rgba16ui</span>          | 4 channel 16-bit unsigned integer texture |
|32 |<span class='code'>rgb10_a2ui</span>        | 4 channel 10/10/10/2-bit unsigned integer texture |
|33 |<span class='code'>rgba8ui</span>           | 4 channel 8-bit unsigned integer texture |
|34 |<span class='code'>rg32ui</span>            | 2 channel 32-bit unsigned integer texture |
|35 |<span class='code'>rg16ui</span>            | 2 channel 16-bit unsigned integer texture |
|36 |<span class='code'>rg8ui</span>             | 2 channel 8-bit unsigned integer texture |
|37 |<span class='code'>r32ui</span>             | 1 channel 32-bit unsigned integer texture |
|38 |<span class='code'>r16ui</span>             | 1 channel 16-bit unsigned integer texture |
|39 |<span class='code'>r8ui</span>              | 1 channel 8-bit unsigned integer texture |
|40 |<span class='code'>r64ui</span>             | 1 channel 64-bit unsigned integer texture |
|41 |<span class='code'>r64i</span>              | 1 channel 64-bit signed integer texture |

## See also

<span class='code'><a href="/stdlib-reference/types/Texture1D" class="code_type">Texture1D</a></span>, <span class='code'><a href="/stdlib-reference/types/Texture2D" class="code_type">Texture2D</a></span>, <span class='code'><a href="/stdlib-reference/types/Texture3D" class="code_type">Texture3D</a></span>, <span class='code'><a href="/stdlib-reference/types/TextureCube" class="code_type">TextureCube</a></span>, <span class='code'><a href="/stdlib-reference/types/Texture1DArray" class="code_type">Texture1DArray</a></span>,
<span class='code'><a href="/stdlib-reference/types/Texture2DArray" class="code_type">Texture2DArray</a></span>, <span class='code'><a href="/stdlib-reference/types/TextureCubeArray" class="code_type">TextureCubeArray</a></span>, <span class='code'><a href="/stdlib-reference/types/Sampler1D" class="code_type">Sampler1D</a></span>, <span class='code'><a href="/stdlib-reference/types/Sampler2D" class="code_type">Sampler2D</a></span>, <span class='code'><a href="/stdlib-reference/types/Sampler3D" class="code_type">Sampler3D</a></span>, <span class='code'><a href="/stdlib-reference/types/SamplerCube" class="code_type">SamplerCube</a></span>, <span class='code'><a href="/stdlib-reference/types/Sampler1DArray" class="code_type">Sampler1DArray</a></span>, <span class='code'><a href="/stdlib-reference/types/Sampler2DArray" class="code_type">Sampler2DArray</a></span>, <span class='code'><a href="/stdlib-reference/types/SamplerCubeArray" class="code_type">SamplerCubeArray</a></span>,
<span class='code'><a href="/stdlib-reference/types/Texture2DMS" class="code_type">Texture2DMS</a></span>, <span class='code'><a href="/stdlib-reference/types/Texture2DMSArray" class="code_type">Texture2DMSArray</a></span>, <span class='code'><a href="/stdlib-reference/types/RWTexture1D" class="code_type">RWTexture1D</a></span>, <span class='code'><a href="/stdlib-reference/types/RWTexture2D" class="code_type">RWTexture2D</a></span>, <span class='code'><a href="/stdlib-reference/types/RWTexture3D" class="code_type">RWTexture3D</a></span>, <span class='code'><a href="/stdlib-reference/types/RWTexture1DArray" class="code_type">RWTexture1DArray</a></span>, <span class='code'><a href="/stdlib-reference/types/RWTexture2DArray" class="code_type">RWTexture2DArray</a></span>,
<span class='code'><a href="/stdlib-reference/types/RWTexture2DMS" class="code_type">RWTexture2DMS</a></span>, <span class='code'><a href="/stdlib-reference/types/RWTexture2DMSArray" class="code_type">RWTexture2DMSArray</a></span>, <span class='code'><a href="/stdlib-reference/types/Buffer" class="code_type">Buffer</a></span>, <span class='code'><a href="/stdlib-reference/types/RWBuffer" class="code_type">RWBuffer</a></span>, <span class='code'><a href="/stdlib-reference/types/FeedbackTexture2D" class="code_type">FeedbackTexture2D</a></span>, <span class='code'><a href="/stdlib-reference/types/FeedbackTexture2DArray" class="code_type">FeedbackTexture2DArray</a></span>.

