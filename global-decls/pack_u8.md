---
layout: stdlib-reference
---

# pack\_u8

## Description

Pack a vector of 4 unsigned 32 bit integers into a packed value of 4 8-bit integers, dropping unused bits.




## Signature 

<pre>
uint8_t4_packed <a href="/stdlib-reference/global-decls/pack_u8">pack_u8</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/global-decls/pack_u8#decl-unpackedValue" class="code_param">unpackedValue</a>);

uint8_t4_packed <a href="/stdlib-reference/global-decls/pack_u8">pack_u8</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, 4&gt; <a href="/stdlib-reference/global-decls/pack_u8#decl-unpackedValue" class="code_param">unpackedValue</a>);

</pre>

## Parameters

#### unpackedValue  : [vector](/stdlib-reference/types/vector/index)\<uint, 4\> {#decl-unpackedValue}
#### unpackedValue  : [vector](/stdlib-reference/types/vector/index)\<uint16\_t, 4\> {#decl-unpackedValue}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.



