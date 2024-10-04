---
layout: stdlib-reference
---

# CallShader

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/CallShader">CallShader</a>&lt;Payload&gt;(
    <span class="code_keyword">uint</span> <span class='code_param'>shaderIndex</span>,
    <span class="code_keyword">inout</span> Payload <span class='code_param'>payload</span>);

</pre>

## Parameters

* `Payload`
* `shaderIndex`
* `payload`

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `closesthit`, `raygen`, `miss`, `callable`.

#### glsl
Available in stages: `closesthit`, `raygen`, `miss`, `callable`.

#### spirv
Available in stages: `closesthit`, `raygen`, `miss`, `callable`.

Requires capability: `spvRayTracingKHR`.


