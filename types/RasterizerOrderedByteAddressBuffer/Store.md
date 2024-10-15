---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.Store

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store">Store</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store#decl-address" class="code_param">address</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store">Store</a>&lt;<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store#decl-offset" class="code_param">offset</a>,
    <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store">Store</a>&lt;<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store#decl-offset" class="code_param">offset</a>,
    <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store#decl-alignment" class="code_param">alignment</a>);

</pre>

## Generic Parameters

#### T {#typeparam-T}

## Parameters

#### address  : uint {#decl-address}
#### value  : uint {#decl-value}
#### offset  : int {#decl-offset}
#### value  : [T](/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store#typeparam-T) {#decl-value}
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



