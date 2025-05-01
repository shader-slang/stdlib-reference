---
layout: stdlib-reference
---

# packUnorm4x8

## Description

Convert a 4-component vector of normalized unsigned single/half-precision floating-point
values to four 8-bit integer values, then pack these 8-bit values into a
32-bit unsigned integer.




## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="packunorm4x8-4.html">packUnorm4x8</a>(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt; <a href="packunorm4x8-4.html#decl-unpackedValue" class="code_param">unpackedValue</a>);

<span class="code_keyword">uint</span> <a href="packunorm4x8-4.html">packUnorm4x8</a>(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, 4&gt; <a href="packunorm4x8-4.html#decl-unpackedValue" class="code_param">unpackedValue</a>);

</pre>

## Parameters

####  <a id="decl-unpackedValue"></a>unpackedValue  : [vector](../types/vector/index)\<float, 4\>
####  <a id="decl-unpackedValue"></a>unpackedValue  : [vector](../types/vector/index)\<half, 4\>

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



