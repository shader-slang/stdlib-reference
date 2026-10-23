---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.LoadAligned

## Description

Load a value with type <span class='code'><a href="loadaligned-04.html#typeparam-T" class="code_type">T</a></span> from the buffer at the specified location with a known alignment.



## Signature 

<pre>
<a href="loadaligned-04.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="loadaligned-04.html">LoadAligned</a>&lt;<a href="loadaligned-04.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="loadaligned-04.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">uint</span> <a href="loadaligned-04.html#decl-alignment" class="code_param">alignment</a>);

<a href="loadaligned-04.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="loadaligned-04.html">LoadAligned</a>&lt;<a href="loadaligned-04.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="loadaligned-04.html#decl-location" class="code_param">location</a>);

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

<span class='code'><a href="loadaligned-04.html#decl-alignment" class="code_param">alignment</a></span> selects the widest power-of-two-width access it permits: a single wide load
when it covers the whole <span class='code'><a href="loadaligned-04.html#typeparam-T" class="code_type">T</a></span>, otherwise the widest aligned chunks with per-component loads
for any remainder. The rule applies to each vector within <span class='code'><a href="loadaligned-04.html#typeparam-T" class="code_type">T</a></span>: a struct is loaded field by
field, a 3-component vector is always split because no power-of-two <span class='code'><a href="loadaligned-04.html#decl-alignment" class="code_param">alignment</a></span> is a
multiple of its size, and a partially covered <span class='code'><span class="code_keyword">bool</span></span> vector is loaded per component. For
example, <span class='code'><a href="loadaligned-04.html">LoadAligned</a>&lt;float4&gt;(<a href="loadaligned-04.html#decl-location" class="code_param">location</a>, 8)</span> lowers as follows:
- HLSL with a Shader Model 5.0 or earlier profile: four <span class='code'><span class="code_keyword">uint</span></span> loads, each converted with
<span class='code'><a href="../../global-decls/asfloat.html">asfloat</a></span>.
- HLSL with a Shader Model 5.1 or later profile, SPIR-V, GLSL, CUDA and C++: two <span class='code'>float2</span>
loads.
- Metal, WGSL and LLVM-based CPU targets: four per-component loads, for any valid
<span class='code'><a href="loadaligned-04.html#decl-alignment" class="code_param">alignment</a></span>.


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



