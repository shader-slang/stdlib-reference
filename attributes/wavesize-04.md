---
layout: stdlib-reference
---

# attribute [WaveSize]

## Description

Indicate a compute shader entry point is only compatible with the specified wave size.

## Signature

<pre>
[<a href="wavesize-04.html">WaveSize</a>(<a href="wavesize-04.html#decl-numLanes" class="code_param">numLanes</a> : <span class="code_keyword">int</span>)]
</pre>

## Parameters

####  <a id="decl-numLanes"></a>numLanes  : int
The wave size this shader entrypoint is compatible with. Must be one of 4, 8, 16, 32, 64, 128.


