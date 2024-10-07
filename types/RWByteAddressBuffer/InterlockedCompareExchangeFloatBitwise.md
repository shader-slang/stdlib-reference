---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareExchangeFloatBitwise

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchangeFloatBitwise">InterlockedCompareExchangeFloatBitwise</a>(
    uint <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchangeFloatBitwise#decl-byteAddress" class="code_param">byteAddress</a>,
    float <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchangeFloatBitwise#decl-compareValue" class="code_param">compareValue</a>,
    float <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchangeFloatBitwise#decl-value" class="code_param">value</a>,
    out float <a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchangeFloatBitwise#decl-outOriginalValue" class="code_param">outOriginalValue</a>);

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



