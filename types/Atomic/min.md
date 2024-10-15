---
layout: stdlib-reference
---

# Atomic\<T\>\.min

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/Atomic/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/Atomic/index" class="code_type">Atomic</a>&lt;<a href="/stdlib-reference/types/Atomic/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/Atomic/min">min</a>(
    <a href="/stdlib-reference/types/Atomic/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/Atomic/min#decl-value" class="code_param">value</a>,
    <a href="/stdlib-reference/types/MemoryOrder/index" class="code_type">MemoryOrder</a> <a href="/stdlib-reference/types/Atomic/min#decl-order" class="code_param">order</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Atomic/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/IArithmeticAtomicable/index" class="code_type">IArithmeticAtomicable</a>;

</pre>

## Parameters

#### value  : [T](/stdlib-reference/types/Atomic/index#typeparam-T) {#decl-value}
#### order  : [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) = [MemoryOrder](/stdlib-reference/types/MemoryOrder/index)\.[Relaxed](/stdlib-reference/types/MemoryOrder/index#decl-Relaxed) {#decl-order}

