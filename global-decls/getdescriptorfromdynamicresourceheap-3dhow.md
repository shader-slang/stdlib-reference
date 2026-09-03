---
layout: stdlib-reference
---

# getDescriptorFromDynamicResourceHeap

## Description

Look up <span class='code'><a href="getdescriptorfromdynamicresourceheap-3dhow.html#decl-handleValue" class="code_param">handleValue</a></span> in the Vulkan dynamic-resource heap and return the descriptor. This is the
<span class='code'>uint2</span>-handle path used directly on plain SPIR-V / GLSL, and reused by the <span class='code'>spvBindlessTextureNV</span>
arm of <span class='code'><a href="defaultgetdescriptorfromhandle-7ako.html">defaultGetDescriptorFromHandle</a></span> for the kinds that extension does not convert (buffers and
acceleration structures), so the heap lowering lives in exactly one place. Capabilities are
inferred from the body (as for <span class='code'><a href="defaultgetdescriptorfromhandle-7ako.html">defaultGetDescriptorFromHandle</a></span>) rather than declared, so the
acceleration-structure path's <span class='code'>__asuint64</span> / ray-tracing requirements are picked up automatically.




## Signature 

<pre>
<a href="getdescriptorfromdynamicresourceheap-3dhow.html#typeparam-T" class="code_type">T</a> <a href="getdescriptorfromdynamicresourceheap-3dhow.html">getDescriptorFromDynamicResourceHeap</a>&lt;<a href="getdescriptorfromdynamicresourceheap-3dhow.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="../types/descriptorhandle-0a/index.html" class="code_type">DescriptorHandle</a>&lt;<a href="getdescriptorfromdynamicresourceheap-3dhow.html#typeparam-T" class="code_type">T</a>&gt; <a href="getdescriptorfromdynamicresourceheap-3dhow.html#decl-handleValue" class="code_param">handleValue</a>,
    <a href="../types/bindlessdescriptoroptions-08i/index.html" class="code_type">BindlessDescriptorOptions</a> <a href="getdescriptorfromdynamicresourceheap-3dhow.html#decl-bindlessOptions" class="code_param">bindlessOptions</a>)
    <span class='code_keyword'>where</span> <a href="getdescriptorfromdynamicresourceheap-3dhow.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/iopaquedescriptor-017/index.html" class="code_type">IOpaqueDescriptor</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IOpaqueDescriptor](../interfaces/iopaquedescriptor-017/index.html)

## Parameters

####  <a id="decl-handleValue"></a>handleValue  : [DescriptorHandle](../types/descriptorhandle-0a/index.html)\<[T](../types/descriptorhandle-0a/index.html#typeparam-T)\>
####  <a id="decl-bindlessOptions"></a>bindlessOptions  : [BindlessDescriptorOptions](../types/bindlessdescriptoroptions-08i/index.html)

