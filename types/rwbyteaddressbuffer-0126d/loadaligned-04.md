---
layout: stdlib-reference
---

# RWByteAddressBuffer\.LoadAligned

## Description

Load a value with type <span class='code'><a href="loadaligned-04.html#typeparam-T" class="code_type">T</a></span> from the buffer at the specified location with a known alignment.



## Signature 

<pre>
<a href="loadaligned-04.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="loadaligned-04.html">LoadAligned</a>&lt;<a href="loadaligned-04.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="loadaligned-04.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">uint</span> <a href="loadaligned-04.html#decl-alignment" class="code_param">alignment</a>);

<a href="loadaligned-04.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="loadaligned-04.html">LoadAligned</a>&lt;<a href="loadaligned-04.html#typeparam-T" class="code_type">T</a>&gt;(<span class="code_keyword">uint</span> <a href="loadaligned-04.html#decl-location" class="code_param">location</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T
The type of the value to load from the buffer.


## Parameters

####  <a id="decl-location"></a>location  : uint
The input address in bytes, which must be a multiple of <span class='code'><a href="loadaligned-04.html#decl-alignment" class="code_param">alignment</a></span>.

####  <a id="decl-alignment"></a>alignment  : uint
The known alignment of <span class='code'><a href="loadaligned-04.html#decl-location" class="code_param">location</a></span> in bytes; a compile-time constant.


## Return value
The value loaded from the buffer.

## Remarks

On HLSL, <span class='code'><a href="loadaligned-04.html#decl-alignment" class="code_param">alignment</a></span> is informational only and does not affect the emitted intrinsic.
On other targets, <span class='code'><a href="loadaligned-04.html#decl-alignment" class="code_param">alignment</a></span> is forwarded to the lowered load instruction.


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

#### llvm
Available in all stages.



