---
layout: stdlib-reference
---

# GetTraversableInstanceId

## Description

Returns the instance ID from a traversable handle.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="gettraversableinstanceid-03em.html">GetTraversableInstanceId</a>(uint64_t <a href="gettraversableinstanceid-03em.html#decl-handle" class="code_param">handle</a>);

</pre>

## Parameters

####  <a id="decl-handle"></a>handle  : uint64\_t
Traversable handle to query


## Return value
Instance ID, or 0 if handle does not reference an instance

## Remarks
Currently only supported on CUDA/OptiX


## Availability and Requirements

Defined for the following targets:

#### cuda
Available in stages: `intersection`, `raygen`, `miss`, `callable`, `closesthit`, `anyhit`.

Requires capability: `optix_multilevel_traversal`.


