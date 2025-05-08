---
layout: stdlib-reference
---

# packUnorm2x16

## Description

Convert a 2-component vector of normalized unsigned single/half-precision floating-point
values to two 16-bit integer values, then pack these 16-bit values into a
32-bit unsigned integer.




## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="packunorm2x16-4.html">packUnorm2x16</a>(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <a href="packunorm2x16-4.html#decl-unpackedValue" class="code_param">unpackedValue</a>);

<span class="code_keyword">uint</span> <a href="packunorm2x16-4.html">packUnorm2x16</a>(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, 2&gt; <a href="packunorm2x16-4.html#decl-unpackedValue" class="code_param">unpackedValue</a>);

</pre>

## Parameters

####  <a id="decl-unpackedValue"></a>unpackedValue  : [vector](../types/vector/index.html)\<float, 2\>
####  <a id="decl-unpackedValue"></a>unpackedValue  : [vector](../types/vector/index.html)\<half, 2\>

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



