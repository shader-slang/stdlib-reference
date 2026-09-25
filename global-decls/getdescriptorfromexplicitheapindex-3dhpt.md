---
layout: stdlib-reference
---

# getDescriptorFromExplicitHeapIndex

## Description

Convert an explicit descriptor-heap index (from <span class='code'><a href="resourcedescriptorheap-08i.html" class="code_var">ResourceDescriptorHeap</a>[i]</span> / <span class='code'><a href="samplerdescriptorheap-07h.html" class="code_var">SamplerDescriptorHeap</a>[j]</span>,
packed as <span class='code'><a href="getdescriptorfromexplicitheapindex-3dhpt.html#decl-handle" class="code_param">handle</a>.x</span>) into a descriptor <span class='code'><a href="getdescriptorfromexplicitheapindex-3dhpt.html#typeparam-T" class="code_type">T</a></span>. Shared by every untyped-handle429496726642949671744294967186resource constructor.

When the handle would use the native SPIR-V representation 429496726642949671684294967188 <span class='code'><a href="usesnativespirvdescriptorhandle-4afp.html">usesNativeSpirvDescriptorHandle</a>&lt;<a href="getdescriptorfromexplicitheapindex-3dhpt.html#typeparam-T" class="code_type">T</a>&gt;()</span>,
i.e. <span class='code'>spvBindlessTextureNV</span> enabled and <span class='code'><a href="getdescriptorfromexplicitheapindex-3dhpt.html#typeparam-T" class="code_type">T</a></span> an encodable texture/sampler 429496726642949671684294967188 routing the index through the
<span class='code'>(type, capability)</span>-keyed <span class='code'><a href="getdescriptorfromhandle-3dh.html">getDescriptorFromHandle</a></span> would let the NV dispatch in
<span class='code'><a href="defaultgetdescriptorfromhandle-7ako.html">defaultGetDescriptorFromHandle</a></span> reinterpret it as a native <span class='code'>uint64</span> handle (issue #13070). In that
case, load directly from the EXT heap when one also exists (<span class='code'>spvBindlessTextureNV+spvDescriptorHeapEXT</span>);
when it does not (plain <span class='code'>spvBindlessTextureNV</span>), there is no heap to load from and the index conversion
is unsupported 429496726642949671684294967188 fall through to <span class='code'><a href="getdescriptorfromhandle-3dh.html">getDescriptorFromHandle</a></span> (whose <span class='code'>.Handle</span> counterpart is diagnosed in
the constructors above). In every other case defer to <span class='code'><a href="getdescriptorfromhandle-3dh.html">getDescriptorFromHandle</a></span>, which is correct for
the index and preserves a user override 429496726642949671684294967188 this includes <span class='code'>spvDescriptorHeapEXT</span> alone
(<span class='code'><a href="usesnativespirvdescriptorhandle-4afp.html">usesNativeSpirvDescriptorHandle</a></span> is false without NV, so the override is honored) and non-native types
on any target. The EXT-direct load is deliberately nested inside the <span class='code'><a href="usesnativespirvdescriptorhandle-4afp.html">usesNativeSpirvDescriptorHandle</a></span>
guard rather than keyed on <span class='code'>spvDescriptorHeapEXT</span> alone: gating it behind NV is what lets
<span class='code'>spvDescriptorHeapEXT</span>-only compiles keep honoring a user <span class='code'><a href="getdescriptorfromhandle-3dh.html">getDescriptorFromHandle</a></span> override, since only
the NV+EXT combination must bypass it to avoid the <span class='code'>uint64</span> reinterpretation.




## Signature 

<pre>
<a href="getdescriptorfromexplicitheapindex-3dhpt.html#typeparam-T" class="code_type">T</a> <a href="getdescriptorfromexplicitheapindex-3dhpt.html">getDescriptorFromExplicitHeapIndex</a>&lt;<a href="getdescriptorfromexplicitheapindex-3dhpt.html#typeparam-T" class="code_type">T</a>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="getdescriptorfromexplicitheapindex-3dhpt.html#decl-handle" class="code_param">handle</a>)
    <span class='code_keyword'>where</span> <a href="getdescriptorfromexplicitheapindex-3dhpt.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/iopaquedescriptor-017/index.html" class="code_type">IOpaqueDescriptor</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IOpaqueDescriptor](../interfaces/iopaquedescriptor-017/index.html)

## Parameters

####  <a id="decl-handle"></a>handle  : [vector](../types/vector/index.html)\<uint, 2\>

