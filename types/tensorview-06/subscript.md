---
layout: stdlib-reference
---

# TensorView\<T\>\.subscript

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/subscript">subscript</a>(<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-index" class="code_param">index</a>);

<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/subscript">subscript</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i1" class="code_param">i1</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i2" class="code_param">i2</a>);

<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/subscript">subscript</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i" class="code_param">i</a>);

<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/subscript">subscript</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i1" class="code_param">i1</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i2" class="code_param">i2</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i3" class="code_param">i3</a>);

<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/subscript">subscript</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i" class="code_param">i</a>);

<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/subscript">subscript</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i1" class="code_param">i1</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i2" class="code_param">i2</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i3" class="code_param">i3</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i4" class="code_param">i4</a>);

<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/subscript">subscript</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i" class="code_param">i</a>);

<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/tensorview-06/index#typeparam-T" class="code_type">T</a>&gt;.<a href="/stdlib-reference/types/tensorview-06/subscript">subscript</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i1" class="code_param">i1</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i2" class="code_param">i2</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i3" class="code_param">i3</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i4" class="code_param">i4</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/tensorview-06/subscript#decl-i5" class="code_param">i5</a>);

</pre>

## Parameters

#### index  : uint {#decl-index}
#### i1  : uint {#decl-i1}
#### i2  : uint {#decl-i2}
#### i  : [vector](/stdlib-reference/types/vector/index)\<uint, 2\> {#decl-i}
#### i3  : uint {#decl-i3}
#### i  : [vector](/stdlib-reference/types/vector/index)\<uint, 3\> {#decl-i}
#### i4  : uint {#decl-i4}
#### i  : [vector](/stdlib-reference/types/vector/index)\<uint, 4\> {#decl-i}
#### i5  : uint {#decl-i5}

