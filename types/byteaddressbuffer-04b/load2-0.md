---
layout: stdlib-reference
---

# ByteAddressBuffer\.Load2

## Description

Load two 32-bit unsigned integers from the buffer at the specified location.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="index.html" class="code_type">ByteAddressBuffer</a>.<a href="load2-0.html">Load2</a>(<span class="code_keyword">uint</span> <a href="load2-0.html#decl-location" class="code_param">location</a>);

/// Requires Capability Set 2:
<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="index.html" class="code_type">ByteAddressBuffer</a>.<a href="load2-0.html">Load2</a>(
    <span class="code_keyword">uint</span> <a href="load2-0.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="load2-0.html#decl-status" class="code_param">status</a>);

</pre>

## Parameters

####  <a id="decl-location"></a>location  : uint
The input address in bytes, which must be a multiple of 4.

####  <a id="decl-status"></a>status  : uint

## Return value
Two 32-bit unsigned integers loaded from the buffer.


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

#### llvm
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.



