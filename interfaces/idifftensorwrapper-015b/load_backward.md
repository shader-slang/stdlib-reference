---
layout: stdlib-reference
---

# IDiffTensorWrapper\.load\_backward

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/index" class="code_type">IDiffTensorWrapper</a>.<a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward">load_backward</a>&lt;<a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward#decl-i" class="code_param">i</a>,
    <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward#decl-dOut" class="code_param">dOut</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/index" class="code_type">IDiffTensorWrapper</a>.<a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward">load_backward</a>&lt;<a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward#decl-i" class="code_param">i</a>,
    <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward#decl-dOut" class="code_param">dOut</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### i  : uint {#decl-i}
#### dOut  : [T](/stdlib-reference/interfaces/idifftensorwrapper-015b/load_backward#typeparam-T) {#decl-dOut}
#### i  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-i}

