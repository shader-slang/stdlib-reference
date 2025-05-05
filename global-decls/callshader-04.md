---
layout: stdlib-reference
---

# CallShader

## Description

Executes a callable shader with the specified payload.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/callshader-04">CallShader</a>&lt;<a href="/stdlib-reference/global-decls/callshader-04#typeparam-Payload" class="code_type">Payload</a>&gt;(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/callshader-04#decl-shaderIndex" class="code_param">shaderIndex</a>,
    <span class="code_keyword">inout</span> <a href="/stdlib-reference/global-decls/callshader-04#typeparam-Payload" class="code_type">Payload</a> <a href="/stdlib-reference/global-decls/callshader-04#decl-payload" class="code_param">payload</a>);

</pre>

## Generic Parameters

#### Payload {#typeparam-Payload}

## Parameters

#### shaderIndex  : uint {#decl-shaderIndex}
Index of the callable shader to execute

#### payload  : [Payload](/stdlib-reference/global-decls/callshader-04#typeparam-Payload) {#decl-payload}
Data structure to pass to and receive from the callable shader


## Remarks
Used to implement dynamic shader calls during ray tracing


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `closesthit`, `raygen`, `miss`, `callable`.

#### glsl
Available in stages: `closesthit`, `raygen`, `miss`, `callable`.

#### spirv
Available in stages: `closesthit`, `raygen`, `miss`, `callable`.

Requires capability: `spvRayTracingKHR`.


