---
layout: stdlib-reference
---

# ReportHitOptix

## Description





## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/ReportHitOptix">ReportHitOptix</a>&lt;<span class="code_keyword">each</span> <a href="/stdlib-reference/global-decls/ReportHitOptix#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/ReportHitOptix#decl-tHit" class="code_param">tHit</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/ReportHitOptix#decl-hitKind" class="code_param">hitKind</a>,
    <a href="/stdlib-reference/global-decls/ReportHitOptix#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/ReportHitOptix#decl-attribs" class="code_param">attribs</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ReportHitOptix#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinIntegerType/index" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/BuiltinIntegerType/index) {#typeparam-T}

## Parameters

#### tHit  : float {#decl-tHit}
#### hitKind  : uint {#decl-hitKind}
#### attribs  : [T](/stdlib-reference/global-decls/ReportHitOptix#typeparam-T) {#decl-attribs}

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


