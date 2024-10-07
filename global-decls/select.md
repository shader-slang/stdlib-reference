---
layout: stdlib-reference
---

# select

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/select#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/select">select</a>&lt;<a href="/stdlib-reference/global-decls/select#typeparam-T" class="code_type">T</a>&gt;(
condition    bool ,
ifTrue    <a href="/stdlib-reference/global-decls/select#typeparam-T" class="code_type">T</a> ,
ifFalse    <a href="/stdlib-reference/global-decls/select#typeparam-T" class="code_type">T</a> );

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/select">select</a>&lt;<a href="/stdlib-reference/global-decls/select#typeparam-T" class="code_type">T</a>, N:int&gt;(
condition    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
ifTrue    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
ifFalse    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; );

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

