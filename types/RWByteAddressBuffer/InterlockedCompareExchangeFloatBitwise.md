---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareExchangeFloatBitwise

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchangeFloatBitwise">InterlockedCompareExchangeFloatBitwise</a>(
    uint <span class='code_param'>byteAddress</span>,
    float <span class='code_param'>compareValue</span>,
    float <span class='code_param'>value</span>,
    out float <span class='code_param'>outOriginalValue</span>);

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



