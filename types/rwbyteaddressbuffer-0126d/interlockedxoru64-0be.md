---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedXorU64

## Description

Perform a 64-bit unsigned integer atomic xor operation at <span class='code'><a href="interlockedxoru64-0be.html#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
uint64_t <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="interlockedxoru64-0be.html">InterlockedXorU64</a>(
    <span class="code_keyword">uint</span> <a href="interlockedxoru64-0be.html#decl-byteAddress" class="code_param">byteAddress</a>,
    uint64_t <a href="interlockedxoru64-0be.html#decl-value" class="code_param">value</a>);

</pre>

## Parameters

####  <a id="decl-byteAddress"></a>byteAddress  : uint
The address at which to perform the atomic xor operation.

####  <a id="decl-value"></a>value  : uint64\_t
The operand for the xor operation.


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


