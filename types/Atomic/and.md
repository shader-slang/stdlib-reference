---
layout: stdlib-reference
---

# Atomic\<T\>\.and

## Description





## Signature 

<pre>
<span class="code_type">T</span> <a href="/stdlib-reference/types/Atomic/index" class="code_type">Atomic</a>&lt;<span class="code_type">T</span>&gt;.<a href="/stdlib-reference/types/Atomic/and">and</a>(
    <span class="code_type">T</span> <span class='code_param'>value</span>,
    <a href="/stdlib-reference/types/MemoryOrder/index" class="code_type">MemoryOrder</a> <span class='code_param'>order</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/IBitAtomicable/index" class="code_type">IBitAtomicable</a>;

</pre>

## Parameters

#### value  : T {#decl-value}
#### order  : [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) = [MemoryOrder](/stdlib-reference/types/MemoryOrder/index)\.Relaxed {#decl-order}

