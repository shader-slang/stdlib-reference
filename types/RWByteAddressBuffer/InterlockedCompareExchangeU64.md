---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareExchangeU64

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchangeU64">InterlockedCompareExchangeU64</a>(
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchangeU64#decl-byteAddress" class="code_param">byteAddress</a>    uint ,
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchangeU64#decl-compareValue" class="code_param">compareValue</a>    uint64_t ,
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchangeU64#decl-value" class="code_param">value</a>    uint64_t ,
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchangeU64#decl-outOriginalValue" class="code_param">outOriginalValue</a>    out uint64_t );

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
#### compareValue  : uint64\_t {#decl-compareValue}
#### value  : uint64\_t {#decl-value}
#### outOriginalValue  : uint64\_t {#decl-outOriginalValue}

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


