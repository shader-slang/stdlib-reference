---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAnd64

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAnd64">InterlockedAnd64</a>(
    uint <span class='code_param'>byteAddress</span>,
    uint64_t <span class='code_param'>value</span>);

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAnd64">InterlockedAnd64</a>(
    uint <span class='code_param'>byteAddress</span>,
    uint64_t <span class='code_param'>value</span>,
    out uint64_t <span class='code_param'>outOriginalValue</span>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
#### value  : uint64\_t {#decl-value}
#### outOriginalValue  : uint64\_t {#decl-outOriginalValue}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



