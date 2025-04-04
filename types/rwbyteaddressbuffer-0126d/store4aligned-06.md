---
layout: stdlib-reference
---

# RWByteAddressBuffer\.Store4Aligned

## Description

Set four values to the buffer at the specified location, the address will be aligned
to the alignment of <span class='code'>uint4</span>, which is 16.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store4aligned-06">Store4Aligned</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store4aligned-06#decl-address" class="code_param">address</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store4aligned-06#decl-value" class="code_param">value</a>);

</pre>

## Parameters

#### address  : uint {#decl-address}
The input address in bytes, which must be a multiple of 16.

#### value  : [vector](/stdlib-reference/types/vector/index)\<uint, 4\> {#decl-value}
Four input values.


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



