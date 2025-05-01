---
layout: stdlib-reference
---

# bitfieldExtract

## Description

<span class='code'><a href="bitfieldextract-8.html">bitfieldExtract</a></span> extracts a subset of the bits of <span class='code'><a href="bitfieldextract-8.html#decl-value" class="code_param">value</a></span> and
returns it in the least significant bits of the result. The range of bits extracted is [offset, offset + bits - 1].




## Signature 

<pre>
<a href="bitfieldextract-8.html#typeparam-T" class="code_type">T</a> <a href="bitfieldextract-8.html">bitfieldExtract</a>&lt;<a href="bitfieldextract-8.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="bitfieldextract-8.html#typeparam-T" class="code_type">T</a> <a href="bitfieldextract-8.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="bitfieldextract-8.html#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">uint</span> <a href="bitfieldextract-8.html#decl-bits" class="code_param">bits</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T

## Parameters

####  <a id="decl-value"></a>value  : [T](bitfieldextract-8#typeparam-T)
####  <a id="decl-offset"></a>offset  : uint
####  <a id="decl-bits"></a>bits  : uint

