---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddF32

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddF32">InterlockedAddF32</a>(
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddF32#decl-byteAddress" class="code_param">byteAddress</a>    uint ,
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddF32#decl-valueToAdd" class="code_param">valueToAdd</a>    float ,
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddF32#decl-originalValue" class="code_param">originalValue</a>    out float );

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddF32">InterlockedAddF32</a>(
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddF32#decl-byteAddress" class="code_param">byteAddress</a>    uint ,
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddF32#decl-valueToAdd" class="code_param">valueToAdd</a>    float );

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
#### valueToAdd  : float {#decl-valueToAdd}
#### originalValue  : float {#decl-originalValue}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvAtomicFloat32AddEXT`, `spvAtomicFloat32MinMaxEXT`.


