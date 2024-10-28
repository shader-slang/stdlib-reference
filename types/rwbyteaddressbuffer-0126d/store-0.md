---
layout: stdlib-reference
---

# RWByteAddressBuffer\.Store

## Description

Set one value to the buffer at the specified location.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0">Store</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0#decl-address" class="code_param">address</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0">Store</a>&lt;<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0#decl-address" class="code_param">address</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0">Store</a>&lt;<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0#decl-address" class="code_param">address</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0#decl-alignment" class="code_param">alignment</a>);

</pre>

## Generic Parameters

#### T {#typeparam-T}
The type of the value to load from the buffer.


## Parameters

#### address  : uint {#decl-address}
The input address in bytes, which must be a multiple of 4.

#### value  : uint {#decl-value}
The input value.

#### value  : [T](/stdlib-reference/types/rwbyteaddressbuffer-0126d/store-0#typeparam-T) {#decl-value}
The input value.

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



