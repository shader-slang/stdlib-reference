---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAdd64

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64">InterlockedAdd64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-byteAddress" class="code_param">byteAddress</a>,
    int64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-valueToAdd" class="code_param">valueToAdd</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64">InterlockedAdd64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-byteAddress" class="code_param">byteAddress</a>,
    int64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-valueToAdd" class="code_param">valueToAdd</a>,
    <span class="code_keyword">out</span> int64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-outOriginalValue" class="code_param">outOriginalValue</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64">InterlockedAdd64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-byteAddress" class="code_param">byteAddress</a>,
    uint64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-valueToAdd" class="code_param">valueToAdd</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64">InterlockedAdd64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-byteAddress" class="code_param">byteAddress</a>,
    uint64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-valueToAdd" class="code_param">valueToAdd</a>,
    <span class="code_keyword">out</span> uint64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-outOriginalValue" class="code_param">outOriginalValue</a>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
#### valueToAdd  : int64\_t {#decl-valueToAdd}
#### outOriginalValue  : int64\_t {#decl-outOriginalValue}
#### valueToAdd  : uint64\_t {#decl-valueToAdd}
#### outOriginalValue  : uint64\_t {#decl-outOriginalValue}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvInt64Atomics`.


