---
layout: stdlib-reference
---

# ReportHitOptix

## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/ReportHitOptix">ReportHitOptix</a>&lt;<span class="code_keyword">each</span> T&gt;(
    <span class="code_keyword">float</span> <span class='code_param'>tHit</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>hitKind</span>,
    T <span class='code_param'>attribs</span>)
    <span class='code_keyword'>where</span> T : __BuiltinIntegerType;

</pre>

## Parameters

* `T`
* `tHit`
* `hitKind`
* `attribs`

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


