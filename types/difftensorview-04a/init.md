---
layout: stdlib-reference
---

# DiffTensorView\<T, A\>\.init

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/difftensorview-04a/index" class="code_type">DiffTensorView</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a>&gt;.<a href="/stdlib-reference/types/difftensorview-04a/init">init</a>(
    <a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/types/difftensorview-04a/init#decl-primal" class="code_param">primal</a>,
    <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a> <a href="/stdlib-reference/types/difftensorview-04a/init#decl-diff" class="code_param">diff</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a> : <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/index" class="code_type">IDiffTensorWrapper</a>;

<a href="/stdlib-reference/types/difftensorview-04a/index" class="code_type">DiffTensorView</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a>&gt;.<a href="/stdlib-reference/types/difftensorview-04a/init">init</a>(<a href="/stdlib-reference/types/tensorview-06/index" class="code_type">TensorView</a>&lt;<a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/types/difftensorview-04a/init#decl-primal" class="code_param">primal</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/difftensorview-04a/index#typeparam-A" class="code_type">A</a> : <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/index" class="code_type">IDiffTensorWrapper</a>;

</pre>

## Parameters

#### primal  : [TensorView](/stdlib-reference/types/tensorview-06/index)\<[T](/stdlib-reference/types/tensorview-06/index#typeparam-T)\> {#decl-primal}
#### diff  : [A](/stdlib-reference/types/difftensorview-04a/index#typeparam-A) {#decl-diff}

