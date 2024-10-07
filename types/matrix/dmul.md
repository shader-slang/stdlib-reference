---
layout: stdlib-reference
---

# matrix\<T,R,C\>\.dmul

## Description





## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, R, C&gt;.<a href="/stdlib-reference/types/matrix/dmul">dmul</a>&lt;U&gt;(
    U <span class='code_param'>a</span>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>b</span>)
    <span class='code_keyword'>where</span> U : __BuiltinRealType
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/matrix/T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### U: \_\_BuiltinRealType

## Generic Parameters

#### U: \_\_BuiltinRealType

## Parameters

#### a  : U
#### b  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\>

