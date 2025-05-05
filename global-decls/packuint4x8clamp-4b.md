---
layout: stdlib-reference
---

# packUint4x8Clamp

## Description

Pack a vector of 4 signed 32/16 bit integers into a packed value of 4 8-bit integers,
clamping each value to the range [0, 255] to ensure it fits within 8 bits.




## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="packuint4x8clamp-4b.html">packUint4x8Clamp</a>(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, 4&gt; <a href="packuint4x8clamp-4b.html#decl-unpackedValue" class="code_param">unpackedValue</a>);

<span class="code_keyword">uint</span> <a href="packuint4x8clamp-4b.html">packUint4x8Clamp</a>(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;int16_t, 4&gt; <a href="packuint4x8clamp-4b.html#decl-unpackedValue" class="code_param">unpackedValue</a>);

</pre>

## Parameters

####  <a id="decl-unpackedValue"></a>unpackedValue  : [vector](../types/vector/index)\<int, 4\>
####  <a id="decl-unpackedValue"></a>unpackedValue  : [vector](../types/vector/index)\<int16\_t, 4\>

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



