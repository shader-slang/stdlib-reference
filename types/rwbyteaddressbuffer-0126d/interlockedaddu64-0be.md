---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddU64

## Description

Perform a 64-bit unsigned integer atomic add operation at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddu64-0be#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
uint64_t <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddu64-0be">InterlockedAddU64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddu64-0be#decl-byteAddress" class="code_param">byteAddress</a>,
    uint64_t <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddu64-0be#decl-value" class="code_param">value</a>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
The address at which to perform the atomic add operation.

#### value  : uint64\_t {#decl-value}
The operand for the add operation.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvInt64Atomics`.


