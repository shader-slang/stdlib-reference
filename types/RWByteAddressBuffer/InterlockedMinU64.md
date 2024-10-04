---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedMinU64

## Description





## Signature 

<pre>
uint64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMinU64">InterlockedMinU64</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>byteAddress</span>,
    uint64_t <span class='code_param'>value</span>);

</pre>

## Parameters

#### byteAddress : uint
#### value : uint64\_t

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


