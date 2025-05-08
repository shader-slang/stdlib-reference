---
layout: stdlib-reference
---

# RaytracingAccelerationStructure\.init

## Description





## Signature 

<pre>
<a href="index.html" class="code_type">RaytracingAccelerationStructure</a>.<a href="init.html">init</a>(uint64_t <a href="init.html#decl-address" class="code_param">address</a>);

<a href="index.html" class="code_type">RaytracingAccelerationStructure</a>.<a href="init.html">init</a>(__DynamicResource&lt;__DynamicResourceKind.General&gt; <a href="init.html#decl-res" class="code_param">res</a>);

<a href="index.html" class="code_type">RaytracingAccelerationStructure</a>.<a href="init.html">init</a>(<a href="../descriptorhandle-0a/index.html" class="code_type">DescriptorHandle</a>&lt;<a href="index.html" class="code_type">RaytracingAccelerationStructure</a>&gt; <a href="init.html#decl-bindless" class="code_param">bindless</a>);

</pre>

## Parameters

####  <a id="decl-address"></a>address  : uint64\_t
####  <a id="decl-res"></a>res  : \_\_DynamicResource\<\_\_DynamicResourceKind\.General\>
####  <a id="decl-bindless"></a>bindless  : [DescriptorHandle](../descriptorhandle-0a/index.html)\<[RaytracingAccelerationStructure](index.html)\>

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvRayTracingKHR`.


