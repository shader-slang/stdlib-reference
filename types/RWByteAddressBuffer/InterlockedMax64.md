---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedMax64

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64">InterlockedMax64</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>byteAddress</span>,
    int64_t <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64">InterlockedMax64</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>byteAddress</span>,
    int64_t <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> int64_t <span class='code_param'>outOriginalValue</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64">InterlockedMax64</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>byteAddress</span>,
    uint64_t <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedMax64">InterlockedMax64</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>byteAddress</span>,
    uint64_t <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> uint64_t <span class='code_param'>outOriginalValue</span>);

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



