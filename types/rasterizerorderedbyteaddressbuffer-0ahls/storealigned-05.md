---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.StoreAligned

## Description

Set four values to the buffer at the specified location, the address will be aligned
to the alignment of <span class='code'><a href="storealigned-05.html#typeparam-T" class="code_type">T</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="storealigned-05.html">StoreAligned</a>&lt;<a href="storealigned-05.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="storealigned-05.html#decl-address" class="code_param">address</a>,
    <a href="storealigned-05.html#typeparam-T" class="code_type">T</a> <a href="storealigned-05.html#decl-value" class="code_param">value</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T
The type of the input value.


## Parameters

####  <a id="decl-address"></a>address  : uint
The input address in bytes, which must be a multiple of size of <span class='code'><a href="storealigned-05.html#typeparam-T" class="code_type">T</a></span>.

####  <a id="decl-value"></a>value  : [T](storealigned-05.html#typeparam-T)
The input value.


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



