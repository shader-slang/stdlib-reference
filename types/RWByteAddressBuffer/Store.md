---
layout: stdlib-reference
---

# RWByteAddressBuffer\.Store

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/Store">Store</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>address</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/Store">Store</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_keyword">int</span> <span class='code_param'>offset</span>,
    <span class="code_type">T</span> <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/Store">Store</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_keyword">int</span> <span class='code_param'>offset</span>,
    <span class="code_type">T</span> <span class='code_param'>value</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>alignment</span>);

</pre>

## Parameters

#### T
#### address  : uint
#### value  : uint
#### offset  : int
#### value  : T
#### alignment  : uint

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



