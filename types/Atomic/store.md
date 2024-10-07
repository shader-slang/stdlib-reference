---
layout: stdlib-reference
---

# Atomic\<T\>\.store

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/Atomic/index" class="code_type">Atomic</a>&lt;<span class="code_type">T</span>&gt;.<a href="/stdlib-reference/types/Atomic/store">store</a>(
    <span class="code_type">T</span> <span class='code_param'>newValue</span>,
    <a href="/stdlib-reference/types/MemoryOrder/index" class="code_type">MemoryOrder</a> <span class='code_param'>order</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/IAtomicable/index" class="code_type">IAtomicable</a>;

</pre>

## Parameters

#### newValue  : T {#decl-newValue}
#### order  : [MemoryOrder](/stdlib-reference/types/MemoryOrder/index) = [MemoryOrder](/stdlib-reference/types/MemoryOrder/index)\.Relaxed {#decl-order}

