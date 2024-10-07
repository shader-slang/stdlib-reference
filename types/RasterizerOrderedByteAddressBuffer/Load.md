---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.Load

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load">Load</a>(<span class="code_keyword">int</span> <span class='code_param'>location</span>);

/// Requires Capability Set 2:
<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load">Load</a>(
    <span class="code_keyword">int</span> <span class='code_param'>location</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>);

/// Requires Capability Set 1:
<span class="code_type">T</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load">Load</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_keyword">int</span> <span class='code_param'>location</span>);

/// Requires Capability Set 1:
<span class="code_type">T</span> <a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/RasterizerOrderedByteAddressBuffer/Load">Load</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_keyword">int</span> <span class='code_param'>location</span>,
    <span class="code_keyword">int</span> <span class='code_param'>alignment</span>);

</pre>

## Generic Parameters

#### T

## Parameters

#### location  : int
#### status  : uint
#### alignment  : int

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



