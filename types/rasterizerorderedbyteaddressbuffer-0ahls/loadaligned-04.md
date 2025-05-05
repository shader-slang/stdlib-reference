---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.LoadAligned

## Description

Load an element with type <span class='code'><a href="loadaligned-04.html#typeparam-T" class="code_type">T</a></span> from the buffer at the specified location with alignment of <span class='code'><a href="loadaligned-04.html#typeparam-T" class="code_type">T</a></span>.



## Signature 

<pre>
<a href="loadaligned-04.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="loadaligned-04.html">LoadAligned</a>&lt;<a href="loadaligned-04.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">int</span> <a href="loadaligned-04.html#decl-location" class="code_param">location</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T

## Parameters

####  <a id="decl-location"></a>location  : int
The input address in bytes which must be a multiple of size of <span class='code'><a href="loadaligned-04.html#typeparam-T" class="code_type">T</a></span>.


## Return value
T value with type <span class='code'><a href="loadaligned-04.html#typeparam-T" class="code_type">T</a></span> loaded from the buffer.

## Remarks

Currently, this function only supports when <span class='code'><a href="loadaligned-04.html#typeparam-T" class="code_type">T</a></span> is scalar, vector, or matrix type.


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



