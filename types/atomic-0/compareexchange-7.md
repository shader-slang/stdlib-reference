---
layout: stdlib-reference
---

# Atomic\<T\>\.compareExchange

## Description

Atomically replace and return the stored <span class='code'><a href="/stdlib-reference/types/atomic-0/index#typeparam-T" class="code_type">T</a></span> value with a new <span class='code'><a href="/stdlib-reference/types/atomic-0/index#typeparam-T" class="code_type">T</a></span> value
only if the stored value is equal to the specified comparison value.

If the comparison value is equal to the stored value, then the
<span class='code'><a href="/stdlib-reference/types/atomic-0/compareexchange-7#decl-successOrder" class="code_param">successOrder</a></span> <span class='code'><a href="/stdlib-reference/types/memoryorder-06/index" class="code_type">MemoryOrder</a></span> is used, otherwise the <span class='code'><a href="/stdlib-reference/types/atomic-0/compareexchange-7#decl-failOrder" class="code_param">failOrder</a></span>
<span class='code'><a href="/stdlib-reference/types/memoryorder-06/index" class="code_type">MemoryOrder</a></span> is used.

<span class='code'><a href="/stdlib-reference/types/atomic-0/compareexchange-7#decl-successOrder" class="code_param">successOrder</a></span> must be at least as strong as <span class='code'><a href="/stdlib-reference/types/atomic-0/compareexchange-7#decl-failOrder" class="code_param">failOrder</a></span>

<span class='code'><a href="/stdlib-reference/types/atomic-0/compareexchange-7#decl-failOrder" class="code_param">failOrder</a></span> must not be <span class='code'><a href="/stdlib-reference/types/memoryorder-06/index" class="code_type">MemoryOrder</a>.<a href="/stdlib-reference/types/memoryorder-06/index#decl-Release" class="code_var">Release</a></span> or <span class='code'><a href="/stdlib-reference/types/memoryorder-06/index" class="code_type">MemoryOrder</a>.<a href="/stdlib-reference/types/memoryorder-06/index#decl-AcquireRelease" class="code_var">AcquireRelease</a></span>




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

