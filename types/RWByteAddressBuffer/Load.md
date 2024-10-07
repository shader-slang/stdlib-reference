---
layout: stdlib-reference
---

# RWByteAddressBuffer\.Load

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
uint <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/Load">Load</a>(int <a href="/stdlib-reference/types/RWByteAddressBuffer/Load#decl-location" class="code_param">location</a>);

/// Requires Capability Set 2:
uint <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/Load">Load</a>(
<a href="/stdlib-reference/types/RWByteAddressBuffer/Load#decl-location" class="code_param">location</a>    int ,
status    out uint );

/// Requires Capability Set 1:
T <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/Load">Load</a>&lt;T&gt;(int <a href="/stdlib-reference/types/RWByteAddressBuffer/Load#decl-location" class="code_param">location</a>);

/// Requires Capability Set 1:
T <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/Load">Load</a>&lt;T&gt;(
<a href="/stdlib-reference/types/RWByteAddressBuffer/Load#decl-location" class="code_param">location</a>    int ,
alignment    int );

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



