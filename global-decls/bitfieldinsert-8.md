---
layout: stdlib-reference
---

# bitfieldInsert

## Description

<span class='code'><a href="/stdlib-reference/global-decls/bitfieldinsert-8">bitfieldInsert</a></span> inserts the bits least significant bits of <span class='code'><a href="/stdlib-reference/global-decls/bitfieldinsert-8#decl-insert" class="code_param">insert</a></span> into base at <span class='code'><a href="/stdlib-reference/global-decls/bitfieldinsert-8#decl-offset" class="code_param">offset</a></span> offset.
The returned value will have bits [offset, offset + bits + 1] taken from [0, bits - 1] of <span class='code'><a href="/stdlib-reference/global-decls/bitfieldinsert-8#decl-insert" class="code_param">insert</a></span>
and all other bits taken directly from the corresponding bits of <span class='code'><a href="/stdlib-reference/global-decls/bitfieldinsert-8#decl-base" class="code_param">base</a></span>.




## Signature 

<pre>
<a href="/stdlib-reference/global-decls/bitfieldinsert-8#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/bitfieldinsert-8">bitfieldInsert</a>&lt;<a href="/stdlib-reference/global-decls/bitfieldinsert-8#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/bitfieldinsert-8#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/bitfieldinsert-8#decl-base" class="code_param">base</a>,
    <a href="/stdlib-reference/global-decls/bitfieldinsert-8#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/bitfieldinsert-8#decl-insert" class="code_param">insert</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/bitfieldinsert-8#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/bitfieldinsert-8#decl-bits" class="code_param">bits</a>);

</pre>

## Generic Parameters

#### T {#typeparam-T}

## Parameters

#### base  : [T](/stdlib-reference/global-decls/bitfieldinsert-8#typeparam-T) {#decl-base}
#### insert  : [T](/stdlib-reference/global-decls/bitfieldinsert-8#typeparam-T) {#decl-insert}
#### offset  : uint {#decl-offset}
#### bits  : uint {#decl-bits}

