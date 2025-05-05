---
layout: stdlib-reference
---

# unpackUnorm4x8ToFloat

## Description

Unpack a 32-bit unsigned integer into four 8-bit unsigned integers.
Then, each 8-bit value is converted to a normalized single-precision
floating-point value to generate a 4-component vector.




## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt; <a href="unpackunorm4x8tofloat-6eg.html">unpackUnorm4x8ToFloat</a>(<span class="code_keyword">uint</span> <a href="unpackunorm4x8tofloat-6eg.html#decl-packedValue" class="code_param">packedValue</a>);

</pre>

## Parameters

####  <a id="decl-packedValue"></a>packedValue  : uint

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



