---
layout: stdlib-reference
---

# CallShader

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/CallShader">CallShader</a>&lt;<a href="/stdlib-reference/global-decls/CallShader#typeparam-Payload" class="code_type">Payload</a>&gt;(
shaderIndex    uint ,
payload    inout <a href="/stdlib-reference/global-decls/CallShader#typeparam-Payload" class="code_type">Payload</a> );

</pre>

## Generic Parameters

#### Payload {#typeparam-Payload}

## Generic Parameters

#### Payload {#typeparam-Payload}

## Parameters

#### shaderIndex  : uint {#decl-shaderIndex}
#### payload  : [Payload](/stdlib-reference/global-decls/CallShader#typeparam-Payload) {#decl-payload}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `closesthit`, `raygen`, `miss`, `callable`.

#### glsl
Available in stages: `closesthit`, `raygen`, `miss`, `callable`.

#### spirv
Available in stages: `closesthit`, `raygen`, `miss`, `callable`.

Requires capability: `spvRayTracingKHR`.


