---
layout: stdlib-reference
---

# storeAligned

## Description

Store a value to a pointer with a known alignment.
Aligned stores are more efficient than unaligned stores on some platforms.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/storealigned-5">storeAligned</a>&lt;<a href="/stdlib-reference/global-decls/storealigned-5#decl-alignment" class="code_var">alignment</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/storealigned-5#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/types/ptr-0/index" class="code_type">Ptr</a>&lt;<a href="/stdlib-reference/global-decls/storealigned-5#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/global-decls/storealigned-5#decl-ptr" class="code_param">ptr</a>,
    <a href="/stdlib-reference/global-decls/storealigned-5#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/storealigned-5#decl-value" class="code_param">value</a>);

</pre>

## Generic Parameters

#### alignment  : int {#decl-alignment}
The alignment of the store operation.

#### T {#typeparam-T}

## Parameters

#### ptr  : [Ptr](/stdlib-reference/types/ptr-0/index)\<[T](/stdlib-reference/types/ptr-0/index#typeparam-T)\> {#decl-ptr}
The pointer to store value to.

#### value  : [T](/stdlib-reference/global-decls/storealigned-5#typeparam-T) {#decl-value}
The value to store.


## Remarks
When targeting SPIRV, this function maps to an <span class='code'>OpStore</span> instruction with the <span class='code'>Aligned</span> memory operand.
The functions maps to normal store operation on other targets.


