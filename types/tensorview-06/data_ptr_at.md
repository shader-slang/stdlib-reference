---
layout: stdlib-reference
---

# TensorView\<T\>\.data\_ptr\_at

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/ptr-0/index" class="code_type">Ptr</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/data_ptr_at">data_ptr_at</a>(<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/data_ptr_at#decl-index" class="code_param">index</a>);

<a href="/stdlib-reference/types/ptr-0/index" class="code_type">Ptr</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/data_ptr_at">data_ptr_at</a>&lt;<a href="/stdlib-reference/types/tensorview-06/data_ptr_at#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/tensorview-06/data_ptr_at#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/tensorview-06/data_ptr_at#decl-index" class="code_param">index</a>);

</pre>

## Generic Parameters

#### N  : int {#decl-N}

## Parameters

#### index  : uint {#decl-index}
#### index  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-index}

## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.



