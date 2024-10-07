---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddI64

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddI64">InterlockedAddI64</a>(
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddI64#decl-byteAddress" class="code_param">byteAddress</a>    uint ,
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddI64#decl-valueToAdd" class="code_param">valueToAdd</a>    int64_t ,
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddI64#decl-originalValue" class="code_param">originalValue</a>    out int64_t );

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddI64">InterlockedAddI64</a>(
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddI64#decl-byteAddress" class="code_param">byteAddress</a>    uint ,
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddI64#decl-valueToAdd" class="code_param">valueToAdd</a>    int64_t );

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
#### valueToAdd  : int64\_t {#decl-valueToAdd}
#### originalValue  : int64\_t {#decl-originalValue}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvInt64Atomics`.


