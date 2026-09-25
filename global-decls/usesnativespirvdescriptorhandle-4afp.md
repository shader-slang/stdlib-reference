---
layout: stdlib-reference
---

# usesNativeSpirvDescriptorHandle

## Description

True when <span class='code'><a href="usesnativespirvdescriptorhandle-4afp.html#typeparam-T" class="code_type">T</a></span>'s <span class='code'><a href="../types/descriptorhandle-0a/index.html" class="code_type">DescriptorHandle</a></span> uses the native <span class='code'>SPV_NV_bindless_texture</span> <span class='code'>uint64</span> representation
on the current SPIR-V target: <span class='code'>spvBindlessTextureNV</span> is enabled and <span class='code'><a href="usesnativespirvdescriptorhandle-4afp.html#typeparam-T" class="code_type">T</a></span> is an encodable
texture/sampler. It pairs the capability check with <span class='code'>__isBindlessTextureNVEncodable&lt;<a href="usesnativespirvdescriptorhandle-4afp.html#typeparam-T" class="code_type">T</a>&gt;()</span> for call
sites not already inside a <span class='code'>case spvBindlessTextureNV:</span> 429496726642949671684294967188 e.g. a <span class='code'><a href="static_assert.html">static_assert</a></span> condition or a
target-agnostic comparison. (The native-cast dispatch in <span class='code'><a href="defaultgetdescriptorfromhandle-7ako.html">defaultGetDescriptorFromHandle</a></span> calls
<span class='code'>__isBindlessTextureNVEncodable&lt;<a href="usesnativespirvdescriptorhandle-4afp.html#typeparam-T" class="code_type">T</a>&gt;()</span> directly, since its arms already select the capability.) The
<span class='code'>case spirv:</span>/<span class='code'>default</span> arm keeps the switch's inferred SPIR-V
capability at <span class='code'>{spirv}</span>, so a caller does not inherit a spurious <span class='code'>spvBindlessTextureNV</span> requirement on
the default model. <span class='code'>[ForceInline]</span> inlines the <span class='code'>__target_switch</span> at each call site so it folds to a
compile-time constant 429496726642949671684294967188 required both to use it as a <span class='code'><a href="static_assert.html">static_assert</a></span> condition and to let dead-branch
elimination drop the native cast for a non-encodable <span class='code'><a href="usesnativespirvdescriptorhandle-4afp.html#typeparam-T" class="code_type">T</a></span>.




## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="usesnativespirvdescriptorhandle-4afp.html">usesNativeSpirvDescriptorHandle</a>&lt;<a href="usesnativespirvdescriptorhandle-4afp.html#typeparam-T" class="code_type">T</a>&gt;()
    <span class='code_keyword'>where</span> <a href="usesnativespirvdescriptorhandle-4afp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/iopaquedescriptor-017/index.html" class="code_type">IOpaqueDescriptor</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IOpaqueDescriptor](../interfaces/iopaquedescriptor-017/index.html)

