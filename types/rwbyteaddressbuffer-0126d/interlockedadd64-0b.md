---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAdd64

## Description

Perform a 64-bit integer atomic add operation at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b">InterlockedAdd64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b#decl-byteAddress" class="code_param">byteAddress</a>,
    int64_t <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b">InterlockedAdd64</a>&lt;<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b#decl-byteAddress" class="code_param">byteAddress</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b#decl-outOriginalValue" class="code_param">outOriginalValue</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b#typeparam-T" class="code_type">T</a> : __BuiltinInt64Type;

</pre>

## Generic Parameters

#### T: \_\_BuiltinInt64Type {#typeparam-T}

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
The address at which to perform the atomic add operation.

#### value  : int64\_t {#decl-value}
The operand for the add operation.

#### value  : [T](/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b#typeparam-T) {#decl-value}
The operand for the add operation.

#### outOriginalValue  : [T](/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b#typeparam-T) {#decl-outOriginalValue}
The original value at <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedadd64-0b#decl-byteAddress" class="code_param">byteAddress</a></span> before the add operation.


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


