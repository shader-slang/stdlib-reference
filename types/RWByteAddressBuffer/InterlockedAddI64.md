---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddI64

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddI64">InterlockedAddI64</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>byteAddress</span>,
    int64_t <span class='code_param'>valueToAdd</span>,
    <span class="code_keyword">out</span> int64_t <span class='code_param'>originalValue</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddI64">InterlockedAddI64</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>byteAddress</span>,
    int64_t <span class='code_param'>valueToAdd</span>);

</pre>

## Parameters

* `byteAddress`
* `valueToAdd`
* `originalValue`

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvInt64Atomics`.


