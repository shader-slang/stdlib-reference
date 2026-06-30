---
layout: stdlib-reference
---

# DiffTensorView\<T, A\>\.operator\[\]\.get\.apply\_bwd

## Description





## Signature 

<pre>
<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, &gt; <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">get</span>.apply_bwd(
    <span class="code_keyword">uint</span> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, &gt; <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">get</span>.apply_bwd(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, &gt; <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">get</span>.apply_bwd(
    <span class="code_keyword">uint</span> ,
    <span class="code_keyword">uint</span> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, &gt; <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">get</span>.apply_bwd(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, &gt; <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">get</span>.apply_bwd(
    <span class="code_keyword">uint</span> ,
    <span class="code_keyword">uint</span> ,
    <span class="code_keyword">uint</span> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, &gt; <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">get</span>.apply_bwd(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, &gt; <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">get</span>.apply_bwd(
    <span class="code_keyword">uint</span> ,
    <span class="code_keyword">uint</span> ,
    <span class="code_keyword">uint</span> ,
    <span class="code_keyword">uint</span> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

</pre>

## Parameters


