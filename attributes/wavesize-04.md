---
layout: stdlib-reference
---

# attribute [WaveSize]

## Description

Indicate a compute shader entry point is only compatible with the specified wave size.
On HLSL this is emitted as <span class='code'>[<a href="wavesize-04.html">WaveSize</a>(N)]</span>, and on WGSL as <span class='code'>@subgroup_size(N)</span> (with the
<span class='code'>subgroups</span> and <span class='code'>subgroup_size_control</span> extensions). SPIR-V and GLSL have no in-shader form,
and Slang does not enforce the size in the generated shader: the application must request it
when it creates the pipeline (<span class='code'>VK_EXT_subgroup_size_control</span>), using the value that
reflection reports through <span class='code'>EntryPointReflection::getComputeWaveSize</span>. Without that request
the shader can run at a different wave size. Metal cannot request
a SIMD-group width, so the attribute is ignored there with a warning. CUDA warps are always 32
lanes wide: <span class='code'>[<a href="wavesize-04.html">WaveSize</a>(32)]</span> needs nothing emitted, and any other size is ignored with a warning.

## Signature

<pre>
[<a href="wavesize-04.html">WaveSize</a>(<a href="wavesize-04.html#decl-numLanes" class="code_param">numLanes</a> : <span class="code_keyword">int</span>)]
</pre>

## Parameters

####  <a id="decl-numLanes"></a>numLanes  : int
The wave size this shader entrypoint is compatible with. Must be one of 4, 8, 16, 32, 64, 128.


