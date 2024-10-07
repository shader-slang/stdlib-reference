---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.Store

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store">Store</a>(
    uint <span class='code_param'>address</span>,
    uint <span class='code_param'>value</span>);

void <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store">Store</a>&lt;T&gt;(
    int <span class='code_param'>offset</span>,
    T <span class='code_param'>value</span>);

void <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Store">Store</a>&lt;T&gt;(
    int <span class='code_param'>offset</span>,
    T <span class='code_param'>value</span>,
    uint <span class='code_param'>alignment</span>);

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



