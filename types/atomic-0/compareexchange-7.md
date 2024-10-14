---
layout: stdlib-reference
---

# Atomic\<T\>\.compareExchange

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/atomic-0/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/atomic-0/index" class="code_type">Atomic</a>&lt;<a href="/stdlib-reference/types/atomic-0/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/atomic-0/compareexchange-7">compareExchange</a>(
    <a href="/stdlib-reference/types/atomic-0/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/atomic-0/compareexchange-7#decl-compareValue" class="code_param">compareValue</a>,
    <a href="/stdlib-reference/types/atomic-0/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/atomic-0/compareexchange-7#decl-newValue" class="code_param">newValue</a>,
    <a href="/stdlib-reference/types/memoryorder-06/index" class="code_type">MemoryOrder</a> <a href="/stdlib-reference/types/atomic-0/compareexchange-7#decl-successOrder" class="code_param">successOrder</a>,
    <a href="/stdlib-reference/types/memoryorder-06/index" class="code_type">MemoryOrder</a> <a href="/stdlib-reference/types/atomic-0/compareexchange-7#decl-failOrder" class="code_param">failOrder</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/atomic-0/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/iatomicable-01/index" class="code_type">IAtomicable</a>;

</pre>

## Parameters

#### compareValue  : [T](/stdlib-reference/types/atomic-0/index#typeparam-T) {#decl-compareValue}
#### newValue  : [T](/stdlib-reference/types/atomic-0/index#typeparam-T) {#decl-newValue}
#### successOrder  : [MemoryOrder](/stdlib-reference/types/memoryorder-06/index) = [MemoryOrder](/stdlib-reference/types/memoryorder-06/index)\.[Relaxed](/stdlib-reference/types/memoryorder-06/index#decl-Relaxed) {#decl-successOrder}
#### failOrder  : [MemoryOrder](/stdlib-reference/types/memoryorder-06/index) = [MemoryOrder](/stdlib-reference/types/memoryorder-06/index)\.[Relaxed](/stdlib-reference/types/memoryorder-06/index#decl-Relaxed) {#decl-failOrder}

