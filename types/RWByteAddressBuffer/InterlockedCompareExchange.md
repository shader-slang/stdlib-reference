---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareExchange

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedCompareExchange">InterlockedCompareExchange</a>(
    uint <span class='code_param'>dest</span>,
    uint <span class='code_param'>compare_value</span>,
    uint <span class='code_param'>value</span>,
    out uint <span class='code_param'>original_value</span>);

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



