---
layout: stdlib-reference
---

# RWByteAddressBuffer\.Load2

## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/Load2">Load2</a>(<span class="code_keyword">int</span> <span class='code_param'>location</span>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/Load2">Load2</a>(
    <span class="code_keyword">int</span> <span class='code_param'>location</span>,
    <span class="code_keyword">int</span> <span class='code_param'>alignment</span>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/Load2">Load2</a>(
    <span class="code_keyword">int</span> <span class='code_param'>location</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>);

</pre>

## Parameters

* `location`
* `alignment`
* `status`

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



