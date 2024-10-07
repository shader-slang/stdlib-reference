---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.Load

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load">Load</a>(<span class="code_keyword">int</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load#decl-location" class="code_param">location</a>);

/// Requires Capability Set 2:
<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load">Load</a>(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load#decl-status" class="code_param">status</a>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load">Load</a>&lt;<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load#decl-location" class="code_param">location</a>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load">Load</a>&lt;<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load#decl-location" class="code_param">location</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load#decl-alignment" class="code_param">alignment</a>);

</pre>

## Generic Parameters

#### T {#typeparam-T}

## Parameters

#### location  : int {#decl-location}
#### status  : uint {#decl-status}
#### alignment  : int {#decl-alignment}

## Availability and Requirements

### Capability Set 1

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


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.



