---
layout: stdlib-reference
---

# DiffTensorView\<T, A\>\.init

## Description





## Signature 

<pre>
<a href="index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.<a href="init.html">init</a>(
    <a href="../tensorview-06/index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt; <a href="init.html#decl-primal" class="code_param">primal</a>,
    <a href="index.html#typeparam-A" class="code_type">A</a> <a href="init.html#decl-diff" class="code_param">diff</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

<a href="index.html" class="code_type">DiffTensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-A" class="code_type">A</a>&gt;.<a href="init.html">init</a>(<a href="../tensorview-06/index.html" class="code_type">TensorView</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt; <a href="init.html#decl-primal" class="code_param">primal</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-A" class="code_type">A</a> : <a href="../../interfaces/idifftensorwrapper-015b/index.html" class="code_type">IDiffTensorWrapper</a>;

</pre>

## Parameters

####  <a id="decl-primal"></a>primal  : [TensorView](../tensorview-06/index.html)\<[T](../tensorview-06/index.html#typeparam-T)\>
####  <a id="decl-diff"></a>diff  : [A](index.html#typeparam-A)

