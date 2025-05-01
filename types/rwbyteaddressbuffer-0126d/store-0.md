---
layout: stdlib-reference
---

# RWByteAddressBuffer\.Store

## Description

Set one value to the buffer at the specified location.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="store-0.html">Store</a>(
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-address" class="code_param">address</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="store-0.html">Store</a>&lt;<a href="store-0.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-address" class="code_param">address</a>,
    <a href="store-0.html#typeparam-T" class="code_type">T</a> <a href="store-0.html#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="store-0.html">Store</a>&lt;<a href="store-0.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-address" class="code_param">address</a>,
    <a href="store-0.html#typeparam-T" class="code_type">T</a> <a href="store-0.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-alignment" class="code_param">alignment</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T
The type of the value to load from the buffer.


## Parameters

####  <a id="decl-address"></a>address  : uint
The input address in bytes, which must be a multiple of 4.

####  <a id="decl-value"></a>value  : uint
The input value.

####  <a id="decl-value"></a>value  : [T](store-0#typeparam-T)
The input value.

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



