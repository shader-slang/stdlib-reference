---
layout: stdlib-reference
---

# RWByteAddressBuffer\.Load4

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load4-0">Load4</a>(<span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load4-0#decl-location" class="code_param">location</a>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load4-0">Load4</a>(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load4-0#decl-location" class="code_param">location</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load4-0#decl-alignment" class="code_param">alignment</a>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load4-0">Load4</a>(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load4-0#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load4-0#decl-status" class="code_param">status</a>);

</pre>

## Parameters

#### location  : int {#decl-location}
#### alignment  : int {#decl-alignment}
#### status  : uint {#decl-status}

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


