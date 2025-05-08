---
layout: stdlib-reference
---

# ReportHitOptix

## Description

Reports a hit optimized for OptiX.



## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="reporthitoptix-069.html">ReportHitOptix</a>&lt;<span class="code_keyword">each</span> <a href="reporthitoptix-069.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">float</span> <a href="reporthitoptix-069.html#decl-tHit" class="code_param">tHit</a>,
    <span class="code_keyword">uint</span> <a href="reporthitoptix-069.html#decl-hitKind" class="code_param">hitKind</a>,
    <a href="reporthitoptix-069.html#typeparam-T" class="code_type">T</a> <a href="reporthitoptix-069.html#decl-attribs" class="code_param">attribs</a>)
    <span class='code_keyword'>where</span> <a href="reporthitoptix-069.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinIntegerType](../interfaces/0_builtinintegertype-029g/index.html)

## Parameters

####  <a id="decl-tHit"></a>tHit  : float
Distance along the ray where the intersection occurred

####  <a id="decl-hitKind"></a>hitKind  : uint
User-defined value identifying the type of hit

####  <a id="decl-attribs"></a>attribs  : [T](reporthitoptix-069.html#typeparam-T)
Attribute values for the intersection


## Return value
true if the hit was accepted, false if rejected

## Remarks
OptiX-specific version of ReportHit with optimized attribute handling


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `intersection` stage only.

#### glsl
Available in `intersection` stage only.

#### cuda
Available in `intersection` stage only.

#### spirv
Available in `intersection` stage only.

Requires capability: `spvRayTracingKHR`.


