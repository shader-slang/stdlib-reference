---
layout: stdlib-reference
---

# bitfieldExtract

## Description

<span class='code'><a href="/stdlib-reference/global-decls/bitfieldextract-8">bitfieldExtract</a></span> extracts a subset of the bits of <span class='code'><a href="/stdlib-reference/global-decls/bitfieldextract-8#decl-value" class="code_param">value</a></span> and
returns it in the least significant bits of the result. The range of bits extracted is [offset, offset + bits - 1].




## Signature 

<pre>
<a href="/stdlib-reference/global-decls/bitfieldextract-8#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/bitfieldextract-8">bitfieldExtract</a>&lt;<a href="/stdlib-reference/global-decls/bitfieldextract-8#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/bitfieldextract-8#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/bitfieldextract-8#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/bitfieldextract-8#decl-offset" class="code_param">offset</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/bitfieldextract-8#decl-bits" class="code_param">bits</a>);

</pre>

## Generic Parameters

#### T {#typeparam-T}

## Parameters

#### value  : [T](/stdlib-reference/global-decls/bitfieldextract-8#typeparam-T) {#decl-value}
#### offset  : uint {#decl-offset}
#### bits  : uint {#decl-bits}

