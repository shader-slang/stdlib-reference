---
layout: stdlib-reference
---

# select

## Description





## Signature 

<pre>
<a href="select.html#typeparam-T" class="code_type">T</a> <a href="select.html">select</a>&lt;<a href="select.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">bool</span> <a href="select.html#decl-condition" class="code_param">condition</a>,
    <a href="select.html#typeparam-T" class="code_type">T</a> <a href="select.html#decl-ifTrue" class="code_param">ifTrue</a>,
    <a href="select.html#typeparam-T" class="code_type">T</a> <a href="select.html#decl-ifFalse" class="code_param">ifFalse</a>);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="select.html#typeparam-T" class="code_type">T</a>, <a href="select.html#decl-N" class="code_var">N</a>&gt; <a href="select.html">select</a>&lt;<a href="select.html#typeparam-T" class="code_type">T</a>, <a href="select.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, <a href="select.html#decl-N" class="code_var">N</a>&gt; <a href="select.html#decl-condition" class="code_param">condition</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="select.html#typeparam-T" class="code_type">T</a>, <a href="select.html#decl-N" class="code_var">N</a>&gt; <a href="select.html#decl-ifTrue" class="code_param">ifTrue</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="select.html#typeparam-T" class="code_type">T</a>, <a href="select.html#decl-N" class="code_var">N</a>&gt; <a href="select.html#decl-ifFalse" class="code_param">ifFalse</a>);

<a href="../types/optional-0/index.html" class="code_type">Optional</a>&lt;<a href="select.html#typeparam-T" class="code_type">T</a>&gt; <a href="select.html">select</a>&lt;<a href="select.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">bool</span> <a href="select.html#decl-condition" class="code_param">condition</a>,
    __none_t <a href="select.html#decl-ifTrue" class="code_param">ifTrue</a>,
    <a href="select.html#typeparam-T" class="code_type">T</a> <a href="select.html#decl-ifFalse" class="code_param">ifFalse</a>);

<a href="../types/optional-0/index.html" class="code_type">Optional</a>&lt;<a href="select.html#typeparam-T" class="code_type">T</a>&gt; <a href="select.html">select</a>&lt;<a href="select.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">bool</span> <a href="select.html#decl-condition" class="code_param">condition</a>,
    <a href="select.html#typeparam-T" class="code_type">T</a> <a href="select.html#decl-ifTrue" class="code_param">ifTrue</a>,
    __none_t <a href="select.html#decl-ifFalse" class="code_param">ifFalse</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-condition"></a>condition  : bool
####  <a id="decl-ifTrue"></a>ifTrue  : [T](select#typeparam-T)
####  <a id="decl-ifFalse"></a>ifFalse  : [T](select#typeparam-T)
####  <a id="decl-condition"></a>condition  : [vector](../types/vector/index)\<bool, [N](../types/vector/index#decl-N)\>
####  <a id="decl-ifTrue"></a>ifTrue  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
####  <a id="decl-ifFalse"></a>ifFalse  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
####  <a id="decl-ifTrue"></a>ifTrue  : \_\_none\_t
####  <a id="decl-ifFalse"></a>ifFalse  : \_\_none\_t

