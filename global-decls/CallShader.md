---
layout: stdlib-reference
---

# CallShader

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/CallShader">CallShader</a>&lt;Payload&gt;(
    <span class="code_keyword">uint</span> <span class='code_param'>shaderIndex</span>,
    <span class="code_keyword">inout</span> Payload <span class='code_param'>payload</span>);

</pre>

## Generic Parameters

#### Payload {#typeparam-Payload}

## Generic Parameters

#### Payload {#typeparam-Payload}

## Parameters

#### shaderIndex  : uint {#decl-shaderIndex}
#### payload  : Payload {#decl-payload}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `closesthit`, `raygen`, `miss`, `callable`.

#### glsl
Available in stages: `closesthit`, `raygen`, `miss`, `callable`.

#### spirv
Available in stages: `closesthit`, `raygen`, `miss`, `callable`.

Requires capability: `spvRayTracingKHR`.


