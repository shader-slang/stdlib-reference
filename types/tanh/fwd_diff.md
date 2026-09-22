---
layout: stdlib-reference
---

# tanh\<T\>\.fwd\_diff

## Description





## Signature 

<pre>
<span class='code_keyword'>static</span> &lt;error&gt; <a href="../../global-decls/tanh.html">tanh</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.fwd_diff()
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> &lt;error&gt; <a href="../../global-decls/tanh.html">tanh</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.fwd_diff()
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> &lt;error&gt; <a href="../../global-decls/tanh.html">tanh</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;.fwd_diff()
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; <a href="../../global-decls/tanh.html">tanh</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.fwd_diff(<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; <a href="fwd_diff.html#decl-dpx" class="code_param">dpx</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Parameters

####  <a id="decl-dpx"></a>dpx  : [DifferentialPair](../differentialpair-0c/index.html)\<[CoopVec](../coopvec-04/index.html)\<[T](../coopvec-04/index.html#typeparam-T), [N](../coopvec-04/index.html#decl-N) \>\>

