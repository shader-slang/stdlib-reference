---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.Load

## Description

Load a 32-bit unsigned integer from the buffer at the specified location.



## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">uint</span> <a href="index.html" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="load-0.html">Load</a>(<span class="code_keyword">int</span> <a href="load-0.html#decl-location" class="code_param">location</a>);

/// Requires Capability Set 2:
<span class="code_keyword">uint</span> <a href="index.html" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="load-0.html">Load</a>(
    <span class="code_keyword">int</span> <a href="load-0.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="load-0.html#decl-status" class="code_param">status</a>);

/// Requires Capability Set 1:
<a href="load-0.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="load-0.html">Load</a>&lt;<a href="load-0.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="load-0.html#decl-location" class="code_param">location</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T

## Parameters

####  <a id="decl-location"></a>location  : int
The input address in bytes, which must be a multiple of 4.

####  <a id="decl-status"></a>status  : uint
####  <a id="decl-location"></a>location  : uint
The input address in bytes, which must be a multiple of 4.


## Return value
The 32-bit unsigned integer loaded from the buffer.


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



