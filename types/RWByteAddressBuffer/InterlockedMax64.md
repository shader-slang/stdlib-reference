---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedMax64

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64">InterlockedMax64</a>(
    uint <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64#decl-byteAddress" class="code_param">byteAddress</a>,
    int64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64#decl-value" class="code_param">value</a>);

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64">InterlockedMax64</a>(
    uint <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64#decl-byteAddress" class="code_param">byteAddress</a>,
    int64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64#decl-value" class="code_param">value</a>,
    out int64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64#decl-outOriginalValue" class="code_param">outOriginalValue</a>);

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64">InterlockedMax64</a>(
    uint <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64#decl-byteAddress" class="code_param">byteAddress</a>,
    uint64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64#decl-value" class="code_param">value</a>);

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64">InterlockedMax64</a>(
    uint <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64#decl-byteAddress" class="code_param">byteAddress</a>,
    uint64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64#decl-value" class="code_param">value</a>,
    out uint64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64#decl-outOriginalValue" class="code_param">outOriginalValue</a>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
#### value  : int64\_t {#decl-value}
#### outOriginalValue  : int64\_t {#decl-outOriginalValue}
#### value  : uint64\_t {#decl-value}
#### outOriginalValue  : uint64\_t {#decl-outOriginalValue}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



