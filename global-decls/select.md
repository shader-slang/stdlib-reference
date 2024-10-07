---
layout: stdlib-reference
---

# select

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/select#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/select">select</a>&lt;<a href="/stdlib-reference/global-decls/select#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/select#decl-condition" class="code_param">condition</a>,
    <a href="/stdlib-reference/global-decls/select#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/select#decl-ifTrue" class="code_param">ifTrue</a>,
    <a href="/stdlib-reference/global-decls/select#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/select#decl-ifFalse" class="code_param">ifFalse</a>);

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/global-decls/select#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/select#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/select">select</a>&lt;<a href="/stdlib-reference/global-decls/select#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/select#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">bool</span>, <a href="/stdlib-reference/global-decls/select#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/select#decl-condition" class="code_param">condition</a>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/global-decls/select#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/select#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/select#decl-ifTrue" class="code_param">ifTrue</a>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/global-decls/select#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/select#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/select#decl-ifFalse" class="code_param">ifFalse</a>);

</pre>

## Generic Parameters

#### T {#typeparam-T}

## Generic Parameters

#### T {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### condition  : bool {#decl-condition}
#### ifTrue  : [T](/stdlib-reference/global-decls/select#typeparam-T) {#decl-ifTrue}
#### ifFalse  : [T](/stdlib-reference/global-decls/select#typeparam-T) {#decl-ifFalse}
#### condition  : [vector](/stdlib-reference/types/vector/index)\<bool, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-condition}
#### ifTrue  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-ifTrue}
#### ifFalse  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-ifFalse}

