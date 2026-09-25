---
layout: stdlib-reference
---

# getDescriptorFromDescriptorHeapEXT

## Description

Load a descriptor from the <span class='code'>spvDescriptorHeapEXT</span> descriptor heap. The single-descriptor kinds use
only <span class='code'><a href="getdescriptorfromdescriptorheapext-3dhrvwx.html#decl-handle" class="code_param">handle</a>.x</span> as the heap index: samplers load from the sampler heap, every other kind from the
resource heap. A combined texture-sampler is the exception 429496726642949671684294967188 it is assembled from both components of
the handle (a combined descriptor carries a texture part and a sampler part), so
<span class='code'>__makeCombinedTextureSamplerFromHandle</span> receives the whole <span class='code'>uint2</span> rather than just <span class='code'>.x</span>. This is
the single lowering for the EXT heap, shared by the <span class='code'>spvDescriptorHeapEXT</span> arm of
<span class='code'><a href="defaultgetdescriptorfromhandle-7ako.html">defaultGetDescriptorFromHandle</a></span> and by the untyped-handle429496726642949671744294967186resource constructors that convert a
<span class='code'><a href="resourcedescriptorheap-08i.html" class="code_var">ResourceDescriptorHeap</a>[i]</span> / <span class='code'><a href="samplerdescriptorheap-07h.html" class="code_var">SamplerDescriptorHeap</a>[j]</span> index directly to a resource, so the two
paths stay in agreement.




## Signature 

<pre>
<a href="getdescriptorfromdescriptorheapext-3dhrvwx.html#typeparam-T" class="code_type">T</a> <a href="getdescriptorfromdescriptorheapext-3dhrvwx.html">getDescriptorFromDescriptorHeapEXT</a>&lt;<a href="getdescriptorfromdescriptorheapext-3dhrvwx.html#typeparam-T" class="code_type">T</a>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="getdescriptorfromdescriptorheapext-3dhrvwx.html#decl-handle" class="code_param">handle</a>)
    <span class='code_keyword'>where</span> <a href="getdescriptorfromdescriptorheapext-3dhrvwx.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/iopaquedescriptor-017/index.html" class="code_type">IOpaqueDescriptor</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IOpaqueDescriptor](../interfaces/iopaquedescriptor-017/index.html)

## Parameters

####  <a id="decl-handle"></a>handle  : [vector](../types/vector/index.html)\<uint, 2\>

