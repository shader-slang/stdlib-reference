---
layout: stdlib-reference
---

# Atomic\<T\>\.store

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Atomic/index" class="code_type">Atomic</a>&lt;T&gt;.<a href="/stdlib-reference/types/Atomic/store">store</a>(
    T <span class='code_param'>newValue</span>,
    <a href="/stdlib-reference/types/MemoryOrder/index" class="code_type">MemoryOrder</a> <span class='code_param'>order</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/IAtomicable/index" class="code_type">IAtomicable</a>;

</pre>

## Parameters

#### newValue  : T
#### order  : [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) = [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) \. Relaxed

