---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareStore64

## Description

Perform a 64-bit integer atomic compare-and-store operation at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi">InterlockedCompareStore64</a>&lt;<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi#decl-byteAddress" class="code_param">byteAddress</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi#decl-compareValue" class="code_param">compareValue</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi#typeparam-T" class="code_type">T</a> : __BuiltinInt64Type;

</pre>

## Generic Parameters

#### T: \_\_BuiltinInt64Type {#typeparam-T}

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
The address at which to perform the atomic store operation.

#### compareValue  : [T](/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi#typeparam-T) {#decl-compareValue}
The value to compare to the value at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi#decl-byteAddress" class="code_param">byteAddress</a></span>.

#### value  : [T](/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi#typeparam-T) {#decl-value}
The value to store at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi#decl-byteAddress" class="code_param">byteAddress</a></span> if the the value at address is equal to <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi#decl-compareValue" class="code_param">compareValue</a></span>.


## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicCompareExchange</span>. For HLSL, this function
translates to <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore64-0bi">InterlockedCompareStore64</a></span> and requires shader model 6.6.
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


