---
layout: stdlib-reference
---

# TensorView\<T\>\.data\_ptr\_at

## Description





## Signature 

<pre>
<a href="../ptr-0/index.html" class="code_type">Ptr</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt; <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="data_ptr_at.html">data_ptr_at</a>(<span class="code_keyword">uint</span> <a href="data_ptr_at.html#decl-index" class="code_param">index</a>);

<a href="../ptr-0/index.html" class="code_type">Ptr</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt; <a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="data_ptr_at.html">data_ptr_at</a>&lt;<a href="data_ptr_at.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="data_ptr_at.html#decl-N" class="code_var">N</a>&gt; <a href="data_ptr_at.html#decl-index" class="code_param">index</a>);

</pre>

## Generic Parameters

####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-index"></a>index  : uint
####  <a id="decl-index"></a>index  : [vector](../vector/index)\<uint, [N](../vector/index#decl-N)\>

## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.



