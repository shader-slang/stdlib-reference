---
layout: stdlib-reference
---

# AtomicAdd\.store\_forward

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/atomicadd-06/index" class="code_type">AtomicAdd</a>.<a href="/stdlib-reference/types/atomicadd-06/store_forward">store_forward</a>&lt;<a href="/stdlib-reference/types/atomicadd-06/store_forward#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/atomicadd-06/store_forward#decl-i" class="code_param">i</a>,
    <a href="/stdlib-reference/types/atomicadd-06/store_forward#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/atomicadd-06/store_forward#decl-dx" class="code_param">dx</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/atomicadd-06/store_forward#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/atomicadd-06/index" class="code_type">AtomicAdd</a>.<a href="/stdlib-reference/types/atomicadd-06/store_forward">store_forward</a>&lt;<a href="/stdlib-reference/types/atomicadd-06/store_forward#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/atomicadd-06/store_forward#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/atomicadd-06/store_forward#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/atomicadd-06/store_forward#decl-i" class="code_param">i</a>,
    <a href="/stdlib-reference/types/atomicadd-06/store_forward#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/atomicadd-06/store_forward#decl-dx" class="code_param">dx</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/atomicadd-06/store_forward#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### i  : uint {#decl-i}
#### dx  : [T](/stdlib-reference/types/atomicadd-06/store_forward#typeparam-T) {#decl-dx}
#### i  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-i}

