---
layout: stdlib-reference
---

# Atomic\<T\>\.compareExchange

## Description





## Signature 

<pre>
<span class="code_type">T</span> <a href="/stdlib-reference/types/Atomic/index" class="code_type">Atomic</a>&lt;<span class="code_type">T</span>&gt;.<a href="/stdlib-reference/types/Atomic/compareExchange">compareExchange</a>(
    <span class="code_type">T</span> <span class='code_param'>compareValue</span>,
    <span class="code_type">T</span> <span class='code_param'>newValue</span>,
    <a href="/stdlib-reference/types/MemoryOrder/index" class="code_type">MemoryOrder</a> <span class='code_param'>successOrder</span>,
    <a href="/stdlib-reference/types/MemoryOrder/index" class="code_type">MemoryOrder</a> <span class='code_param'>failOrder</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/IAtomicable/index" class="code_type">IAtomicable</a>;

</pre>

## Parameters

#### compareValue  : T
#### newValue  : T
#### successOrder  : [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) = [MemoryOrder](/stdlib-reference/types/MemoryOrder/index)\.Relaxed
#### failOrder  : [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) = [MemoryOrder](/stdlib-reference/types/MemoryOrder/index)\.Relaxed

