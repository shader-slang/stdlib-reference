---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddI64

## Description

Perform a 64-bit integer atomic add operation at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddi64-0be#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddi64-0be">InterlockedAddI64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddi64-0be#decl-byteAddress" class="code_param">byteAddress</a>,
    int64_t <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddi64-0be#decl-valueToAdd" class="code_param">valueToAdd</a>,
    <span class="code_keyword">out</span> int64_t <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddi64-0be#decl-originalValue" class="code_param">originalValue</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddi64-0be">InterlockedAddI64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddi64-0be#decl-byteAddress" class="code_param">byteAddress</a>,
    int64_t <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddi64-0be#decl-valueToAdd" class="code_param">valueToAdd</a>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
The address at which to perform the atomic add operation.

#### valueToAdd  : int64\_t {#decl-valueToAdd}
The value to add to the value at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddi64-0be#decl-byteAddress" class="code_param">byteAddress</a></span>.

#### originalValue  : int64\_t {#decl-originalValue}
The original value at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddi64-0be#decl-byteAddress" class="code_param">byteAddress</a></span> before the add operation.


## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicAdd</span>. For HLSL, this function
translates to <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b">InterlockedAdd64</a></span> and requires shader model 6.6.
For CUDA, this function maps to <span class='code'>atomicAdd</span>.


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


