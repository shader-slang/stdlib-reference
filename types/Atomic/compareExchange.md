---
layout: stdlib-reference
---

# Atomic\<T\>\.compareExchange

## Description





## Signature 

<pre>
T <a href="/stdlib-reference/types/Atomic/index" class="code_type">Atomic</a>&lt;T&gt;.<a href="/stdlib-reference/types/Atomic/compareExchange">compareExchange</a>(
    T <span class='code_param'>compareValue</span>,
    T <span class='code_param'>newValue</span>,
    <a href="/stdlib-reference/types/MemoryOrder/index" class="code_type">MemoryOrder</a> <span class='code_param'>successOrder</span>,
    <a href="/stdlib-reference/types/MemoryOrder/index" class="code_type">MemoryOrder</a> <span class='code_param'>failOrder</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/IAtomicable/index" class="code_type">IAtomicable</a>;

</pre>

## Parameters

#### compareValue  : T
#### newValue  : T
#### successOrder  : [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) = [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) \. Relaxed
#### failOrder  : [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) = [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) \. Relaxed

