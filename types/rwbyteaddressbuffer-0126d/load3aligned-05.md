---
layout: stdlib-reference
---

# RWByteAddressBuffer\.Load3Aligned

## Description

Load three 32-bit unsigned integers from the buffer at the specified location with alignment
of <span class='code'>uint3</span>, which is 12.



## Signature 

<pre>
<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="load3aligned-05.html">Load3Aligned</a>(<span class="code_keyword">int</span> <a href="load3aligned-05.html#decl-location" class="code_param">location</a>);

</pre>

## Parameters

####  <a id="decl-location"></a>location  : int
The input address in bytes which must be a multiple of alignment of 12.


## Return value
<span class='code'>uint3</span> Three 32-bit unsigned integer value loaded from the buffer.


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



