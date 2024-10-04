---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedExchangeU64

## Signature 

<pre>
uint64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedExchangeU64">InterlockedExchangeU64</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>byteAddress</span>,
    uint64_t <span class='code_param'>value</span>);

</pre>

## Parameters

* `byteAddress`
* `value`

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


