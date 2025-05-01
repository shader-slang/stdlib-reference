---
layout: stdlib-reference
---

# bitfieldInsert

## Description

<span class='code'><a href="bitfieldinsert-8.html">bitfieldInsert</a></span> inserts the bits least significant bits of <span class='code'><a href="bitfieldinsert-8.html#decl-insert" class="code_param">insert</a></span> into base at <span class='code'><a href="bitfieldinsert-8.html#decl-offset" class="code_param">offset</a></span> offset.
The returned value will have bits [offset, offset + bits + 1] taken from [0, bits - 1] of <span class='code'><a href="bitfieldinsert-8.html#decl-insert" class="code_param">insert</a></span>
and all other bits taken directly from the corresponding bits of <span class='code'><a href="bitfieldinsert-8.html#decl-base" class="code_param">base</a></span>.




## Signature 

<pre>
<a href="bitfieldinsert-8.html#typeparam-T" class="code_type">T</a> <a href="bitfieldinsert-8.html">bitfieldInsert</a>&lt;<a href="bitfieldinsert-8.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="bitfieldinsert-8.html#typeparam-T" class="code_type">T</a> <a href="bitfieldinsert-8.html#decl-base" class="code_param">base</a>,
    <a href="bitfieldinsert-8.html#typeparam-T" class="code_type">T</a> <a href="bitfieldinsert-8.html#decl-insert" class="code_param">insert</a>,
    <span class="code_keyword">uint</span> <a href="bitfieldinsert-8.html#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">uint</span> <a href="bitfieldinsert-8.html#decl-bits" class="code_param">bits</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T

## Parameters

####  <a id="decl-base"></a>base  : [T](bitfieldinsert-8#typeparam-T)
####  <a id="decl-insert"></a>insert  : [T](bitfieldinsert-8#typeparam-T)
####  <a id="decl-offset"></a>offset  : uint
####  <a id="decl-bits"></a>bits  : uint

