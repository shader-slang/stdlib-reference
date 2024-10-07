---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareExchange

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchange">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>compare_value</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>original_value</span>);

</pre>

## Parameters

#### dest  : uint {#decl-dest}
#### compare\_value  : uint {#decl-compare_value}
#### value  : uint {#decl-value}
#### original\_value  : uint {#decl-original_value}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.



