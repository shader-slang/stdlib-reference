---
layout: stdlib-reference
---

# attribute [Shader64BitIndexing]

## Description

Used on a function to require the <span class='code'>SPV_EXT_shader_64bit_indexing</span> SPIR-V extension.

## Signature

<pre>
[<a href="shader64bitindexing-08b.html">Shader64BitIndexing</a>]
</pre>

## Remarks

When this attribute is applied to a SPIR-V entry point, or to any function in the
entry point's call graph, the emitted SPIR-V entry point requires the <span class='code'>Shader64BitIndexingEXT</span>
capability, declares <span class='code'>OpExtension &quot;SPV_EXT_shader_64bit_indexing&quot;</span>, and enables the
<span class='code'>Shader64BitIndexingEXT</span> execution mode. This permits 64-bit (<span class='code'>int64</span>/<span class='code'>uint64</span>) indices into
arrays, buffers, and resources. The requirement propagates up the call graph like <span class='code'>[<a href="require.html">require</a>()]</span>.
This attribute is a pure opt-in marker: the requirement is honored only where the
programmer applies it. The compiler does not infer it from the use of 64-bit indices, nor does
it diagnose 64-bit indexing performed without the attribute.


