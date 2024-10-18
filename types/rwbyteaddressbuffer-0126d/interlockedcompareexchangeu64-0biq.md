---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareExchangeU64

## Description

Perform a 64-bit integer atomic compare-and-exchange operation at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangeu64-0biq#decl-byteAddress" class="code_param">byteAddress</a></span>.



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
The address at which to perform the atomic compare-and-exchange operation.

#### compareValue  : uint64\_t {#decl-compareValue}
The value to compare to the value at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangeu64-0biq#decl-byteAddress" class="code_param">byteAddress</a></span>.

#### value  : uint64\_t {#decl-value}
The value to store at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangeu64-0biq#decl-byteAddress" class="code_param">byteAddress</a></span> if the comparison is successful.

#### outOriginalValue  : uint64\_t {#decl-outOriginalValue}

## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicCompareExchange</span>. For HLSL, this function
translates to <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchange64-0bi">InterlockedCompareExchange64</a></span> and requires shader model 6.6.
For CUDA, this function maps to <span class='code'>atomicCAS</span>.


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


