---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareExchangeFloatBitwise

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv">InterlockedCompareExchangeFloatBitwise</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv#decl-byteAddress" class="code_param">byteAddress</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv#decl-compareValue" class="code_param">compareValue</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchangefloatbitwise-0biqv#decl-outOriginalValue" class="code_param">outOriginalValue</a>);

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



