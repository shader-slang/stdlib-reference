---
layout: stdlib-reference
---

# GetTransformListSize

## Description

Returns the number of transforms in the path from root to the current primitive.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="gettransformlistsize-03cg.html">GetTransformListSize</a>();

</pre>

## Return value
Number of transforms from root traversable to current primitive

## Remarks
Currently only supported on CUDA/OptiX. Can only be called from intersection, any-hit, or closest-hit programs.


## Availability and Requirements

Defined for the following targets:

#### cuda
Available in stages: `intersection`, `closesthit`, `anyhit`.

Requires capability: `optix_multilevel_traversal`.


