---
layout: stdlib-reference
---

# ReportHitOptix

## Description





## Signature 

<pre>
bool <a href="/stdlib-reference/global-decls/ReportHitOptix">ReportHitOptix</a>&lt;each <a href="/stdlib-reference/global-decls/ReportHitOptix#typeparam-T" class="code_type">T</a>&gt;(
    float <span class='code_param'>tHit</span>,
    uint <span class='code_param'>hitKind</span>,
    <a href="/stdlib-reference/global-decls/ReportHitOptix#typeparam-T" class="code_type">T</a> <span class='code_param'>attribs</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/ReportHitOptix#typeparam-T" class="code_type">T</a> : __BuiltinIntegerType;

</pre>

## Generic Parameters

#### T: \_\_BuiltinIntegerType {#typeparam-T}

## Generic Parameters

#### T: \_\_BuiltinIntegerType {#typeparam-T}

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


