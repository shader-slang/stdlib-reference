---
layout: stdlib-reference
---

# matrix\<T,R,C\>\.dmul

## Description





## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt;.<a href="/stdlib-reference/types/matrix/dmul">dmul</a>&lt;<a href="/stdlib-reference/types/matrix/dmul#typeparam-U" class="code_type">U</a>&gt;(
    <a href="/stdlib-reference/types/matrix/dmul#typeparam-U" class="code_type">U</a> <a href="/stdlib-reference/types/matrix/dmul#decl-a" class="code_param">a</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/types/matrix/dmul#decl-b" class="code_param">b</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/dmul#typeparam-U" class="code_type">U</a> : __BuiltinRealType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/t-0" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/builtinfloatingpointtype-0129hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### U: \_\_BuiltinRealType {#typeparam-U}

## Parameters

#### a  : [U](/stdlib-reference/types/matrix/dmul#typeparam-U) {#decl-a}
#### b  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-b}

