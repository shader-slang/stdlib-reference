---
layout: stdlib-reference
---

# packUint4x8

## Description

Pack a vector of 4 unsigned 32/16 bit integers into a packed value of 4 8-bit integers, dropping unused bits.




## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="packuint4x8-4.html">packUint4x8</a>(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="packuint4x8-4.html#decl-unpackedValue" class="code_param">unpackedValue</a>);

<span class="code_keyword">uint</span> <a href="packuint4x8-4.html">packUint4x8</a>(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint16_t, 4&gt; <a href="packuint4x8-4.html#decl-unpackedValue" class="code_param">unpackedValue</a>);

</pre>

## Parameters

####  <a id="decl-unpackedValue"></a>unpackedValue  : [vector](../types/vector/index)\<uint, 4\>
####  <a id="decl-unpackedValue"></a>unpackedValue  : [vector](../types/vector/index)\<uint16\_t, 4\>

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



