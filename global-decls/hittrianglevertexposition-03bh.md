---
layout: stdlib-reference
---

# HitTriangleVertexPosition

## Description

Get the vertex positions of the currently hit triangle in any-hit or closest-hit shader.
https://github.com/KhronosGroup/GLSL/blob/master/extensions/ext/GLSL_EXT_ray_tracing_position_fetch.txt




## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="/stdlib-reference/global-decls/hittrianglevertexposition-03bh">HitTriangleVertexPosition</a>(<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/hittrianglevertexposition-03bh#decl-index" class="code_param">index</a>);

</pre>

## Parameters

#### index  : uint {#decl-index}

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in stages: `closesthit`, `anyhit`.

#### spirv
Available in stages: `closesthit`, `anyhit`.

Requires capability: `spvRayTracingPositionFetchKHR`.


