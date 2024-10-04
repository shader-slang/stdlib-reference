---
layout: stdlib-reference
---

# ReportHit

## Description





## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/ReportHit">ReportHit</a>&lt;A&gt;(
    <span class="code_keyword">float</span> <span class='code_param'>tHit</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>hitKind</span>,
    A <span class='code_param'>attributes</span>);

</pre>

## Parameters

#### A
#### tHit : float
#### hitKind : uint
#### attributes : A

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `intersection` stage only.

#### glsl
Available in `intersection` stage only.

#### spirv
Available in `intersection` stage only.

Requires capability: `spvRayTracingKHR`.


