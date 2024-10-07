---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.TraceRayInline

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RayQuery/index" class="code_type">RayQuery</a>&lt;<a href="/stdlib-reference/types/RayQuery/index#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>:uint&gt;.<a href="/stdlib-reference/types/RayQuery/TraceRayInline">TraceRayInline</a>(
    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index" class="code_type">RaytracingAccelerationStructure</a> <span class='code_param'>accelerationStructure</span>,
    uint <span class='code_param'>rayFlags</span>,
    uint <span class='code_param'>instanceInclusionMask</span>,
    <a href="/stdlib-reference/types/RayDesc/index" class="code_type">RayDesc</a> <span class='code_param'>ray</span>);

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


