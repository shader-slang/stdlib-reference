---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.Store4Aligned

## Description

Set four values to the buffer at the specified location, the address will be aligned
to the alignment of <span class='code'>uint4</span>, which is 16.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="store4aligned-06.html">Store4Aligned</a>(
    <span class="code_keyword">uint</span> <a href="store4aligned-06.html#decl-address" class="code_param">address</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="store4aligned-06.html#decl-value" class="code_param">value</a>);

</pre>

## Parameters

####  <a id="decl-address"></a>address  : uint
The input address in bytes, which must be a multiple of 16.

####  <a id="decl-value"></a>value  : [vector](../vector/index.html)\<uint, 4\>
Four input values.


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



