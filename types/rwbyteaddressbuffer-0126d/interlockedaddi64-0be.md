---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddI64

## Description





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
#### valueToAdd  : int64\_t {#decl-valueToAdd}
#### originalValue  : int64\_t {#decl-originalValue}

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


