---
layout: stdlib-reference
---

# RWByteAddressBuffer\.Load3Aligned

## Description

Load three 32-bit unsigned integers from the buffer at the specified location with a known alignment.



## Signature 

<pre>
<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="load3aligned-05.html">Load3Aligned</a>(
    <span class="code_keyword">uint</span> <a href="load3aligned-05.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">uint</span> <a href="load3aligned-05.html#decl-alignment" class="code_param">alignment</a>);

<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="load3aligned-05.html">Load3Aligned</a>(<span class="code_keyword">uint</span> <a href="load3aligned-05.html#decl-location" class="code_param">location</a>);

</pre>

## Parameters

####  <a id="decl-location"></a>location  : uint
The input address in bytes, which must be a multiple of 4.

####  <a id="decl-alignment"></a>alignment  : uint
The known alignment of <span class='code'><a href="load3aligned-05.html#decl-location" class="code_param">location</a></span>, which must be a multiple of 4.


## Return value
Three 32-bit unsigned integers loaded from the buffer.

## Remarks

On HLSL, <span class='code'><a href="load3aligned-05.html#decl-alignment" class="code_param">alignment</a></span> is informational only; the load is emitted as the native <span class='code'>.<a href="load3-0.html">Load3</a></span>
intrinsic, which does not accept an alignment operand. On other targets, <span class='code'><a href="load3aligned-05.html#decl-alignment" class="code_param">alignment</a></span> is
forwarded to the lowered load instruction.


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



