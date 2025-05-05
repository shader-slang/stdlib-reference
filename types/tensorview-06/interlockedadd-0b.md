---
layout: stdlib-reference
---

# TensorView\<T\>\.InterlockedAdd

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedadd-0b">InterlockedAdd</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/interlockedadd-0b#decl-index" class="code_param">index</a>,
    <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/interlockedadd-0b#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/interlockedadd-0b#decl-oldVal" class="code_param">oldVal</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/interlockedadd-0b">InterlockedAdd</a>&lt;<a href="/stdlib-reference/types/tensorview-06/interlockedadd-0b#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/tensorview-06/interlockedadd-0b#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/tensorview-06/interlockedadd-0b#decl-index" class="code_param">index</a>,
    <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/interlockedadd-0b#decl-val" class="code_param">val</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/interlockedadd-0b#decl-oldVal" class="code_param">oldVal</a>);

</pre>

## Generic Parameters

#### N  : int {#decl-N}

## Parameters

#### index  : uint {#decl-index}
#### val  : [T](/stdlib-reference/types/tensorview-06/index#typeparam-T) {#decl-val}
#### oldVal  : [T](/stdlib-reference/types/tensorview-06/index#typeparam-T) {#decl-oldVal}
#### index  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-index}

## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.



