---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedMaxU64

## Description

Perform a 64-bit unsigned integer atomic max operation at <span class='code'><a href="interlockedmaxu64-0be.html#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
uint64_t <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="interlockedmaxu64-0be.html">InterlockedMaxU64</a>(
    <span class="code_keyword">uint</span> <a href="interlockedmaxu64-0be.html#decl-byteAddress" class="code_param">byteAddress</a>,
    uint64_t <a href="interlockedmaxu64-0be.html#decl-value" class="code_param">value</a>);

</pre>

## Parameters

####  <a id="decl-byteAddress"></a>byteAddress  : uint
The address at which to perform the atomic max operation.

####  <a id="decl-value"></a>value  : uint64\_t
The operand for the max operation.


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


