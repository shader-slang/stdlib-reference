---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.StoreAligned

## Description

Set four values to the buffer at the specified location, the address will be aligned
to the alignment of <span class='code'><a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/storealigned-05#typeparam-T" class="code_type">T</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/storealigned-05">StoreAligned</a>&lt;<a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/storealigned-05#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/storealigned-05#decl-address" class="code_param">address</a>,
    <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/storealigned-05#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/storealigned-05#decl-value" class="code_param">value</a>);

</pre>

## Generic Parameters

#### T {#typeparam-T}
The type of the input value.


## Parameters

#### address  : uint {#decl-address}
The input address in bytes, which must be a multiple of size of <span class='code'><a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/storealigned-05#typeparam-T" class="code_type">T</a></span>.

#### value  : [T](/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/storealigned-05#typeparam-T) {#decl-value}
The input value.


