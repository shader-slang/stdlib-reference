---
layout: stdlib-reference
---

# Atomic\<T\>\.compareExchange

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/Atomic/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/Atomic/index" class="code_type">Atomic</a>&lt;<a href="/stdlib-reference/types/Atomic/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/Atomic/compareExchange">compareExchange</a>(
    <a href="/stdlib-reference/types/Atomic/index#typeparam-T" class="code_type">T</a> <span class='code_param'>compareValue</span>,
    <a href="/stdlib-reference/types/Atomic/index#typeparam-T" class="code_type">T</a> <span class='code_param'>newValue</span>,
    <a href="/stdlib-reference/types/MemoryOrder/index" class="code_type">MemoryOrder</a> <span class='code_param'>successOrder</span>,
    <a href="/stdlib-reference/types/MemoryOrder/index" class="code_type">MemoryOrder</a> <span class='code_param'>failOrder</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/Atomic/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/IAtomicable/index">IAtomicable</a>;

</pre>

## Parameters

#### compareValue  : [T](/stdlib-reference/types/Atomic/index#typeparam-T) {#decl-compareValue}
#### newValue  : [T](/stdlib-reference/types/Atomic/index#typeparam-T) {#decl-newValue}
#### successOrder  : [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) = [MemoryOrder](/stdlib-reference/types/MemoryOrder/index)\.[Relaxed](/stdlib-reference/types/MemoryOrder/index#decl-Relaxed) {#decl-successOrder}
#### failOrder  : [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) = [MemoryOrder](/stdlib-reference/types/MemoryOrder/index)\.[Relaxed](/stdlib-reference/types/MemoryOrder/index#decl-Relaxed) {#decl-failOrder}

