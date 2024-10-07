---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.TraceRayInline

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RayQuery/index" class="code_type">RayQuery</a>&lt;<a href="/stdlib-reference/types/RayQuery/index#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:<span class="code_keyword">uint</span>&gt;.<a href="/stdlib-reference/types/RayQuery/TraceRayInline">TraceRayInline</a>(
    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index" class="code_type">RaytracingAccelerationStructure</a> <a href="/stdlib-reference/types/RayQuery/TraceRayInline#decl-accelerationStructure" class="code_param">accelerationStructure</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RayQuery/TraceRayInline#decl-rayFlags" class="code_param">rayFlags</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RayQuery/TraceRayInline#decl-instanceInclusionMask" class="code_param">instanceInclusionMask</a>,
    <a href="/stdlib-reference/types/RayDesc/index" class="code_type">RayDesc</a> <a href="/stdlib-reference/types/RayQuery/TraceRayInline#decl-ray" class="code_param">ray</a>);

</pre>

## Parameters

#### accelerationStructure  : [RaytracingAccelerationStructure](/stdlib-reference/types/RaytracingAccelerationStructure/index) {#decl-accelerationStructure}
#### rayFlags  : uint {#decl-rayFlags}
#### instanceInclusionMask  : uint {#decl-instanceInclusionMask}
#### ray  : [RayDesc](/stdlib-reference/types/RayDesc/index) {#decl-ray}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


