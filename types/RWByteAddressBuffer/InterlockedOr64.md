---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedOr64

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedOr64">InterlockedOr64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedOr64#decl-byteAddress" class="code_param">byteAddress</a>,
    uint64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedOr64#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedOr64">InterlockedOr64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedOr64#decl-byteAddress" class="code_param">byteAddress</a>,
    uint64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedOr64#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> uint64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedOr64#decl-outOriginalValue" class="code_param">outOriginalValue</a>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
#### value  : uint64\_t {#decl-value}
#### outOriginalValue  : uint64\_t {#decl-outOriginalValue}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



