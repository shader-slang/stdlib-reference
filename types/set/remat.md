---
layout: stdlib-reference
---

# CoopVec\<T, N\>\.operator\[\]\.set\.remat

## Description





## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="../coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.operator[].<span class="code_keyword">set</span>.remat(
     ,
    <span class="code_keyword">inout</span> <a href="../coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; ,
    <span class="code_keyword">int</span> ,
    <a href="index.html#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">set</span>.remat(
     ,
    <span class="code_keyword">inout</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt; ,
    <span class="code_keyword">uint</span> ,
    <a href="index.html#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<span class='code_keyword'>static</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">set</span>.remat(
     ,
    <span class="code_keyword">inout</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt; ,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; ,
    <a href="index.html#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<span class='code_keyword'>static</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">set</span>.remat(
     ,
    <span class="code_keyword">inout</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt; ,
    <span class="code_keyword">uint</span> ,
    <span class="code_keyword">uint</span> ,
    <a href="index.html#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<span class='code_keyword'>static</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">set</span>.remat(
     ,
    <span class="code_keyword">inout</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt; ,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; ,
    <a href="index.html#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<span class='code_keyword'>static</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">set</span>.remat(
     ,
    <span class="code_keyword">inout</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt; ,
    <span class="code_keyword">uint</span> ,
    <span class="code_keyword">uint</span> ,
    <span class="code_keyword">uint</span> ,
    <a href="index.html#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<span class='code_keyword'>static</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">set</span>.remat(
     ,
    <span class="code_keyword">inout</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt; ,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; ,
    <a href="index.html#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<span class='code_keyword'>static</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.operator[].<span class="code_keyword">set</span>.remat(
     ,
    <span class="code_keyword">inout</span> <a href="../difftensorview-04a/index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt; ,
    <span class="code_keyword">uint</span> ,
    <span class="code_keyword">uint</span> ,
    <span class="code_keyword">uint</span> ,
    <span class="code_keyword">uint</span> ,
    <a href="index.html#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

</pre>

## Parameters


