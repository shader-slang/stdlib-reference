---
layout: stdlib-reference
---

# loadAligned

## Description

Load a value from a pointer with a known alignment.
Aligned loads are more efficient than unaligned loads on some platforms.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/loadaligned-4#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/loadaligned-4">loadAligned</a>&lt;<a href="/stdlib-reference/global-decls/loadaligned-4#decl-alignment" class="code_var">alignment</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/loadaligned-4#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/types/ptr-0/index" class="code_type">Ptr</a>&lt;<a href="/stdlib-reference/global-decls/loadaligned-4#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/global-decls/loadaligned-4#decl-ptr" class="code_param">ptr</a>);

</pre>

## Generic Parameters

#### alignment  : int {#decl-alignment}
The alignment of the load operation.

#### T {#typeparam-T}

## Parameters

#### ptr  : [Ptr](/stdlib-reference/types/ptr-0/index)\<[T](/stdlib-reference/types/ptr-0/index#typeparam-T)\> {#decl-ptr}
The pointer to load from.


## Return value
The value loaded from the pointer.

## Remarks
When targeting SPIRV, this function maps to an <span class='code'>OpLoad</span> instruction with the <span class='code'>Aligned</span> memory operand.
The functions maps to normal load operation on other targets.


