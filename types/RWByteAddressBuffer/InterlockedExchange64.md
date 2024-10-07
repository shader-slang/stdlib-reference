---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedExchange64

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedExchange64">InterlockedExchange64</a>(
    uint <span class='code_param'>byteAddress</span>,
    int64_t <span class='code_param'>value</span>,
    out int64_t <span class='code_param'>outOriginalValue</span>);

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedExchange64">InterlockedExchange64</a>(
    uint <span class='code_param'>byteAddress</span>,
    uint64_t <span class='code_param'>value</span>,
    out uint64_t <span class='code_param'>outOriginalValue</span>);

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



