---
layout: stdlib-reference
---

# GetTransformListHandle

## Description

Returns the traversable handle at a specific index in the transform path.



## Signature 

<pre>
uint64_t <a href="gettransformlisthandle-03cg.html">GetTransformListHandle</a>(<span class="code_keyword">uint</span> <a href="gettransformlisthandle-03cg.html#decl-index" class="code_param">index</a>);

</pre>

## Parameters

####  <a id="decl-index"></a>index  : uint
Index in the transform list (0 = root, GetTransformListSize()-1 = closest to primitive)


## Return value
Traversable handle at the specified index

## Remarks
Currently only supported on CUDA/OptiX. Can only be called from intersection, any-hit, or closest-hit programs.


## Availability and Requirements

Defined for the following targets:

#### cuda
Available in stages: `intersection`, `closesthit`, `anyhit`.

Requires capability: `optix_multilevel_traversal`.


