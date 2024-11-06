---
layout: stdlib-reference
---

# ReportHit

## Description





## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/reporthit-06">ReportHit</a>&lt;<a href="/stdlib-reference/global-decls/reporthit-06#typeparam-A" class="code_type">A</a>&gt;(
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/reporthit-06#decl-tHit" class="code_param">tHit</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/reporthit-06#decl-hitKind" class="code_param">hitKind</a>,
    <a href="/stdlib-reference/global-decls/reporthit-06#typeparam-A" class="code_type">A</a> <a href="/stdlib-reference/global-decls/reporthit-06#decl-attributes" class="code_param">attributes</a>);

</pre>

## Generic Parameters

#### A {#typeparam-A}

## Parameters

#### tHit  : float {#decl-tHit}
#### hitKind  : uint {#decl-hitKind}
#### attributes  : [A](/stdlib-reference/global-decls/reporthit-06#typeparam-A) {#decl-attributes}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `intersection` stage only.

#### glsl
Available in `intersection` stage only.

#### spirv
Available in `intersection` stage only.

Requires capability: `spvRayTracingKHR`.


