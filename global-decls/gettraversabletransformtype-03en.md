---
layout: stdlib-reference
---

# GetTraversableTransformType

## Description

Returns the transform type of a traversable handle from a transform list.



## Signature 

<pre>
<a href="../types/traversable_transform_type-0123456789acdefghijkmnop/index.html" class="code_type">TRAVERSABLE_TRANSFORM_TYPE</a> <a href="gettraversabletransformtype-03en.html">GetTraversableTransformType</a>(uint64_t <a href="gettraversabletransformtype-03en.html#decl-handle" class="code_param">handle</a>);

</pre>

## Parameters

####  <a id="decl-handle"></a>handle  : uint64\_t
Traversable handle to query


## Return value
Transform type enumeration value

## Remarks
Currently only supported on CUDA/OptiX


## Availability and Requirements

Defined for the following targets:

#### cuda
Available in stages: `intersection`, `raygen`, `miss`, `callable`, `closesthit`, `anyhit`.

Requires capability: `optix_multilevel_traversal`.


