---
layout: stdlib-reference
---

# attribute [WaveSize]

## Description

Indicate a compute shader entry point is only compatible with the specified wave size.

## Signature

<pre>
[<a href="/stdlib-reference/attributes/wavesize-04">WaveSize</a>(<a href="/stdlib-reference/attributes/wavesize-04#decl-numLanes" class="code_param">numLanes</a> : <span class="code_keyword">int</span>)]
</pre>

## Parameters

#### numLanes  : int {#decl-numLanes}
The wave size this shader entrypoint is compatible with. Must be one of 4, 8, 16, 32, 64, 128.


