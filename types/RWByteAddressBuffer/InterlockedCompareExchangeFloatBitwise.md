---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareExchangeFloatBitwise

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchangeFloatBitwise">InterlockedCompareExchangeFloatBitwise</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>byteAddress</span>,
    <span class="code_keyword">float</span> <span class='code_param'>compareValue</span>,
    <span class="code_keyword">float</span> <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>outOriginalValue</span>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
#### compareValue  : float {#decl-compareValue}
#### value  : float {#decl-value}
#### outOriginalValue  : float {#decl-outOriginalValue}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



