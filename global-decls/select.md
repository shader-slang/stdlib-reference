---
layout: stdlib-reference
---

# select

## Description





## Signature 

<pre>
<span class="code_type">T</span> <a href="/stdlib-reference/global-decls/select">select</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_keyword">bool</span> <span class='code_param'>condition</span>,
    <span class="code_type">T</span> <span class='code_param'>ifTrue</span>,
    <span class="code_type">T</span> <span class='code_param'>ifFalse</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <a href="/stdlib-reference/global-decls/select">select</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, N&gt; <span class='code_param'>condition</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>ifTrue</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>ifFalse</span>);

</pre>

## Parameters

#### T
#### N  : int
#### condition  : bool
#### ifTrue  : T
#### ifFalse  : T
#### condition  : [vector](/stdlib-reference/types/vector/index)\<bool, N\>
#### ifTrue  : [vector](/stdlib-reference/types/vector/index)\<T, N\>
#### ifFalse  : [vector](/stdlib-reference/types/vector/index)\<T, N\>

