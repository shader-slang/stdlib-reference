---
layout: stdlib-reference
---

# RWByteAddressBuffer\.Load

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0">Load</a>(<span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#decl-location" class="code_param">location</a>);

/// Requires Capability Set 2:
<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0">Load</a>(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#decl-status" class="code_param">status</a>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0">Load</a>&lt;<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#typeparam-T" class="code_type">T</a>&gt;(<span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#decl-location" class="code_param">location</a>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0">Load</a>&lt;<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#decl-location" class="code_param">location</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#decl-alignment" class="code_param">alignment</a>);

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

#### wgsl
Available in all stages.

#### spirv
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.



