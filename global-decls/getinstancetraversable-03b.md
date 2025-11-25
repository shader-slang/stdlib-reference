---
layout: stdlib-reference
---

# GetInstanceTraversable

## Description

Returns an instance traversable from an IAS by index.



## Signature 

<pre>
uint64_t <a href="getinstancetraversable-03b.html">GetInstanceTraversable</a>(
    uint64_t <a href="getinstancetraversable-03b.html#decl-ias" class="code_param">ias</a>,
    <span class="code_keyword">uint</span> <a href="getinstancetraversable-03b.html#decl-instIdx" class="code_param">instIdx</a>);

</pre>

## Parameters

####  <a id="decl-ias"></a>ias  : uint64\_t
Instance acceleration structure handle

####  <a id="decl-instIdx"></a>instIdx  : uint
Instance index


## Return value
Traversable handle for the specified instance

## Remarks
IAS must be built with OPTIX_BUILD_FLAG_ALLOW_RANDOM_INSTANCE_ACCESS
Currently only supported on CUDA/OptiX


## Availability and Requirements

Defined for the following targets:

#### cuda
Available in stages: `intersection`, `raygen`, `miss`, `callable`, `closesthit`, `anyhit`.

Requires capability: `optix_multilevel_traversal`.


