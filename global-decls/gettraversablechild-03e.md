---
layout: stdlib-reference
---

# GetTraversableChild

## Description

Returns the child traversable handle from an instance traversable.



## Signature 

<pre>
uint64_t <a href="gettraversablechild-03e.html">GetTraversableChild</a>(uint64_t <a href="gettraversablechild-03e.html#decl-handle" class="code_param">handle</a>);

</pre>

## Parameters

####  <a id="decl-handle"></a>handle  : uint64\_t
Instance traversable handle to query


## Return value
Child traversable handle, or 0 if handle does not reference an instance

## Remarks
Currently only supported on CUDA/OptiX


## Availability and Requirements

Defined for the following targets:

#### cuda
Available in stages: `intersection`, `raygen`, `miss`, `callable`, `closesthit`, `anyhit`.

Requires capability: `optix_multilevel_traversal`.


