---
layout: stdlib-reference
---

# RayQuery\<rayFlagsGeneric:uint\>\.TraceRayInline

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RayQuery/index" class="code_type">RayQuery</a>&lt;rayFlagsGeneric:<span class="code_keyword">uint</span>&gt;.<a href="/stdlib-reference/types/RayQuery/TraceRayInline">TraceRayInline</a>(
    <a href="/stdlib-reference/types/RaytracingAccelerationStructure/index" class="code_type">RaytracingAccelerationStructure</a> <span class='code_param'>accelerationStructure</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>rayFlags</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>instanceInclusionMask</span>,
    <a href="/stdlib-reference/types/RayDesc/index" class="code_type">RayDesc</a> <span class='code_param'>ray</span>);

</pre>

## Parameters

* `accelerationStructure`
* `rayFlags`
* `instanceInclusionMask`
* `ray`

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayQueryKHR`.


