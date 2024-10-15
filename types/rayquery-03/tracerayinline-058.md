---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.TraceRayInline

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rayquery-03/index" class="code_type">RayQuery</a>&lt;<a href="/stdlib-reference/types/rayquery-03/index#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="/stdlib-reference/types/rayquery-03/tracerayinline-058">TraceRayInline</a>(
    <a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/index" class="code_type">RaytracingAccelerationStructure</a> <a href="/stdlib-reference/types/rayquery-03/tracerayinline-058#decl-accelerationStructure" class="code_param">accelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rayquery-03/tracerayinline-058#decl-rayFlags" class="code_param">rayFlags</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rayquery-03/tracerayinline-058#decl-instanceInclusionMask" class="code_param">instanceInclusionMask</a>,
    <a href="/stdlib-reference/types/raydesc-03/index" class="code_type">RayDesc</a> <a href="/stdlib-reference/types/rayquery-03/tracerayinline-058#decl-ray" class="code_param">ray</a>);

</pre>

## Parameters

#### accelerationStructure  : [RaytracingAccelerationStructure](/stdlib-reference/types/raytracingaccelerationstructure-0am/index) {#decl-accelerationStructure}
#### rayFlags  : uint {#decl-rayFlags}
#### instanceInclusionMask  : uint {#decl-instanceInclusionMask}
#### ray  : [RayDesc](/stdlib-reference/types/raydesc-03/index) {#decl-ray}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


