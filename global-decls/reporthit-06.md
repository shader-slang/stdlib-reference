---
layout: stdlib-reference
---

# ReportHit

## Description

Reports a hit from an intersection shader.



## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="reporthit-06.html">ReportHit</a>&lt;<a href="reporthit-06.html#typeparam-A" class="code_type">A</a>&gt;(
    <span class="code_keyword">float</span> <a href="reporthit-06.html#decl-tHit" class="code_param">tHit</a>,
    <span class="code_keyword">uint</span> <a href="reporthit-06.html#decl-hitKind" class="code_param">hitKind</a>,
    <a href="reporthit-06.html#typeparam-A" class="code_type">A</a> <a href="reporthit-06.html#decl-attributes" class="code_param">attributes</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-A"></a>A

## Parameters

####  <a id="decl-tHit"></a>tHit  : float
Distance along the ray where the intersection occurred

####  <a id="decl-hitKind"></a>hitKind  : uint
User-defined value identifying the type of hit

####  <a id="decl-attributes"></a>attributes  : [A](reporthit-06.html#typeparam-A)
Custom attributes for the intersection


## Return value
true if the hit was accepted, false if rejected

## Remarks
Used in custom intersection shaders to report primitive intersections


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `intersection` stage only.

#### glsl
Available in `intersection` stage only.

#### spirv
Available in `intersection` stage only.

Requires capability: `spvRayTracingKHR`.


