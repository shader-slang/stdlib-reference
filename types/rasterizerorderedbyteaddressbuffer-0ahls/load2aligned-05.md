---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.Load2Aligned

## Description

Load two 32-bit unsigned integers from the buffer at the specified location with alignment
of <span class='code'>uint2</span>, which is 8.



## Signature 

<pre>
<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="index.html" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="load2aligned-05.html">Load2Aligned</a>(
    <span class="code_keyword">uint</span> <a href="load2aligned-05.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">uint</span> <a href="load2aligned-05.html#decl-alignment" class="code_param">alignment</a>);

<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="index.html" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="load2aligned-05.html">Load2Aligned</a>(
    <span class="code_keyword">uint</span> <a href="load2aligned-05.html#decl-location" class="code_param">location</a>);

</pre>

## Parameters

####  <a id="decl-location"></a>location  : uint
The input address in bytes, which must be a multiple of alignment of 8.

####  <a id="decl-alignment"></a>alignment  : uint

## Return value
<span class='code'>uint2</span> Two 32-bit unsigned integers loaded from the buffer.


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

#### wgsl
Available in all stages.

#### spirv
Available in all stages.



