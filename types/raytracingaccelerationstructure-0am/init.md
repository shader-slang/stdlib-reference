---
layout: stdlib-reference
---

# RaytracingAccelerationStructure\.init

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/index" class="code_type">RaytracingAccelerationStructure</a>.<a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/init">init</a>(uint64_t <a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/init#decl-address" class="code_param">address</a>);

<a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/index" class="code_type">RaytracingAccelerationStructure</a>.<a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/init">init</a>(__DynamicResource&lt;0&gt; <a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/init#decl-res" class="code_param">res</a>);

<a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/index" class="code_type">RaytracingAccelerationStructure</a>.<a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/init">init</a>(<a href="/stdlib-reference/types/descriptorhandle-0a/index" class="code_type">DescriptorHandle</a>&lt;<a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/index" class="code_type">RaytracingAccelerationStructure</a>&gt; <a href="/stdlib-reference/types/raytracingaccelerationstructure-0am/init#decl-bindless" class="code_param">bindless</a>);

</pre>

## Parameters

#### address  : uint64\_t {#decl-address}
#### res  : \_\_DynamicResource\<0\> {#decl-res}
#### bindless  : [DescriptorHandle](/stdlib-reference/types/descriptorhandle-0a/index)\<[RaytracingAccelerationStructure](/stdlib-reference/types/raytracingaccelerationstructure-0am/index)\> {#decl-bindless}

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayTracingKHR`.


