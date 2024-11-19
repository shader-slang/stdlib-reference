---
layout: stdlib-reference
---

# TensorView\<T\>\.load

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/load">load</a>(<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/load">load</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-x" class="code_param">x</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-y" class="code_param">y</a>);

<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/load">load</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-x" class="code_param">x</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-y" class="code_param">y</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-z" class="code_param">z</a>);

<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/load">load</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-x" class="code_param">x</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-y" class="code_param">y</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-z" class="code_param">z</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-w" class="code_param">w</a>);

<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/load">load</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-i0" class="code_param">i0</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-i1" class="code_param">i1</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-i2" class="code_param">i2</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-i3" class="code_param">i3</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/load#decl-i4" class="code_param">i4</a>);

<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/load">load</a>&lt;<a href="/stdlib-reference/types/tensorview-06/load#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/tensorview-06/load#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/tensorview-06/load#decl-index" class="code_param">index</a>);

</pre>

## Generic Parameters

#### N  : int {#decl-N}

## Parameters

#### x  : uint {#decl-x}
#### y  : uint {#decl-y}
#### z  : uint {#decl-z}
#### w  : uint {#decl-w}
#### i0  : uint {#decl-i0}
#### i1  : uint {#decl-i1}
#### i2  : uint {#decl-i2}
#### i3  : uint {#decl-i3}
#### i4  : uint {#decl-i4}
#### index  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-index}

## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.



