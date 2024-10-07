---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.Store

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store">Store</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>address</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store">Store</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_keyword">int</span> <span class='code_param'>offset</span>,
    <span class="code_type">T</span> <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store">Store</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_keyword">int</span> <span class='code_param'>offset</span>,
    <span class="code_type">T</span> <span class='code_param'>value</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>alignment</span>);

</pre>

## Generic Parameters

#### T {#typeparam-T}

## Parameters

#### address  : uint {#decl-address}
#### value  : uint {#decl-value}
#### offset  : int {#decl-offset}
#### value  : T {#decl-value}
#### alignment  : uint {#decl-alignment}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.



