---
layout: stdlib-reference
---

# Atomic\<T\>\.max

## Description





## Signature 

<pre>
T <a href="/stdlib-reference/types/Atomic/index" class="code_type">Atomic</a>&lt;T&gt;.<a href="/stdlib-reference/types/Atomic/max">max</a>(
    T <span class='code_param'>value</span>,
    <a href="/stdlib-reference/types/MemoryOrder/index" class="code_type">MemoryOrder</a> <span class='code_param'>order</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/IArithmeticAtomicable/index" class="code_type">IArithmeticAtomicable</a>;

</pre>

## Parameters

#### value  : T
#### order  : [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) = [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) \. Relaxed

