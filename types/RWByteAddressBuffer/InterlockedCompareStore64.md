---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareStore64

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareStore64">InterlockedCompareStore64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareStore64#decl-byteAddress" class="code_param">byteAddress</a>,
    int64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareStore64#decl-compareValue" class="code_param">compareValue</a>,
    int64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareStore64#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareStore64">InterlockedCompareStore64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareStore64#decl-byteAddress" class="code_param">byteAddress</a>,
    uint64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareStore64#decl-compareValue" class="code_param">compareValue</a>,
    uint64_t <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareStore64#decl-value" class="code_param">value</a>);

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



