---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareStore64

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareStore64">InterlockedCompareStore64</a>(
    uint <span class='code_param'>byteAddress</span>,
    int64_t <span class='code_param'>compareValue</span>,
    int64_t <span class='code_param'>value</span>);

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareStore64">InterlockedCompareStore64</a>(
    uint <span class='code_param'>byteAddress</span>,
    uint64_t <span class='code_param'>compareValue</span>,
    uint64_t <span class='code_param'>value</span>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
#### compareValue  : int64\_t {#decl-compareValue}
#### value  : int64\_t {#decl-value}
#### compareValue  : uint64\_t {#decl-compareValue}
#### value  : uint64\_t {#decl-value}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



