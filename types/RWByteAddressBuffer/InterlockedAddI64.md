---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddI64

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddI64">InterlockedAddI64</a>(
    uint <span class='code_param'>byteAddress</span>,
    int64_t <span class='code_param'>valueToAdd</span>,
    out int64_t <span class='code_param'>originalValue</span>);

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddI64">InterlockedAddI64</a>(
    uint <span class='code_param'>byteAddress</span>,
    int64_t <span class='code_param'>valueToAdd</span>);

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


