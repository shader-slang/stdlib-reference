---
layout: stdlib-reference
---

# DiffTensorView\<T, A\>\.storeOnce

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/difftensorview-04a/index" class="code_type">DiffTensorView</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a>&gt;.<a href="/stdlib-reference/types/difftensorview-04a/storeonce-5">storeOnce</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/difftensorview-04a/storeonce-5#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/difftensorview-04a/storeonce-5#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a> : <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/index" class="code_type">IDiffTensorWrapper</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/difftensorview-04a/index" class="code_type">DiffTensorView</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a>&gt;.<a href="/stdlib-reference/types/difftensorview-04a/storeonce-5">storeOnce</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/storeonce-5#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/difftensorview-04a/storeonce-5#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/difftensorview-04a/storeonce-5#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/difftensorview-04a/storeonce-5#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a> : <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/index" class="code_type">IDiffTensorWrapper</a>;

</pre>

## Generic Parameters

#### N  : int {#decl-N}

## Parameters

#### x  : uint {#decl-x}
#### val  : [T](/stdlib-reference/types/difftensorview-04a/index#typeparam-T) {#decl-val}
#### x  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}

