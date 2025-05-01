---
layout: stdlib-reference
---

# RWByteAddressBuffer\.Store3

## Description

Set three values to the buffer at the specified location.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="store3-0.html">Store3</a>(
    <span class="code_keyword">uint</span> <a href="store3-0.html#decl-address" class="code_param">address</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="store3-0.html#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="store3-0.html">Store3</a>(
    <span class="code_keyword">uint</span> <a href="store3-0.html#decl-address" class="code_param">address</a>,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="store3-0.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="store3-0.html#decl-alignment" class="code_param">alignment</a>);

</pre>

## Parameters

####  <a id="decl-address"></a>address  : uint
The input address in bytes, which must be a multiple of 4.

####  <a id="decl-value"></a>value  : [vector](../vector/index)\<uint, 3\>
Three input values.

####  <a id="decl-alignment"></a>alignment  : uint
Specifies the alignment of the location, which must be a multiple of 4.


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



