---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareStore64

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareStore64">InterlockedCompareStore64</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>byteAddress</span>,
    int64_t <span class='code_param'>compareValue</span>,
    int64_t <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareStore64">InterlockedCompareStore64</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>byteAddress</span>,
    uint64_t <span class='code_param'>compareValue</span>,
    uint64_t <span class='code_param'>value</span>);

</pre>

## Parameters

* `byteAddress`
* `compareValue`
* `value`

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



