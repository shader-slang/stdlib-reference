---
layout: stdlib-reference
---

# ReportHit

## Description





## Signature 

<pre>
bool <a href="/stdlib-reference/global-decls/ReportHit">ReportHit</a>&lt;<a href="/stdlib-reference/global-decls/ReportHit#typeparam-A" class="code_type">A</a>&gt;(
    float <span class='code_param'>tHit</span>,
    uint <span class='code_param'>hitKind</span>,
    <a href="/stdlib-reference/global-decls/ReportHit#typeparam-A" class="code_type">A</a> <span class='code_param'>attributes</span>);

</pre>

## Generic Parameters

#### A {#typeparam-A}

## Generic Parameters

#### A {#typeparam-A}

## Parameters

#### tHit  : float {#decl-tHit}
#### hitKind  : uint {#decl-hitKind}
#### attributes  : [A](/stdlib-reference/global-decls/ReportHit#typeparam-A) {#decl-attributes}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `intersection` stage only.

#### glsl
Available in `intersection` stage only.

#### spirv
Available in `intersection` stage only.

Requires capability: `spvRayTracingKHR`.


