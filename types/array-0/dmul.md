---
layout: stdlib-reference
---

# T\[N\]\.dmul

## Description





## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/array-0/index#typeparam-T" class="code_type">T</a>.<a href="/stdlib-reference/types/array-0/differential-0" class="code_type">Differential</a>[<a href="/stdlib-reference/types/array-0/index#decl-N" class="code_var">N</a>] <a href="/stdlib-reference/types/array-0/index#typeparam-T" class="code_type">T</a>[<a href="/stdlib-reference/types/array-0/index#decl-N" class="code_var">N</a>].<a href="/stdlib-reference/types/array-0/dmul">dmul</a>&lt;<a href="/stdlib-reference/types/array-0/dmul#typeparam-U" class="code_type">U</a>&gt;(
    <a href="/stdlib-reference/types/array-0/dmul#typeparam-U" class="code_type">U</a> <a href="/stdlib-reference/types/array-0/dmul#decl-a" class="code_param">a</a>,
    <a href="/stdlib-reference/types/array-0/index#typeparam-T" class="code_type">T</a>.<a href="/stdlib-reference/types/array-0/differential-0" class="code_type">Differential</a>[<a href="/stdlib-reference/types/array-0/index#decl-N" class="code_var">N</a>] <a href="/stdlib-reference/types/array-0/dmul#decl-b" class="code_param">b</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/array-0/dmul#typeparam-U" class="code_type">U</a> : __BuiltinRealType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/array-0/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/idifferentiable-01/index" class="code_type">IDifferentiable</a>;

</pre>

## Generic Parameters

#### U: \_\_BuiltinRealType {#typeparam-U}

## Parameters

#### a  : [U](/stdlib-reference/types/array-0/dmul#typeparam-U) {#decl-a}
#### b  : [T](/stdlib-reference/types/array-0/index#typeparam-T)\.[Differential](/stdlib-reference/types/array-0/differential-0) \[ [N](/stdlib-reference/types/array-0/index#decl-N) \] {#decl-b}

