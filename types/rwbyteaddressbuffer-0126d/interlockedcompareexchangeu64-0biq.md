---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareExchangeU64

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangeu64-0biq">InterlockedCompareExchangeU64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangeu64-0biq#decl-byteAddress" class="code_param">byteAddress</a>,
    uint64_t <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangeu64-0biq#decl-compareValue" class="code_param">compareValue</a>,
    uint64_t <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangeu64-0biq#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> uint64_t <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangeu64-0biq#decl-outOriginalValue" class="code_param">outOriginalValue</a>);

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


