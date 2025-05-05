---
layout: stdlib-reference
---

# RWByteAddressBuffer\.Store3

## Description

Set three values to the buffer at the specified location.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store3-0">Store3</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store3-0#decl-address" class="code_param">address</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store3-0#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store3-0">Store3</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store3-0#decl-address" class="code_param">address</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store3-0#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store3-0#decl-alignment" class="code_param">alignment</a>);

</pre>

## Parameters

#### address  : uint {#decl-address}
The input address in bytes, which must be a multiple of 4.

#### value  : [vector](/stdlib-reference/types/vector/index)\<uint, 3\> {#decl-value}
Three input values.

#### alignment  : uint {#decl-alignment}
Specifies the alignment of the location, which must be a multiple of 4.


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



