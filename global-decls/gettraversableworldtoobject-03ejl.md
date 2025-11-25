---
layout: stdlib-reference
---

# GetTraversableWorldToObject

## Description

Returns the world-to-object transform from an instance traversable.



## Signature 

<pre>
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, 3, 4&gt; <a href="gettraversableworldtoobject-03ejl.html">GetTraversableWorldToObject</a>(uint64_t <a href="gettraversableworldtoobject-03ejl.html#decl-handle" class="code_param">handle</a>);

</pre>

## Parameters

####  <a id="decl-handle"></a>handle  : uint64\_t
Instance traversable handle to query


## Return value
3x4 transform matrix representing the world-to-object transformation

## Remarks
Currently only supported on CUDA/OptiX


## Availability and Requirements

Defined for the following targets:

#### cuda
Available in stages: `intersection`, `raygen`, `miss`, `callable`, `closesthit`, `anyhit`.

Requires capability: `optix_multilevel_traversal`.


