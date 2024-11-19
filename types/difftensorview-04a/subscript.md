---
layout: stdlib-reference
---

# DiffTensorView\<T, A\>\.subscript

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/difftensorview-04a/index" class="code_type">DiffTensorView</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a>&gt;.<a href="/stdlib-reference/types/difftensorview-04a/subscript">subscript</a>(<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/difftensorview-04a/subscript#decl-index" class="code_param">index</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a> : <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/index" class="code_type">IDiffTensorWrapper</a>;

<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/difftensorview-04a/index" class="code_type">DiffTensorView</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a>&gt;.<a href="/stdlib-reference/types/difftensorview-04a/subscript">subscript</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="/stdlib-reference/types/difftensorview-04a/subscript#decl-index" class="code_param">index</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a> : <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/index" class="code_type">IDiffTensorWrapper</a>;

<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/difftensorview-04a/index" class="code_type">DiffTensorView</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a>&gt;.<a href="/stdlib-reference/types/difftensorview-04a/subscript">subscript</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/difftensorview-04a/subscript#decl-x" class="code_param">x</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/difftensorview-04a/subscript#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a> : <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/index" class="code_type">IDiffTensorWrapper</a>;

<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/difftensorview-04a/index" class="code_type">DiffTensorView</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a>&gt;.<a href="/stdlib-reference/types/difftensorview-04a/subscript">subscript</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="/stdlib-reference/types/difftensorview-04a/subscript#decl-index" class="code_param">index</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a> : <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/index" class="code_type">IDiffTensorWrapper</a>;

<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/difftensorview-04a/index" class="code_type">DiffTensorView</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a>&gt;.<a href="/stdlib-reference/types/difftensorview-04a/subscript">subscript</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/difftensorview-04a/subscript#decl-x" class="code_param">x</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/difftensorview-04a/subscript#decl-y" class="code_param">y</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/difftensorview-04a/subscript#decl-z" class="code_param">z</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a> : <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/index" class="code_type">IDiffTensorWrapper</a>;

<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/difftensorview-04a/index" class="code_type">DiffTensorView</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a>&gt;.<a href="/stdlib-reference/types/difftensorview-04a/subscript">subscript</a>(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/types/difftensorview-04a/subscript#decl-index" class="code_param">index</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a> : <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/index" class="code_type">IDiffTensorWrapper</a>;

<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/difftensorview-04a/index" class="code_type">DiffTensorView</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a>&gt;.<a href="/stdlib-reference/types/difftensorview-04a/subscript">subscript</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/difftensorview-04a/subscript#decl-x" class="code_param">x</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/difftensorview-04a/subscript#decl-y" class="code_param">y</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/difftensorview-04a/subscript#decl-z" class="code_param">z</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/difftensorview-04a/subscript#decl-w" class="code_param">w</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a> : <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/index" class="code_type">IDiffTensorWrapper</a>;

</pre>

## Parameters

#### index  : uint {#decl-index}
#### index  : [vector](/stdlib-reference/types/vector/index)\<uint, 2\> {#decl-index}
#### x  : uint {#decl-x}
#### y  : uint {#decl-y}
#### index  : [vector](/stdlib-reference/types/vector/index)\<uint, 3\> {#decl-index}
#### z  : uint {#decl-z}
#### index  : [vector](/stdlib-reference/types/vector/index)\<uint, 4\> {#decl-index}
#### w  : uint {#decl-w}

