---
layout: stdlib-reference
---

# ReportHitOptix

## Description



Reports a hit optimized for OptiX.

## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/reporthitoptix-069">ReportHitOptix</a>&lt;<span class="code_keyword">each</span> <a href="/stdlib-reference/global-decls/reporthitoptix-069#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/reporthitoptix-069#decl-tHit" class="code_param">tHit</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/reporthitoptix-069#decl-hitKind" class="code_param">hitKind</a>,
    <a href="/stdlib-reference/global-decls/reporthitoptix-069#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/reporthitoptix-069#decl-attribs" class="code_param">attribs</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/reporthitoptix-069#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/0_builtinintegertype-029g/index) {#typeparam-T}

## Parameters

#### tHit  : float {#decl-tHit}
Distance along the ray where the intersection occurred

#### hitKind  : uint {#decl-hitKind}
User-defined value identifying the type of hit

#### attribs  : [T](/stdlib-reference/global-decls/reporthitoptix-069#typeparam-T) {#decl-attribs}
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


