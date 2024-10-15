---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.InterlockedCompareExchange

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/InterlockedCompareExchange">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/InterlockedCompareExchange#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/InterlockedCompareExchange#decl-compare_value" class="code_param">compare_value</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/InterlockedCompareExchange#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/InterlockedCompareExchange#decl-original_value" class="code_param">original_value</a>);

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



