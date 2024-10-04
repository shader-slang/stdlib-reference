---
layout: stdlib-reference
---

# select

## Signature 

<pre>
T <a href="/stdlib-reference/global-decls/select">select</a>&lt;T&gt;(
    <span class="code_keyword">bool</span> <span class='code_param'>condition</span>,
    T <span class='code_param'>ifTrue</span>,
    T <span class='code_param'>ifFalse</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/select">select</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>condition</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>ifTrue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>ifFalse</span>);

</pre>

## Parameters

* `T`
* `N`
* `condition`
* `ifTrue`
* `ifFalse`

