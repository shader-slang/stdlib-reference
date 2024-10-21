---
layout: stdlib-reference
---

# Atomic\<T\>\.min

## Description

Atomically computes the minimum of the stored value and the given
value, storing the result and returning the original stored value.




## Signature 

<pre>
<a href="/stdlib-reference/types/atomic-0/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/atomic-0/index" class="code_type">Atomic</a>&lt;<a href="/stdlib-reference/types/atomic-0/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/atomic-0/min">min</a>(
    <a href="/stdlib-reference/types/atomic-0/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/atomic-0/min#decl-value" class="code_param">value</a>,
    <a href="/stdlib-reference/types/memoryorder-06/index" class="code_type">MemoryOrder</a> <a href="/stdlib-reference/types/atomic-0/min#decl-order" class="code_param">order</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/atomic-0/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/iarithmeticatomicable-01b/index" class="code_type">IArithmeticAtomicable</a>;

</pre>

## Parameters

#### value  : [T](/stdlib-reference/types/atomic-0/index#typeparam-T) {#decl-value}
#### order  : [MemoryOrder](/stdlib-reference/types/memoryorder-06/index) = [MemoryOrder](/stdlib-reference/types/memoryorder-06/index)\.[Relaxed](/stdlib-reference/types/memoryorder-06/index#decl-Relaxed) {#decl-order}

